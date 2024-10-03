import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/reducers';

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.app.weather);

  useEffect(() => {
    dispatch(fetchWeather('New York')); // Default city
  }, [dispatch]);

  if (weather.status === 'loading') {
    return <div>Loading...</div>;
  }

  if (weather.status === 'failed') {
    return <div>Error fetching weather data</div>;
  }

  return (
    <div>
      {weather.data && (
        <div>
          <h2>{weather.data.name}</h2>
          <p>{Math.round(weather.data.main.temp - 273.15)}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
