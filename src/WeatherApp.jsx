import React from 'react'
import { useState } from 'react';
import InfoBox from './InfoBox'
import Searchbox from './Searchbox'
const WeatherApp = () => {

    const [weatherInfo, setWeatherInfo] = useState({
        city : "Nashik",
        feelslike :24.84,
        temp : 25.05,
        tempMin :25.05,
        tempMax :25.05,
        humidity :47,
        weather :"haze",
    });


    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br bg-sky-700 flex flex-col justify-center items-center px-3">
    <div className="w-full max-w-sm md:max-w-md space-y-5 bg-white/20 backdrop-blur-lg  shadow-2xl p-4 md:p-6">
    <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide text-center">
  Weather App for
</h2>
<h3 className="text-xl md:text-2xl font-bold text-gray-50 tracking-wider text-center drop-shadow-md">
  Jasmie
</h3>

      <Searchbox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  </div>
  )
}

export default WeatherApp