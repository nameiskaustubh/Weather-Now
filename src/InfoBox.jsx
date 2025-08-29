import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/WbSunny';

const InfoBox = ({ info }) => {
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1200&auto=format&fit=crop&q=60";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1200&auto=format&fit=crop&q=60";
    const RAIN_URL = "https://images.unsplash.com/photo-1509635022432-0220ac12960b?w=1200&auto=format&fit=crop&q=60";
  
    const weatherCodeMap = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      71: "Slight snow fall",
      73: "Moderate snow fall",
      75: "Heavy snow fall",
      77: "Snow grains",
      80: "Rain showers (slight)",
      81: "Rain showers (moderate)",
      82: "Rain showers (violent)",
      85: "Snow showers (slight)",
      86: "Snow showers (heavy)",
      95: "Thunderstorm",
      96: "Thunderstorm with slight hail",
      99: "Thunderstorm with heavy hail"
    };
  
    const weatherText = weatherCodeMap[info.weatherCode] || "Unknown";
  
    
    const getBackgroundImage = () => {
      if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(info.weatherCode)) {
        return RAIN_URL;
      } else if ([71, 73, 75, 77, 85, 86].includes(info.weatherCode)) {
        return COLD_URL; 
      } else if ([95, 96, 99].includes(info.weatherCode)) {
        return RAIN_URL; 
      } else {
        return info.temp > 30 ? HOT_URL : COLD_URL;
      }
    };
  
    
    const getWeatherIcon = () => {
      if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(info.weatherCode)) {
        return <ThunderstormIcon className="ml-2 text-blue-600" />;
      } else if ([71, 73, 75, 77, 85, 86].includes(info.weatherCode)) {
        return <AcUnitIcon className="ml-2 text-blue-400" />;
      } else if ([95, 96, 99].includes(info.weatherCode)) {
        return <ThunderstormIcon className="ml-2 text-yellow-700" />;
      } else {
        return info.temp > 30
          ? <SunnyIcon className="ml-2 text-yellow-500" />
          : <AcUnitIcon className="ml-2 text-blue-400" />;
      }
    };
  
    return (
      <div className="flex justify-center">
        <Card className="shadow-xl rounded-xl overflow-hidden border border-white/20 bg-white/80 backdrop-blur-lg w-full">
          <CardMedia
            sx={{ height: { xs: 110, sm: 140 } }}
            image={getBackgroundImage()}
            title={weatherText}
            className="object-cover"
          />
          <CardContent className="p-3 md:p-4">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="flex items-center justify-between text-gray-800 font-bold text-sm md:text-base"
            >
              <span>{info.city}</span>
              <span className="flex items-center">{getWeatherIcon()}</span>
            </Typography>
  
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-blue-50 rounded-lg p-2 text-center shadow-sm">
                <div className="text-blue-600 font-medium text-xs md:text-sm">Temperature</div>
                <div className="text-gray-800 font-semibold text-sm md:text-base">{info.temp} °C</div>
              </div>
              <div className="bg-green-50 rounded-lg p-2 text-center shadow-sm">
                <div className="text-green-600 font-medium text-xs md:text-sm">Wind Speed</div>
                <div className="text-gray-800 font-semibold text-sm md:text-base">{info.wind} km/h</div>
              </div>
            </div>
  
            <div className="mt-3 text-center bg-gray-50 rounded-lg p-2 shadow-sm">
              <p className="text-gray-700 text-xs md:text-sm">
                The weather is <i className="font-medium">{weatherText}</i>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  
  
};

export default InfoBox;
