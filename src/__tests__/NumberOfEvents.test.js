import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> Component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={[]} />);
  });
  test("Contains a textbox", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
  });
  test("Textbox contains 32 as the default value", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toHaveValue("32");
  });
  test("textbox input updates value of the number events as user changes input", async () => {
    const user = userEvent.setup();
    NumberOfEventsComponent.rerender(
      <NumberOfEvents setCurrentNOE={() => {}} />
    );
    const numberOfEventsTextBox =
      NumberOfEventsComponent.queryByRole("textbox");
    await user.type(numberOfEventsTextBox, "{backspace}{backspace}10");
    expect(numberOfEventsTextBox).toHaveValue("10");
  });
});
