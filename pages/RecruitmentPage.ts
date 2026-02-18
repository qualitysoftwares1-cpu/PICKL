/* eslint-disable no-console */
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
  readonly candidateDateofApplicationFromToday: Locator
  readonly candidateAddRecordButton: Locator
  readonly addFirstNameInput: Locator
  readonly addMiddleNameInput: Locator
  readonly addLastNameInput: Locator
  readonly addVacancyDropdown: Locator
  readonly addVacancyOption: (optionText: string) => Locator
  readonly addEmailInput: Locator
  readonly addContactNumberInput: Locator
  readonly addResumeUploadInput: Locator
  readonly addKeywordsInput: Locator
  // readonly addDateOfApplicationInput: Locator
  readonly addNotesTextarea: Locator
  readonly addConsentCheckbox: Locator
  readonly addSaveButton: Locator
  readonly addCancelButton: Locator
  readonly resumeUploadInput: Locator
  readonly fieldIsRequired: Locator
  readonly field2IsRequired: Locator
  readonly emailIsRequired: Locator
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
    this.candidateDateofApplicationFromToday = page.locator('div:nth-of-type(4) div.--today')
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
    this.candidateAddRecordButton = page.locator('div.orangehrm-header-container > button')

    this.addFirstNameInput = page.locator('input[placeholder="First Name"]')
    this.addMiddleNameInput = page.locator('input[placeholder="Middle Name"]')
    this.addLastNameInput = page.locator('input[placeholder="Last Name"]')

    this.addVacancyDropdown = page.locator('form > div:nth-of-type(2) i')
    this.addVacancyOption = (optionText: string) =>
      page.locator(`div[role="listbox"] >> text="${optionText}"`)

    this.addEmailInput = page.locator('div:nth-of-type(3) > div > div:nth-of-type(1) input') // Email input is first "Type here"
    this.addContactNumberInput = page.locator('div:nth-of-type(3) > div > div:nth-of-type(2) input')

    this.addResumeUploadInput = page.locator('input[type="file"]')

    this.addKeywordsInput = page.locator(
      'div:nth-of-type(5) div.orangehrm-save-candidate-page-full-width input',
    )
    // this.addDateOfApplicationInput = page.locator('input[type="date"]')

    this.addNotesTextarea = page.locator('textarea[placeholder="Type here"]')
    this.addConsentCheckbox = page.locator('div:nth-of-type(7) i')

    this.addSaveButton = page.locator('button:has-text("Save")')
    this.addCancelButton = page.locator('button:has-text("Cancel")')
    this.resumeUploadInput = page.locator('input[type="file"]')
    this.fieldIsRequired = page.locator('div:nth-of-type(3) > span')
    this.field2IsRequired = page.locator('form > div:nth-of-type(1) div:nth-of-type(1) > span')
    this.emailIsRequired = page.locator('div:nth-of-type(3) > div > div:nth-of-type(1) input')
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
    await this.candidateDateofApplicationFromToday.click()
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

  async onClickCAddandidateButton() {
    await this.candidateAddRecordButton.click()
  }

  async inputFirstName(firstName: string) {
    await this.addFirstNameInput.fill(firstName)
  }

  async inputMiddleName(middleName: string) {
    await this.addMiddleNameInput.fill(middleName)
  }

  async inputLastName(lastName: string) {
    await this.addLastNameInput.fill(lastName)
    await this.page.waitForTimeout(1000)
  }

  async selectVacancy() {
    await this.addVacancyDropdown.click()
  }

  async fillEmail(email: string) {
    await this.addEmailInput.fill(email)
    console.log('\n     |    Email Address:', email)
  }

  async fillContactNumber(contactNumber: string) {
    await this.addContactNumberInput.fill(contactNumber)
    console.log('\n     |    Contact Number:', contactNumber)
  }

  async fillKeywords(keywords: string) {
    await this.addKeywordsInput.fill(keywords)
    console.log('\n     |    Keywords:', keywords)
  }

  /*async fillDateOfApplication(date: string) {
    await this.addDateOfApplicationInput.fill(date)
    console.log('\n     |    Date of Application:', date)
  }*/

  async fillNotes(notes: string) {
    await this.addNotesTextarea.fill(notes)
    console.log('\n     |    Notes:', notes)
  }

  async toggleConsent(checked: boolean) {
    const isChecked = await this.addConsentCheckbox.isChecked()
    if (isChecked !== checked) {
      await this.addConsentCheckbox.click()
    }
  }

  async clickSave() {
    await this.addSaveButton.click()
  }

  async clickCancel() {
    await this.addCancelButton.click()
  }

  async uploadResume(filePath: string) {
    await this.resumeUploadInput.setInputFiles(filePath)
  }

  async fieldIsRequiredMessage() {
    const fields = [this.fieldIsRequired, this.field2IsRequired, this.emailIsRequired]

    for (const field of fields) {
      const isVisible = await field.isVisible()
      if (isVisible) {
        const text = await field.innerText()
        if (text.trim() === 'Required') {
          return // success: at least one field shows 'Required'
        }
      }
    }
  }
}
