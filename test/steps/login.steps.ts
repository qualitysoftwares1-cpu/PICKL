import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage.js'
import { TEST_DATA } from '../../test_data/test_data.js'
import { ICustomWorld } from '../support/world.js'

Given('I am on the login page', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const loginPage = new LoginPage(this.page)
  await loginPage.goto()
})

/* =========================
   LOGIN ACTIONS
========================= */

When(
  'I enter valid credentials {string} and {string}',
  async function (this: ICustomWorld, usernameVar: string, passwordVar: string) {
    if (!this.page) {
      throw new Error('Page is not initialized')
    }

    const loginPage = new LoginPage(this.page)

    const username = TEST_DATA[usernameVar as keyof typeof TEST_DATA] as string
    const password = TEST_DATA[passwordVar as keyof typeof TEST_DATA] as string

    await loginPage.usernameInput.type(username, { delay: 50 })
    await loginPage.enterPassword(password)
    // eslint-disable-next-line no-console
    console.log('\n     |     Username entered:', username)
    // eslint-disable-next-line no-console
    console.log('     |     Password entered:', password)
    this.attach(`Entered credentials -> Username: "${username}", Password: "${password}"`)
  },
)

When(
  'I enter invalid username {string} and a valid password {string}',
  async function (this: ICustomWorld, invalidUnameVar: string, invalidPwordVar: string) {
    const loginPage = new LoginPage(this.page!)

    const username = TEST_DATA[invalidUnameVar as keyof typeof TEST_DATA] as string
    const password = TEST_DATA[invalidPwordVar as keyof typeof TEST_DATA] as string

    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    this.attach(`Entered credentials -> Username: "${username}", Password: "${password}"`)
  },
)

When(
  'I enter invalid password {string} and a valid username {string}',
  async function (this: ICustomWorld, usernameVar: string, invalidPwordVar: string) {
    const loginPage = new LoginPage(this.page!)

    const username = TEST_DATA[usernameVar as keyof typeof TEST_DATA] as string
    const password = TEST_DATA[invalidPwordVar as keyof typeof TEST_DATA] as string

    await loginPage.usernameInput.type(username, { delay: 50 })
    await loginPage.enterPassword(password)
    // eslint-disable-next-line no-console
    console.log('\n     |     Username entered:', username)
    // eslint-disable-next-line no-console
    console.log('     |     Password entered:', password)
    this.attach(`Entered credentials -> Username: "${username}", Password: "${password}"`)
  },
)

When(
  'I enter credentials empty {string} and {string}',
  async function (this: ICustomWorld, emptyUnameVar: string, emptyPwordVar: string) {
    const loginPage = new LoginPage(this.page!)

    const username = TEST_DATA[emptyUnameVar as keyof typeof TEST_DATA] as string
    const password = TEST_DATA[emptyPwordVar as keyof typeof TEST_DATA] as string

    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    this.attach(`Entered credentials -> Username: "${username}", Password: "${password}"`)
  },
)

When(
  'I enter credentials with special characters {string} and {string}',
  async function (this: ICustomWorld, specialUnVar: string, validPassword: string) {
    const loginPage = new LoginPage(this.page!)

    const username = TEST_DATA[specialUnVar as keyof typeof TEST_DATA] as string
    const password = TEST_DATA[validPassword as keyof typeof TEST_DATA] as string

    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    this.attach(`Entered credentials -> Username: "${username}", Password: "${password}"`)
  },
)

When('I click the login button', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page!)
  await loginPage.clickLogin()
})

/* =========================
   ASSERTIONS
========================= */

Then(
  'I should be redirected to the Dashboard page with its URL',
  async function (this: ICustomWorld) {
    const loginPage = new LoginPage(this.page!)
    const onDashboard = await loginPage.isOnDashboard()
    expect(onDashboard).toBeTruthy()
  },
)

Then('I should see the header Dashboard', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page!)
  await expect(loginPage.dashboardHeader).toHaveText('Dashboard')
})

Then('I should see an error message Invalid Credentials', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page!)
  await expect(loginPage.flashMessage).toContainText('Invalid credentials')
})

Then('I should see an error Fields are Required', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page!)

  await expect(loginPage.fieldErrorMessage).toContainText('Required')
})

Then('I should remain on the login page', function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page!)
  const isLoginPage = loginPage.isOnLoginPage()
  expect(isLoginPage).toBeTruthy()
})
