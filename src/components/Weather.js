import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/reducers';
import styled from 'styled-components';
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
    <Container>
    <div>
      {weather.data && (
        <div>
          <h2 class="heading1">{weather.data.name}</h2>
          <p>{Math.round(weather.data.main.temp - 273.15)}°C</p>
        </div>
      )}
    </div>
    </Container>
  );
};

export default Weather;
const Container = styled.div`
.heading1, p{
font-size: 40px;
  font-weight: 600;
  color: #fdfdfe;
  text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
    0px 0px 20px #b393d3;}
`