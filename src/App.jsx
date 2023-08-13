import React, { useState, useEffect } from "react";
import { getWeatherData } from "./services";
import "./App.css";
import Locationsearch from "./components/Locationsearch";
import dateBuilder from "./components/common";

function App() {
  const [searchLocation, setSearchLocation] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [isLatLong, setLatLong] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const query = encodeURI(`${latitude} ${longitude}`);
      setSearchLocation(query);
    });
  }, []);

  useEffect(() => {
    if (isLatLong) {
      handleClick();
    }
  }, [searchLocation, isLatLong]);

  const handleClick = async () => {
    if (!searchLocation.trim()) {
      return;
    }
    const data = await getWeatherData(searchLocation);
    setSearchLocation(" ");
    setWeatherData(data);
    console.log(data);
    setLatLong(false);
  };

  return (
    <>
      <Locationsearch
        setSearchLocation={setSearchLocation}
        handleClick={handleClick}
        value={searchLocation}
      />
      {weatherData ? (
        <div>
          <span>{weatherData.current.temp_c}&deg;C</span>{" "}
          <span>{weatherData.location.name}</span>
        </div>
      ) : null}
      <div>{dateBuilder(new Date())}</div>
    </>
  );
}

export default App;
