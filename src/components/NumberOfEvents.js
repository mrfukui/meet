import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [numberEvents, setNumberEvents] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumberEvents(value);
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <p>Number of Events:</p>
      <input type="text" value={numberEvents} onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;
