Feature: Sign Up of Users

Scenario: As a user, I want to Sign Up into the nya
    When the user clicks the Sign Up tab
    And the user fills the required fields
    And clicks the Sign Up button
    And the user dismiss the newsletter request
    Then user must be logged in with its name placed in the menu