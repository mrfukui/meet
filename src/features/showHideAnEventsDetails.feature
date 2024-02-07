Feature: Event Element Interaction
  Scenario: Event element is collapsed by default
    Given the user is on the events page
    When the user opens the app
    Then each event element should be in a collapsed state by default.

  Scenario: User can expand an event to see details
    Given the user is on the events page with a collapsed event element
    When the user clicks on the event element to expand it
    Then the user should see detailed information about the expanded event.

  Scenario: User can collapse an event to hide details
    Given the user is on the events page with an expanded event element
    When the user clicks on the event element to collapse it
    Then the user should see the event details hidden