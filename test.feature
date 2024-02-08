@test
Feature: Experimental test
  It is a test feature to validate webdriverIO framework
  works as with Angular project

  @smoke @123456
  Scenario: Check elements on login page
    Given User navigates to CWC site
    When User enters "admin" and "password" as credentials
    Then Text value of "loginPage" "loginButton" is "Login"
 
 