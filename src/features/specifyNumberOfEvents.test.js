import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("Default number of events displayed", ({ given, when, then }) => {
    let AppComponent;
    given(
      "the user is on the events page without specifying the number of events",
      () => {}
    );

    when("the user opens the app", () => {
      AppComponent = render(<App />);
    });

    then(
      "the user should see a list containing 32 upcoming events by default.",
      async () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector("#event-list");

        await waitFor(() => {
          const EventListItems =
            within(EventListDOM).queryAllByRole("listitem");
          expect(EventListItems.length).toBe(32);
        });
      }
    );
  });
  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let NumberOfEventsComponent;
    beforeEach(() => {
      NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={[]} />);
    });
    given("the user is on the events page", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    when(
      "the user specifies a different number of events to be displayed",
      async () => {
        const user = userEvent.setup();
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
        const numberOfEventsTextBox =
          within(NumberOfEventsDOM).queryByRole("textbox");
        await user.type(numberOfEventsTextBox, "{backspace}{backspace}10");
      }
    );

    then(
      "the user should see a list containing the specified number of upcoming events.",
      () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector("#event-list");
        const eventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(eventListItems.length).toEqual(10);
      }
    );
  });
});
