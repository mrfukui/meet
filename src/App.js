// src/App.js

import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";
import CityEventsChart from "./components/CityEventsChart";
import EventGenresChart from "./components/EventGenresChart";
import eventLogo from "./img/—Pngtree—schedule glyph icon vector_5058309.png";

import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    if (navigator.onLine) {
      // set the warning alert message to an empty string ""
      setWarningAlert("");
    } else {
      // set the warning alert message to a non-empty string
      setWarningAlert(
        "Warning! You are currently offline and your events might not be up to date."
      );
    }
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <div className="title-div">
        <h1 className="app-title">meet</h1>
        <img className="event-logo" src={eventLogo} alt="" />
      </div>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
      <div className="charts-container">
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </div>
  );
};

export default App;
