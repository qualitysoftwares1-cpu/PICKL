#!/usr/bin/env node
import { execSync } from 'child_process'
import 'dotenv/config'

// CLI feature path and tags (optional)
const featurePath = 'test/features/recruitment.feature'
const tags = process.argv.includes('--tags')
  ? process.argv[process.argv.indexOf('--tags') + 1]
  : 'not @skip'

// Build the command
const command = `npx cross-env NODE_OPTIONS="--import tsx --import dotenv/config" cucumber-js --config cucumber.js --import "test/support/**/*.ts" --import "test/steps/**/*.ts" --format "./test/support/verbose-formatter.ts" --format "json:test-results/cucumber-report.json" --tags "${tags}" "${featurePath}"`

// eslint-disable-next-line no-console
console.log('Executing command:', command)

try {
  execSync(command, { stdio: 'inherit' })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (error) {
  console.error('Test execution failed')
  process.exit(1)
}
