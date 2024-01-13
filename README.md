# meet

## Description:

This app allows users to access information on events happening in different cities. Users will be able to access this information offline because it is a serverless, progressive web application (PWA). This app was created with React and uses the Google Calendar API to fetch upcoming events.

## Live Website:

Check out the flive website [here!]()

## Technologies Used:

-HTML5
-CSS3
-JavaScript

## Acknowledgments:

-CareerFoundry for guidance in building this app.

## User Stories and Test Scenarios:

Filter events by city:
As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.
Scenario: When user hasn’t searched for a specific city, show upcoming events from all cities.
Given user hasn’t searched for any city;
When the user opens the app;
Then the user should see a list of upcoming events.
Scenario: User should see a list of suggestions when they search for a city.
Given the main page is open;
When user starts typing in the city textbox;
Then the user should receive a list of cities (suggestions) that match what they’ve typed.
Scenario: User can select a city from the suggested list.
Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
When the user selects a city (e.g., “Berlin, Germany”) from the list;
Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

2.  Show/hide event details:

As a user,
I should be able to show/hide event details
So that I can quickly view or hide additional information about an event based on my preferences.
Scenario: Event element is collapsed by default
Given the user is on the events page;
When the user opens the app;
Then each event element should be in a collapsed state by default.
Scenario: User can expand an event to see details
Given the user is on the events page with a collapsed event element;
When the user clicks on the event element to expand it;
Then the user should see detailed information about the expanded event.
Scenario: User can collapse an event to hide details
Given the user is on the events page with an expanded event element;
When the user clicks on the event element to collapse it;
Then the user should see the event details hidden.

3. Specify number of events:

As a user,
I should be able to specify the number of events displayed per page
So that I can customize the view and easily navigate through a manageable list of events.
Scenario: Default number of events displayed
Given the user is on the events page without specifying the number of events;
When the user opens the app;
Then the user should see a list containing 32 upcoming events by default.
Scenario: User can change the number of events displayed
Given the user is on the events page;
When the user specifies a different number of events to be displayed;
Then the user should see a list containing the specified number of upcoming events.

4. Use the app when offline:

As a user,
I should be able to use the app when offline
So that I can access event information and view my schedule even without an internet connection.
Scenario: Show cached data when there’s no internet connection.
Given the user has previously accessed the app and cached data is available;
When the user opens the app without an internet connection;
Then the user should see the cached data, displaying events from the last session.
Scenario: Show error when user changes search settings (city, number of events).
Given the user is on the events page with cached data;
When the user attempts to change search settings (city, number of events) without an internet connection;
Then the app should display an error message indicating that internet connection is required to modify search settings.

5. Add an app shortcut to the home screen:

As a user,
I should be able to add an app shortcut to the home screen
So that I can quickly launch the meet application and access event information with a single tap.
Scenario: User can install the meet app as a shortcut on their device home screen.
Given the user has the meet app installed on their device;
When the user selects the option to add a shortcut to the home screen;
Then the app should be added as a shortcut on the device's home screen for quick access.

6. Display charts visualizing event details:

As a user,
I should be able to view charts visualizing event details
So that I can gain insights and a graphical representation of key information about events, enhancing my understanding and decision-making.
Scenario: Show a chart with the number of upcoming events in each city.
Given the user is on the events page with data available;
When the user navigates to the charts section;
Then the app should display a chart visualizing the number of upcoming events in each city.
