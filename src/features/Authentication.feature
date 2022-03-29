Feature: Aunthentication of users

Scenario: As a user, I want to Open the Authentication Forms
    Given a user at menu screen in the app
    When the user clicks the Log In button
    Then an authentication modal must be visible to the user
