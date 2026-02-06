@smoke
Feature: Login Functionality
  As a user
  I want to login to the application
  So that I can access secure pages

  Background:
    Given I am on the login page

  @positive
  Scenario: Successful login with valid credentials
    When I enter valid credentials "validUsername" and "validPassword"
    And I click the login button
    Then I should be redirected to the Dashboard page with its URL
    And I should see the header Dashboard

  @negative
  Scenario: Failed login with invalid username
    When I enter invalid username "invalidUsername" and a valid password "validPassword"
    And I click the login button
    Then I should see an error message Invalid Credentials
    And I should remain on the login page

  @negative
  Scenario: Failed login with invalid password
    When I enter invalid password "invalidPassword" and a valid username "validUsername"
    And I click the login button
    Then I should see an error message Invalid Credentials
    And I should remain on the login page

  @negative
  Scenario: Failed login with empty credentials
    When I enter credentials empty "emptyUsername" and "emptyPassword"
    And I click the login button
    Then I should see an error Fields are Required
    And I should remain on the login page

  @negative
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
