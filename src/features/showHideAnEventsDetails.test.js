import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("Event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    given("the user is on the events page", () => {});

    when("the user opens the app", () => {
      AppComponent = render(<App />);
    });

    then(
      "each event element should be in a collapsed state by default.",
      () => {
        const EventDOM = AppComponent.container.firstChild;
        const eventDetails = EventDOM.querySelector(".details");
        expect(eventDetails).not.toBeInTheDocument();
      }
    );
  });

  test("User can expand an event to see details", ({ given, when, then }) => {
    let AppComponent;
    given(
      "the user is on the events page with a collapsed event element",
      async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });
      }
    );

    when("the user clicks on the event element to expand it", async () => {
      const user = userEvent.setup();
      const button = AppComponent.queryAllByText("Show Details")[0];

      await user.click(button);
    });

    then(
      "the user should see detailed information about the expanded event.",
      () => {
        const EventDOM = AppComponent.container.firstChild;
        const eventDetails = EventDOM.querySelector(".details");
        expect(eventDetails).toBeInTheDocument();
      }
    );
  });

  test("User can collapse an event to hide details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given(
      "the user is on the events page with an expanded event element",
      async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const user = userEvent.setup();

        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });
        const button = AppComponent.queryAllByText("Show Details")[0];
        await user.click(button);

        const EventDOM = AppComponent.container.firstChild;
        const eventDetails = EventDOM.querySelector(".details");
        expect(eventDetails).toBeInTheDocument();
      }
    );

    when("the user clicks on the event element to collapse it", async () => {
      const button = AppComponent.queryAllByText("Hide Details")[0];
      const user = userEvent.setup();
      await user.click(button);
    });

    then("the user should see the event details hidden", () => {
      const EventDOM = AppComponent.container.firstChild;
      const eventDetails = EventDOM.querySelector(".details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
