import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });
  test("renders event title", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });
  test("renders event start time", () => {
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });
  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });
  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });
  test("by default, events details section should be hidden", () => {
    const eventDetails = EventComponent.queryByRole(".details");
    expect(eventDetails).not.toBeInTheDocument();
  });
  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    const detailsButton = EventComponent.queryByRole("button");
    await user.click(detailsButton);
    expect(
      EventComponent.container.querySelector(".details")
    ).toBeInTheDocument();
  });
  test("hide details section when the user clicks the 'hide details' button", async () => {
    const user = userEvent.setup();
    const hideButton = EventComponent.queryByText("Hide Details");
    const showButton = EventComponent.queryByText("Show Details");
    await user.click(hideButton);
    expect(showButton).toBeInTheDocument();
    expect(hideButton).not.toBeInTheDocument();
  });
});
