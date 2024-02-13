import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [numberEvents, setNumberEvents] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumberEvents(value);

    let errorInfo;
    if (isNaN(value) || value <= 0) {
      errorInfo = "Only positive numbers are allowed";
    } else {
      errorInfo = "";
      setCurrentNOE(value);
    }
    setErrorAlert(errorInfo);
  };

  return (
    <div id="number-of-events">
      <p>Number of Events:</p>
      <input type="text" value={numberEvents} onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;
