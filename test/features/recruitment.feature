@smoke
Feature: Recruitment Functionality
  As a user
  I want to access the recruitment section of the application
  So that I can manage candidates

  Background:
    Given I am on the login page

  @searchCandidateAllFields
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

  @clearCandidateSearchForm
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

 @searchDirect
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

 @searchUsingJobTitle
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

    @searchUsingVacancy
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

    @searchUsingHiringManager
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

@searchUsingStatus
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

@searchUsingCandidateName
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

    @searchUsingFromDateOfApplication
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

 @searchUsingToDateOfApplication
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

    @searchUsingMethod
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
