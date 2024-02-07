Feature: Specify number of events
  Scenario: Default number of events displayed
    Given the user is on the events page without specifying the number of events
    When the user opens the app
    Then the user should see a list containing 32 upcoming events by default.

  Scenario: User can change the number of events displayed
    Given the user is on the events page
    When the user specifies a different number of events to be displayed
    Then the user should see a list containing the specified number of upcoming events.
