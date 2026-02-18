import { Locator, Page } from '@playwright/test'

/**
 * Page Object Model for the Login page
 */
export class LoginPage {
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator
  readonly dashboardHeader: Locator
  readonly flashMessage: Locator
  readonly fieldErrorMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.locator('input[name="username"]')
    this.passwordInput = page.locator('input[name="password"]')
    this.loginButton = page.locator('button[type="submit"]')
    this.dashboardHeader = page.locator('div.oxd-topbar-header-title h6')
    this.flashMessage = page.locator('div.oxd-alert-content')
    this.fieldErrorMessage = page.locator('form > div:nth-of-type(2) span')
  }

  /** Navigate to login page */
  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php')
  }

  /** Enter username */
  // ...existing code...
  /** Enter username */
  async enterUsername(username: string) {
    await this.usernameInput.fill(username)
  }

  /** Enter password */
  async enterPassword(password: string) {
    await this.passwordInput.fill(password)
  }
  // ...existing code...
  /** Click login button */
  async clickLogin() {
    await this.loginButton.click()
  }

  /** Complete login action */
  async login(username: string, password: string) {
    await this.enterUsername(username)
    await this.enterPassword(password)
    await this.clickLogin()
  }

  /** Check if on dashboard page */
  async isOnDashboard(): Promise<boolean> {
    await this.page.waitForLoadState('networkidle')
    const currentUrl = this.page.url()
    return currentUrl.includes('/web/index.php/dashboard/index')
  }

  /** Check if dashboard header is visible and correct */
  async isDashboardHeaderVisible(): Promise<boolean> {
    await this.dashboardHeader.waitFor({ state: 'visible', timeout: 5000 })
    const text = await this.dashboardHeader.innerText()
    return text?.trim() === 'Dashboard'
  }

  /** Get flash message text */
  async getFlashMessage(): Promise<string> {
    await this.flashMessage.waitFor({ state: 'visible' })
    return (await this.flashMessage.innerText()).trim()
  }

  async getFieldErrorMessage(): Promise<string> {
    await this.fieldErrorMessage.waitFor({ state: 'visible' })
    return (await this.fieldErrorMessage.innerText()).trim()
  }

  /** Check if currently on the login page */
  isOnLoginPage(): boolean {
    return this.page.url().includes('/web/index.php/auth/login')
  }
}
