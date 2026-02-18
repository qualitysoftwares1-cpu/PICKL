/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { After, AfterAll, Before, BeforeAll, Status, setDefaultTimeout } from '@cucumber/cucumber'
import { Browser, Page, chromium, firefox, webkit } from '@playwright/test'
import { existsSync } from 'fs'
import { mkdir, readFile } from 'fs/promises'
import { ICustomWorld } from './world.js'

// Set timeout for all hooks and steps
setDefaultTimeout(100000)

interface PickleInfo {
  name: string
  id: string
}

BeforeAll(async () => {
  // Create directories for artifacts
  const dirs = ['test-results/videos', 'test-results/traces', 'test-results/screenshots']
  for (const dir of dirs) {
    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true })
    }
  }
})

Before(async function (this: ICustomWorld, { pickle }) {
  // Determine browser type and headless mode
  const browserType = (process.env.BROWSER ??
    (this.parameters?.browser as string | undefined) ??
    'chromium') as 'chromium' | 'firefox' | 'webkit'
  const headless = process.env.HEADLESS !== 'false'

  // Launch browser per scenario
  let browser: Browser
  switch (browserType) {
    case 'firefox':
      browser = await firefox.launch({ headless })
      break
    case 'webkit':
      browser = await webkit.launch({ headless })
      break
    default:
      browser = await chromium.launch({ headless })
  }

  // Create context with video and viewport
  const context = await browser.newContext({
    baseURL: process.env.BASE_URL,
    recordVideo: { dir: 'test-results/videos' },
    viewport: { width: 1920, height: 1080 },
  })

  // Generate a safe, shortened scenario name to avoid Windows path issues
  const safeScenarioName = `${pickle.name.replace(/[^a-z0-9]/gi, '_').substring(0, 50)}-${pickle.id}`

  // Start tracing
  await context.tracing.start({
    name: safeScenarioName,
    title: pickle.name,
    screenshots: true,
    snapshots: true,
    sources: true,
  })

  // Create a new page and attach to world
  this.page = await context.newPage()
  this.context = context
  this.browser = browser
})

async function attachScreenshot(page: Page, pickle: PickleInfo, world: ICustomWorld) {
  try {
    const path = `test-results/screenshots/${pickle.name.replace(/[^a-z0-9]/gi, '_').substring(0, 50)}-${pickle.id}.png`
    const screenshot = await page.screenshot({ path, fullPage: true })
    world.attach(screenshot, 'image/png')
  } catch (err) {
    console.warn(`Failed to capture screenshot for "${pickle.name}":`, err)
  }
}

async function attachVideo(page: Page, world: ICustomWorld) {
  try {
    const video = page.video()
    if (video) {
      await page.close()
      const videoPath = await video.path()
      const buffer = await readFile(videoPath)
      world.attach(buffer, 'video/webm')
    }
  } catch (err) {
    console.warn('Failed to attach video:', err)
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
async function attachTrace(tracePath: string, world: ICustomWorld) {
  try {
    const traceLink = `<a href="https://trace.playwright.dev/">Open trace file: ${tracePath}</a>`
    world.attach(traceLink, 'text/html')
  } catch (err) {
    console.warn('Failed to attach trace link:', err)
  }
}

After(async function (this: ICustomWorld, { pickle, result }) {
  const { page, context, browser } = this
  const tracePath = `test-results/traces/${pickle.id}.zip`

  // Stop tracing safely
  try {
    await context?.tracing.stop({ path: tracePath })
  } catch (err) {
    console.warn(`Failed to stop tracing for "${pickle.name}":`, err)
  }

  // Attach artifacts only if scenario failed
  if (result?.status === Status.FAILED) {
    if (page) {
      await attachScreenshot(page, pickle, this)
      await attachVideo(page, this)
    }
    await attachTrace(tracePath, this)
  }

  // Close everything safely
  try {
    await page?.close().catch(() => {})
    await context?.close().catch(() => {})
    await browser?.close().catch(() => {})
  } catch (err) {
    console.warn(`Failed to close browser/context for "${pickle.name}":`, err)
  }
})

AfterAll(async () => {
  // Global cleanup if needed
})
