@Pending
Scenario: As an User, I want to Login into my NYA account
    Given a user at the Authentication modal
    When the user fills the required fields
    Then the user must be redirected to the initial page