import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Searchbox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const GEO_API = "https://geocoding-api.open-meteo.com/v1/search";

  const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

  let getWeatherInfo = async () => {
    try {
      let geoResponse = await fetch(`${GEO_API}?name=${city}&count=1`);
      let geoJson = await geoResponse.json();

      if (!geoJson.results || geoJson.results.length === 0) {
        throw new Error("City not found");
      }

      let { latitude, longitude, name, country } = geoJson.results[0];

      let weatherResponse = await fetch(
        `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      let weatherJson = await weatherResponse.json();

      let result = {
        city: `${name}, ${country}`,
        temp: weatherJson.current_weather.temperature,
        wind: weatherJson.current_weather.windspeed,
      weatherCode: weatherJson.current_weather.weathercode, 
     };
     

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setError(false);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="bg-white/80  shadow-lg p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          className="w-full"
        />
        
        <Button
          variant="contained"
          type="submit"
          className=" w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 text-lg rounded-lg shadow-md"
        >
          Search
        </Button>
        {error && (
          <p className="mt-2 bg-red-100 text-red-600 border border-red-200 rounded-lg p-3 text-center font-medium">
            No Such Place Exists!
          </p>
        )}
      </form>
    </div>
  );
};

export default Searchbox;
