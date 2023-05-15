import { Fragment, useState } from "react";
import Head from "next/head";
import Loader from "@/components/loader/loader";
import Weather from "@/components/weather/weather";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";

import classes from "./index.module.css";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const weatherAPI = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI}&units=metric`;

  const fetchWeatherData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await axios
      .get(weatherURL)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Fragment>
        <Head>
          <title>HelioStorm</title>
          <meta name="description" content="Your weather app for everyday" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={classes.main}>
          <div className={classes.weather}>
            <div className={classes.input}>
              <h2>GET THE WEATHER</h2>
              <div>
                <input
                  type="text"
                  value={city}
                  placeholder="SEARCH CITY"
                  onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={fetchWeatherData}>
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
            {/* Weather content */}
            {weather && <Weather data={weather} />}
          </div>
        </div>
      </Fragment>
    );
  }
}
