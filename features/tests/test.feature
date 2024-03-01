@test
Feature: Login Test
  It is a test feature to validate webdriverIO framework
  works as with Angular project

  @smoke
  Scenario: Check elements on login page
    Given User navigates to login page 
    When User enters "standard_user" into "loginPage" "username"
    And User enters "secret_sauce" into "loginPage" "password"
    And User clicks "loginPage" "loginButton"