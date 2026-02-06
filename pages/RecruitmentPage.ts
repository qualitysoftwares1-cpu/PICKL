/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Locator, Page } from '@playwright/test'

export class RecruitmentPage {
  getHiringManager() {
    throw new Error('Method not implemented.')
  }
  readonly page: Page
  readonly recruitmentMenu: Locator
  readonly recruitmentHeader: Locator
  readonly recruitmentCandidates: Locator
  readonly candidateJobTitleClick: Locator
  readonly candidateVacancy: Locator
  readonly candidateHiringManager: Locator
  readonly candidateStatus: Locator
  readonly candidateNameInput: Locator
  readonly candidateKeywordInput: Locator
  readonly candidateDateOfApplicationFrom: Locator
  readonly candidateDateOfApplicationTo: Locator
  readonly candidateMethodDropdown: Locator
  readonly candidateSearchButton: Locator
  readonly candidateResetButton: Locator
  readonly candidateSelectFromCalendar: Locator
  readonly candidateSelectToCalendar: Locator
  readonly candidateCalendarArrowNextFrom: Locator
  readonly candidateCalendarArrowBackFrom: Locator
  readonly candidateRecordListCount: Locator
  readonly candidateVacancyList: Locator
  readonly candidateHiringManagerList: Locator
  readonly candidateStatusList: Locator
  readonly candidateNameList: Locator
  readonly candidateKeywordList: Locator
  readonly candidateDateOfApplicationFromList: Locator
  readonly candidateDateOfApplicationToList: Locator
  readonly candidateDateofApplicationTextBox: Locator

  // eslint-disable-next-line max-lines-per-function
  constructor(page: Page) {
    this.page = page
    this.recruitmentMenu = page.getByText('Recruitment')
    this.recruitmentHeader = page.getByRole('heading', { name: 'Recruitment' })
    this.recruitmentCandidates = page.getByRole('link', { name: 'Candidates' })
    this.candidateJobTitleClick = page.locator(
      'form > div:nth-of-type(1) > div > div:nth-of-type(1) i',
    )
    this.candidateVacancy = page.locator('form > div:nth-of-type(1) > div > div:nth-of-type(2) i')
    this.candidateHiringManager = page.locator(
      'form > div:nth-of-type(1) div:nth-of-type(3) div.oxd-select-text-input',
    )
    this.candidateStatus = page.locator('form > div:nth-of-type(1) div:nth-of-type(4) i')
    this.candidateNameInput = page.locator(
      'form > div:nth-of-type(2) > div > div:nth-of-type(1) input',
    )
    this.candidateKeywordInput = page.locator(
      'div.oxd-table-filter div:nth-of-type(2) > div > div:nth-of-type(2) input',
    )
    this.candidateDateOfApplicationFrom = page.locator(
      'div.oxd-table-filter div:nth-of-type(3) input',
    )
    this.candidateDateOfApplicationTo = page.locator(
      'div.oxd-table-filter div:nth-of-type(4) input',
    )
    this.candidateMethodDropdown = page.locator('form > div:nth-of-type(3) i')
    this.candidateSearchButton = page.getByRole('button', { name: 'Search' })
    this.candidateResetButton = page.getByRole('button', { name: 'Reset' })
    this.candidateSelectFromCalendar = page.locator('div.oxd-table-filter div:nth-of-type(6) > div')
    this.candidateSelectToCalendar = page.locator('div.oxd-table-filter div:nth-of-type(31) > div')
    this.candidateCalendarArrowNextFrom = page.locator(
      'div.oxd-table-filter button:nth-of-type(2) > i',
    )
    this.candidateCalendarArrowBackFrom = page.locator(
      'div.oxd-table-filter-area button:nth-of-type(1) > i',
    )
    this.candidateRecordListCount = page.locator(
      'div.orangehrm-paper-container > div:nth-of-type(2) span',
    )
    this.candidateVacancyList = page.locator(
      'div.oxd-table-body > div:nth-of-type(1) div:nth-of-type(2) > div',
    )
    this.candidateHiringManagerList = page.locator(
      'div.oxd-table-body > div:nth-of-type(1) div:nth-of-type(4) > div',
    )
    this.candidateStatusList = page.locator(
      'div.oxd-table-body > div:nth-of-type(1) div:nth-of-type(6) > div',
    )
    this.candidateNameList = page.locator(
      'div.oxd-table-body > div:nth-of-type(1) div:nth-of-type(3) > div',
    )
    this.candidateKeywordList = page.locator(
      'div.oxd-table-filter div:nth-of-type(2) > div > div:nth-of-type(2) input',
    )
    this.candidateDateOfApplicationFromList = page.locator(
      'div.oxd-table-body > div:nth-of-type(1) div:nth-of-type(5) > div',
    )
    this.candidateDateOfApplicationToList = page.locator(
      'div.oxd-table-body > div:nth-of-type(1) div:nth-of-type(8) > div',
    )
    this.candidateDateofApplicationTextBox = page.locator(
      'div.oxd-table-filter div:nth-of-type(3) input',
    )
  }

  // Navigate directly
  async goto() {
    await this.page.goto('/recruitment/viewCandidates')
    await this.recruitmentHeader.waitFor({ state: 'visible' })
  }

  // Navigate from menu
  async navigateFromMenu() {
    await this.recruitmentMenu.click()
    await Promise.all([
      this.page.waitForURL('**/recruitment/viewCandidates'),
      this.recruitmentCandidates.click(),
    ])
  }

  // Page state checks
  isOnRecruitmentPage(): boolean {
    return this.page.url().includes('/recruitment/viewCandidates')
  }

  async isRecruitmentHeaderVisible(): Promise<boolean> {
    return this.recruitmentHeader.isVisible()
  }

  // Candidate dropdown clicks
  async clickCandidateJobTitle() {
    await this.candidateJobTitleClick.click()
  }
  async selectCandidateJobTitle(title: string) {
    await this.selectOptionByName(title)
  }

  async clickCandidateVacancy() {
    await this.candidateVacancy.click()
  }
  async selectCandidateVacancy(vacancy: string) {
    await this.selectOptionByName(vacancy)
  }

  async clickCandidateHiringManager() {
    await this.candidateHiringManager.click()
  }
  async selectCandidateHiringManager(hiringManager: string) {
    await this.selectOptionByName(hiringManager)
  }

  async clickCandidateStatus() {
    await this.candidateStatus.click()
  }
  async selectCandidateStatus(status: string) {
    await this.selectOptionByName(status)
  }

  async clickCandidateMethod() {
    await this.candidateMethodDropdown.click()
  }
  async selectCandidateMethod(method: string) {
    await this.selectOptionByName(method)
  }

  // Candidate name
  async enterCandidateName(name: string) {
    await this.candidateNameInput.fill(name)
    await this.page.waitForTimeout(1000)
  }

  async selectCandidateName(name: string) {
    await this.page.getByRole('option', { name }).click()
    await this.page.waitForTimeout(1000)
    await this.page.keyboard.press('ArrowDown')
    await this.page.waitForTimeout(1000)
    await this.page.keyboard.press('Enter')
    await this.page.waitForTimeout(1000)
  }

  async enterCandidateKeyword(keyword: string) {
    await this.candidateKeywordInput.fill(keyword)
    await this.page.waitForTimeout(1000)
  }

  // Date of Application
  async enterCandidateDateOfApplicationFrom() {
    await this.candidateDateOfApplicationFrom.click()
  }
  async selectCandidateDateOfApplicationFrom() {
    await this.candidateCalendarArrowBackFrom.click()
    await this.candidateCalendarArrowNextFrom.click()
    await this.candidateSelectFromCalendar.click()
  }

  async enterCandidateDateOfApplicationTo() {
    await this.candidateDateOfApplicationTo.click()
    await this.page.waitForTimeout(6000)
  }
  async selectCandidateDateOfApplicationTo() {
    //await this.candidateSelectToCalendar.scrollIntoViewIfNeeded()
    //await this.candidateSelectToCalendar.waitFor({ state: 'visible' })
    await this.candidateCalendarArrowNextFrom.click()
    await this.candidateSelectToCalendar.click()
  }

  // Buttons
  async clickSearchButton() {
    await this.candidateSearchButton.click()
  }
  async clickResetButton() {
    await this.candidateResetButton.click()
  }

  // Utility method for dropdown selection
  async selectOptionByName(name: string) {
    const option = this.page.getByRole('option', { name })
    await option.click()
    await this.page.waitForTimeout(500)
  }

  async getCandidateRecordCount(): Promise<number> {
    const text = await this.candidateRecordListCount.textContent()
    // eslint-disable-next-line no-console
    console.log('\n     |    Candidate Record List Text:', text)
    if (!text) {
      return 0
    }

    if (text.includes('No Records Found')) {
      return 0
    }

    const match = /\d+/.exec(text)
    return match ? Number(match[0]) : 0
  }

  async getCandidateVacancyList(): Promise<string[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.candidateVacancyList.evaluateAll(elements =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      elements.map(el => el.textContent?.trim() ?? '').filter(Boolean),
    )
  }

  async getCandidateHiringManagerList(): Promise<string[]> {
    type HTMLElement = /*unresolved*/ any
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.candidateHiringManagerList.evaluateAll((elements: HTMLElement[]) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      elements
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        .map(el => el.textContent?.toLowerCase().replace(/\s+/g, ' ').trim() ?? '')
        .filter(Boolean),
    )
  }

  async getCandidateStatusList(): Promise<string[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.candidateStatusList.evaluateAll(elements =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      elements.map(el => el.textContent?.trim() ?? '').filter(Boolean),
    )
  }

  async getCandidateNameList(): Promise<string[]> {
    type HTMLElement = /*unresolved*/ any
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.candidateNameList.evaluateAll((elements: HTMLElement[]) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      elements
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        .map(el => el.textContent?.toLowerCase().replace(/\s+/g, ' ').trim() ?? '')
        .filter(Boolean),
    )
  }

  async getCandidateKeywordList(): Promise<string[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.candidateKeywordList.evaluateAll(elements =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      elements.map(el => el.textContent?.trim() ?? '').filter(Boolean),
    )
  }

  async getCandidateDateOfApplicationFromList(): Promise<string[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.candidateDateOfApplicationFromList.evaluateAll(elements =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      elements.map(el => el.textContent?.trim() ?? '').filter(Boolean),
    )
  }
  async getCandidateDateOfApplicationFrom(): Promise<string> {
    return this.candidateDateofApplicationTextBox.inputValue() // Playwright inputValue()
  }
  async getCandidateDateOfApplicationToList(): Promise<string[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.candidateDateOfApplicationToList.evaluateAll(elements =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      elements.map(el => el.textContent?.trim() ?? '').filter(Boolean),
    )
  }
}
