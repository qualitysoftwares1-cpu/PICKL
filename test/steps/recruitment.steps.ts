import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { RecruitmentPage } from '../../pages/RecruitmentPage.js'
import { TEST_DATA } from '../../test_data/test_data.js'
import { ICustomWorld } from '../support/world.js'

/* =========================
   NAVIGATION
========================= */
Given('I am on the recruitment page', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const recruitmentPage = new RecruitmentPage(this.page)
  await recruitmentPage.goto()
})

When(
  'I navigate on the screen I should see the Recruitment on the side menu',
  async function (this: ICustomWorld) {
    if (!this.page) {
      throw new Error('Page is not initialized')
    }

    const recruitmentPage = new RecruitmentPage(this.page)
    const visible = await recruitmentPage.isRecruitmentHeaderVisible()
    expect(visible).toBeTruthy()
  },
)

When('I click the Recruitment label from the menu', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const recruitmentPage = new RecruitmentPage(this.page)
  await recruitmentPage.recruitmentMenu.click()
})

Then('I should be redirected to the Recruitment page with its URL', function (this: ICustomWorld) {
  const recruitmentPage = new RecruitmentPage(this.page!)
  const onRecruitmentPage = recruitmentPage.isOnRecruitmentPage()
  expect(onRecruitmentPage).toBeTruthy()
})

Then('I should see the new header Recruitment', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const recruitmentPage = new RecruitmentPage(this.page)
  await expect(recruitmentPage.recruitmentHeader).toBeVisible()
})

Then('I click the Candidates tab under Recruitment page', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const recruitmentPage = new RecruitmentPage(this.page)
  await expect(recruitmentPage.recruitmentCandidates).toBeVisible()
})

/* =========================
   CANDIDATE FORM ACTIONS
========================= */

Then('I should select the Job Title from Candidates Form', async function (this: ICustomWorld) {
  const recruitmentPage = new RecruitmentPage(this.page!)

  await recruitmentPage.clickCandidateJobTitle()
  const jobTitle = TEST_DATA.jobTitles[19]! // replace index with random if needed
  await recruitmentPage.selectCandidateJobTitle(jobTitle)
})

Then('I should select the Vacancy from Candidates Form', async function (this: ICustomWorld) {
  const recruitmentPage = new RecruitmentPage(this.page!)

  await recruitmentPage.clickCandidateVacancy()
  const vacancy = TEST_DATA.vacancies[2]! // replace index with random if needed
  await recruitmentPage.selectCandidateVacancy(vacancy)
})

Then(
  'I should select the Hiring Manager from Candidates Form',
  async function (this: ICustomWorld) {
    const recruitmentPage = new RecruitmentPage(this.page!)

    await recruitmentPage.clickCandidateHiringManager()
    const manager = TEST_DATA.hiringManagers[7]! // replace index with random if needed
    await recruitmentPage.selectCandidateHiringManager(manager)
  },
)

Then('I should select the Status from Candidates Form', async function (this: ICustomWorld) {
  const recruitmentPage = new RecruitmentPage(this.page!)

  await recruitmentPage.clickCandidateStatus()
  const status = TEST_DATA.candidateStatuses[0]! // replace index with random if needed
  await recruitmentPage.selectCandidateStatus(status)
})

Then('I should enter the Candidate Name from Candidates Form', async function (this: ICustomWorld) {
  const recruitmentPage = new RecruitmentPage(this.page!)

  const candidateName = TEST_DATA.candidateFirstNames[9]! // first name
  await recruitmentPage.enterCandidateName(candidateName)
  await recruitmentPage.selectCandidateName(candidateName)
})

Then('I should enter the Keywords from Candidates Form', async function (this: ICustomWorld) {
  const recruitmentPage = new RecruitmentPage(this.page!)
  const keywords = 'Software Engineer' // replace with dynamic value if needed
  await recruitmentPage.enterCandidateKeyword(keywords)
})

Then(
  'I should enter the Date of Application From from Candidates Form',
  async function (this: ICustomWorld) {
    const recruitmentPage = new RecruitmentPage(this.page!)
    await recruitmentPage.enterCandidateDateOfApplicationFrom()
    await recruitmentPage.selectCandidateDateOfApplicationFrom()
  },
)

Then(
  'I should enter the Date of Application To from Candidates Form',
  async function (this: ICustomWorld) {
    const recruitmentPage = new RecruitmentPage(this.page!)
    await recruitmentPage.enterCandidateDateOfApplicationTo()
    await recruitmentPage.selectCandidateDateOfApplicationTo()
  },
)

Then('I should select the Method from Candidates Form', async function (this: ICustomWorld) {
  const recruitmentPage = new RecruitmentPage(this.page!)

  await recruitmentPage.clickCandidateMethod()

  const method = TEST_DATA.methodOfApplication[0]! // replace with TEST_DATA if needed
  await recruitmentPage.selectCandidateMethod(method)
  // eslint-disable-next-line no-console
  console.log('\n     |    Selected Method:', method)
})

When('I click the Search button from Candidates Form', async function (this: ICustomWorld) {
  const recruitmentPage = new RecruitmentPage(this.page!)
  await recruitmentPage.clickSearchButton()
})

Then('I should see the search results based on the criteria entered', function () {
  // Placeholder: implement verification of results
  // eslint-disable-next-line no-console
  console.log('\n     |     Verify search results based on criteria - To be implemented')
})

When('I click the Reset button from Candidates Form', async function (this: ICustomWorld) {
  const recruitmentPage = new RecruitmentPage(this.page!)
  await recruitmentPage.clickResetButton()
})

Then('all fields in the Candidates Form should be cleared', async function (this: ICustomWorld) {
  const recruitmentPage = new RecruitmentPage(this.page!)

  const nameValue = await recruitmentPage.candidateNameInput.inputValue()
  const keywordValue = await recruitmentPage.candidateKeywordInput.inputValue()
  const dateFromValue = await recruitmentPage.candidateDateOfApplicationFrom.inputValue()
  const dateToValue = await recruitmentPage.candidateDateOfApplicationTo.inputValue()

  expect(nameValue).toBe('')
  expect(keywordValue).toBe('')
  expect(dateFromValue).toBe('')
  expect(dateToValue).toBe('')
})

Then(
  'I should see the list of all candidates after filters were applied',
  async function (this: ICustomWorld) {
    const recruitmentPage = new RecruitmentPage(this.page!)
    const recordCount = await recruitmentPage.getCandidateRecordCount()
    expect(recordCount).toBeGreaterThan(0)
  },
)

Then('I should see no candidate records', async function (this: ICustomWorld) {
  const recruitmentPage = new RecruitmentPage(this.page!)
  const count = await recruitmentPage.getCandidateRecordCount()
  expect(count).toBe(0)
})

Then(
  'I should evaluate if all the list is having the same vacancy as selected in the filter',
  async function (this: ICustomWorld) {
    const recruitmentPage = new RecruitmentPage(this.page!)
    const expectedVacancy = TEST_DATA.vacancies[2]! // replace index with the one used in selection
    const actualVacancyList = await recruitmentPage.getCandidateVacancyList()
    actualVacancyList.forEach(vacancy => {
      expect(vacancy).toBe(expectedVacancy)
    })
  },
)

Then(
  'I should evaluate if all the list is having the same hiring manager as selected in the filter',
  async function (this: ICustomWorld) {
    const recruitmentPage = new RecruitmentPage(this.page!)
    const expectedHiringManager = normalizeName(getFirstAndLastName(TEST_DATA.hiringManagers[7]))
    const actualHiringManagers = await recruitmentPage.getCandidateHiringManagerList()
    // eslint-disable-next-line no-console
    console.log('\n     |    Candidate Record List Text:', actualHiringManagers)
    expect(actualHiringManagers.length).toBeGreaterThan(0)

    actualHiringManagers.forEach(manager => {
      const normalizedManager = normalizeName(getFirstAndLastName(manager))

      expect(normalizedManager).toContain(expectedHiringManager)
    })
  },
)

Then(
  'I should evaluate if all the list is having the same Status as selected in the filter',
  async function (this: ICustomWorld) {
    const recruitmentPage = new RecruitmentPage(this.page!)
    const expectedStatus = TEST_DATA.candidateStatuses[0]! // replace index with random if needed
    const actualStatusList = await recruitmentPage.getCandidateStatusList()
    // eslint-disable-next-line no-console
    console.log('\n     |    Candidate Record List Text:', actualStatusList)
    actualStatusList.forEach(status => {
      expect(status).toBe(expectedStatus)
    })
    // Write code here that turns the phrase above into concrete actions
  },
)

Then(
  'I should evaluate if all the list is having the same Candidate Name as selected in the filter',
  async function (this: ICustomWorld) {
    const recruitmentPage = new RecruitmentPage(this.page!)
    const expectedCandidate = normalizeName(getFirstAndLastName(TEST_DATA.candidateNames[10])) // replace index with random

    const actualCandidateList = await recruitmentPage.getCandidateNameList()
    // eslint-disable-next-line no-console
    console.log('\n     |     Expected Candidate:', expectedCandidate)

    expect(actualCandidateList.length).toBeGreaterThan(0)
    actualCandidateList.forEach(candidate => {
      expect(candidate).toContain(expectedCandidate)
    })
  },
)

Then(
  'I should evaluate if all the list is having the same Keywords as selected in the filter',
  async function (this: ICustomWorld) {
    const recruitmentPage = new RecruitmentPage(this.page!)
    const expectedKeyword = 'Software Engineer' // replace with dynamic value if needed
    await recruitmentPage.enterCandidateKeyword(expectedKeyword)

    expect(expectedKeyword).toBeTruthy()
    const actualKeywordValue = await recruitmentPage.getCandidateKeywordList()
    actualKeywordValue.forEach(keyword => {
      expect(keyword).toContain(expectedKeyword)
    })
  },
)

Then(
  'I should evaluate if all the list is having the same Date of Application as selected in the filter',
  async function (this: ICustomWorld) {
    const recruitmentPage = new RecruitmentPage(this.page!)

    // Select the "From" date

    const dateFrom = await recruitmentPage.getCandidateDateOfApplicationFrom()
    // replace with dynamic value if needed

    const actualDateFromList = await recruitmentPage.getCandidateDateOfApplicationFromList()
    // eslint-disable-next-line no-console
    console.log('\n     |    Expected Date From List:', dateFrom)
    // eslint-disable-next-line no-console
    console.log('     |    Actual Date From List:', actualDateFromList)

    // Assert that every item matches the selected date
    actualDateFromList.forEach(date => {
      // normalize whitespace & format if needed
      const normalizedDate = date?.trim()
      expect(normalizedDate).toBe(dateFrom)
    })
  },
)

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, ' ').trim()
}

export function getFirstAndLastName(name?: string): string {
  if (!name) {
    return ''
  }

  const parts = name.trim().replace(/\s+/g, ' ').split(' ')

  if (parts.length === 1) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    parts[0]
  }

  return `${parts[0]} ${parts[parts.length - 1]}`
}
