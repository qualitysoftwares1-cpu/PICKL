@smoke
Feature: Recruitment Functionality
  As a user
  I want to access the recruitment section of the application
  So that I can manage candidates

  Background:
    Given I am on the login page

@login @positive
  Scenario: Successful login with valid credentials
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard

  @login @negative
  Scenario: Failed login with invalid username
    When I enter invalid username "invalidUsername" and a valid password "validPassword"
    And I click the login button
    Then I should see an error message Invalid Credentials
    And I should remain on the login page

  @login @negative
  Scenario: Failed login with invalid password
    When I enter invalid password "invalidPassword" and a valid username "validUsername"
    And I click the login button
    Then I should see an error message Invalid Credentials
    And I should remain on the login page

  @login @negative
  Scenario: Failed login with empty credentials
    When I enter credentials empty "emptyUsername" and "emptyPassword"
    And I click the login button
    Then I should see an error Fields are Required
    And I should remain on the login page

  @login @negative
  Scenario: Login with special characters in username
    When I enter credentials with special characters "specialCharUsername" and "validPassword"
    And I click the login button
    Then I should see an error message Invalid Credentials

  @fail @skip
  Scenario: Intentional failing test for demonstration
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should remain on the login page

  @search @candidateAllFields
  Scenario: Successful login with valid credentials and I need to navigate on the screen and search for candidates in Candidates Form
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    Then I should select the Job Title from Candidates Form
    Then I should select the Vacancy from Candidates Form
    Then I should select the Hiring Manager from Candidates Form
    Then I should select the Status from Candidates Form
    Then I should enter the Candidate Name from Candidates Form
    Then I should enter the Keywords from Candidates Form
    Then I should enter the Date of Application From from Candidates Form
    Then I should enter the Date of Application To from Candidates Form
    Then I should select the Method from Candidates Form
    When I click the Search button from Candidates Form
    Then I should see the search results based on the criteria entered
    Then I should see no candidate records

    @search @candidateClearForm
  Scenario: Successful login with valid credentials and I need to navigate on the screen and clear the search for candidates in Candidates Form
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    Then I should select the Job Title from Candidates Form
    Then I should select the Vacancy from Candidates Form
    Then I should select the Hiring Manager from Candidates Form
    Then I should select the Status from Candidates Form
    Then I should enter the Candidate Name from Candidates Form
    Then I should enter the Keywords from Candidates Form
    Then I should enter the Date of Application From from Candidates Form
    Then I should enter the Date of Application To from Candidates Form
    Then I should select the Method from Candidates Form
    When I click the Reset button from Candidates Form
    Then all fields in the Candidates Form should be cleared

   @search @candidateDirect
  Scenario: Successful login with valid credentials and I need to navigate on the screen and search for all candidates in Candidates Form without applying any filters
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    When I click the Search button from Candidates Form
    Then I should see the search results based on the criteria entered
    Then I should see the list of all candidates after filters were applied

   @search @candidateUsingJobTitle
  Scenario: Successful login with valid credentials and I need to navigate on the screen and search for all candidates in Candidates Form using Job Title filter only.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    Then I should select the Job Title from Candidates Form
    When I click the Search button from Candidates Form
    Then I should see the search results based on the criteria entered
    Then I should see the list of all candidates after filters were applied

    @search @candidateUsingVacancy
  Scenario: Successful login with valid credentials and I need to navigate on the screen and search for all candidates in Candidates Form using Vacancy filter only.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    Then I should select the Vacancy from Candidates Form
    When I click the Search button from Candidates Form
    Then I should see the search results based on the criteria entered
    Then I should see the list of all candidates after filters were applied
    Then I should evaluate if all the list is having the same vacancy as selected in the filter

  @search @candidateUsingHiringManager
  Scenario: Successful login with valid credentials and I need to navigate on the screen and search for all candidates in Candidates Form using Hiring Manager filter only.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    Then I should select the Hiring Manager from Candidates Form
    When I click the Search button from Candidates Form
    Then I should see the search results based on the criteria entered
    Then I should see the list of all candidates after filters were applied
    Then I should evaluate if all the list is having the same hiring manager as selected in the filter

  @search @candidateUsingStatus
  Scenario: Successful login with valid credentials and I need to navigate on the screen and search for all candidates in Candidates Form using Status filter only.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    Then I should select the Status from Candidates Form
    When I click the Search button from Candidates Form
    Then I should see the search results based on the criteria entered
    Then I should see the list of all candidates after filters were applied
    Then I should evaluate if all the list is having the same Status as selected in the filter

  @search @candidateUsingCandidateName
  Scenario: Successful login with valid credentials and I need to navigate on the screen and search for all candidates in Candidates Form using Candidate Name filter only.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    Then I should enter the Candidate Name from Candidates Form
    When I click the Search button from Candidates Form
    Then I should see the search results based on the criteria entered
    Then I should see the list of all candidates after filters were applied
    Then I should evaluate if all the list is having the same Candidate Name as selected in the filter

@skipKeywordsCheck
  Scenario: Successful login with valid credentials and I need to navigate on the screen and search for all candidates in Candidates Form using Keywords filter only.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    Then I should enter the Candidate Name from Candidates Form
    When I click the Search button from Candidates Form
    Then I should see the search results based on the criteria entered
    Then I should see the list of all candidates after filters were applied
    Then I should evaluate if all the list is having the same Keywords as selected in the filter

  @search @candidatehUsingFromDateOfApplication
  Scenario: Successful login with valid credentials and I need to navigate on the screen and search for all candidates in Candidates Form using "From" Date of Application filter only.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    Then I should enter the Date of Application From from Candidates Form
    When I click the Search button from Candidates Form
    Then I should see the search results based on the criteria entered
    Then I should see the list of all candidates after filters were applied
    Then I should evaluate if all the list is having the same Date of Application as selected in the filter

  @search @candidateUsingToDateOfApplication
  Scenario: Successful login with valid credentials and I need to navigate on the screen and search for all candidates in Candidates Form "To" Date of Application filter only.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    Then I should enter the Date of Application To from Candidates Form
    When I click the Search button from Candidates Form
    Then I should see the search results based on the criteria entered
    Then I should see the list of all candidates after filters were applied

  @search @candidateUsingMethod
  Scenario: Successful login with valid credentials and I need to navigate on the screen and search for all candidates in Candidates Form using Method of Application filter only.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I click the Candidates tab under Recruitment page
    Then I should select the Method from Candidates Form
    When I click the Search button from Candidates Form
    Then I should see the search results based on the criteria entered
    Then I should see the list of all candidates after filters were applied


 @addRecord @candidateAddRecordButtonSave
  Scenario: Successful login with valid credentials and I need to navigate on the screen and click on the Add button found in recruitment page then be able to successfully save and add the record of candidate.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I should click the Add button to add new record
    Then I should enter First Name, Middle Name and Last Name of the Candidate
    And I should select Vacancy from drop-down
    And I should enter contact number
    And I should enter email address
    And I should select file to upload
    And I should enter keywords in the field
    And I should Add any notes
    And I should tick the Consent to keep data
    And I should click the Save Button

@addRecord @candidateAddRecordButtonCancel
  Scenario: Successful login with valid credentials and I need to navigate on the screen and click on the Add button found in recruitment page Populate the field then click Cancel button to discontinue adding records.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I should click the Add button to add new record
    Then I should enter First Name, Middle Name and Last Name of the Candidate
    And I should select Vacancy from drop-down
    And I should enter contact number
    And I should enter email address
    And I should select file to upload
    And I should enter keywords in the field
    And I should Add any notes
    And I should tick the Consent to keep data
    And I should click the Cancel Button

@addRecord @candidateAddRecordMissingName
  Scenario: Successful login with valid credentials and I need to navigate on the screen and click on the Add button found in recruitment page then I should not be able to successfully save and add the record of candidate since Name fields are not populated.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I should click the Add button to add new record
    And I should select Vacancy from drop-down
    And I should enter contact number
    And I should enter email address
    And I should select file to upload
    And I should enter keywords in the field
    And I should Add any notes
    And I should tick the Consent to keep data
    And I should click the Save Button
    And I should see a validation error saying that field is Required to be populated

@addRecord @candidateAddRecordMissingEmail
  Scenario: Successful login with valid credentials and I need to navigate on the screen and click on the Add button found in recruitment page then I should not be able to successfully save and add the record of candidate since email address field is not populated.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I should click the Add button to add new record
    Then I should enter First Name, Middle Name and Last Name of the Candidate
    And I should select Vacancy from drop-down
    And I should enter contact number
    And I should select file to upload
    And I should enter keywords in the field
    And I should Add any notes
    And I should tick the Consent to keep data
    And I should click the Save Button
    And I should see a validation error saying that field is Required to be populated

    @addRecord @candidateAddRecordEmailAndNameMissing
  Scenario: Successful login with valid credentials and I need to navigate on the screen and click on the Add button found in recruitment page then I should not be able to successfully save and add the record of candidate since email address and name fields are not populated.
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard
    And I click the Recruitment label from the menu
    Then I should be redirected to the Recruitment page with its URL
    And I should see the new header Recruitment
    And I should click the Add button to add new record
    And I should select Vacancy from drop-down
    And I should enter contact number
    And I should select file to upload
    And I should enter keywords in the field
    And I should Add any notes
    And I should tick the Consent to keep data
    And I should click the Save Button
    And I should see a validation error saying that field is Required to be populated
