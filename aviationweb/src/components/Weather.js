import React, { useEffect, useState } from 'react';
// import './WeatherWidget.css';
import { WbSunny, Cloud } from '@mui/icons-material';

const WeatherWidget = () => {
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState('');
    const [date, setDate] = useState('');
    const [weatherIcon, setWeatherIcon] = useState(null);
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(success, error);
  
      function success(pos) {
        const lat = pos.coords.latitude;
        const long = pos.coords.longitude;
        weather(lat, long);
      }
  
      function error() {
        console.log('There was an error');
      }
  
      function weather(lat, long) {
        const URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
        fetch(URL)
          .then(response => response.json())
          .then(data => display(data))
          .catch(err => console.error('Error fetching weather:', err));
      }
  
      function display(data) {
        const city = data.name.toUpperCase();
        const temp =
          Math.round(data.main.temp_max) +
          '°C | ' +
          Math.round(Math.round(data.main.temp_max) * 1.8 + 32) +
          '°F';
        const date = formatDateTime(new Date());
  
        setCity(city);
        setTemp(temp);
        setDate(date);
  
        const fontColor = calculateFontColor(data.main.temp_max);
        const bgColor = calculateBgColor(data.main.temp_max);
  
        if (data.weather[0].main.toLowerCase() === 'sunny') {
          setWeatherIcon(<WbSunny style={{ color: '#d36326' }} />);
        } else {
          setWeatherIcon(<Cloud style={{ color: '#FFE55C' }} />);
        }
      }

    function formatDateTime(dateTime) {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];

      const minutes =
        dateTime.getMinutes() < 11 ? '0' + dateTime.getMinutes() : dateTime.getMinutes();

      return (
        weekday[dateTime.getDay()].toUpperCase() +
        ' | ' +
        months[dateTime.getMonth()].toUpperCase().substring(0, 3) +
        ' ' +
        dateTime.getDate() +
        ' | ' +
        dateTime.getHours() +
        ':' +
        minutes
      );
    }

    function calculateFontColor(temp) {
      return Math.round(temp) > 25 ? '#d36326' : '#44c3de';
    }

    function calculateBgColor(temp) {
      return Math.round(temp) > 25 ? '#f3f5d2' : '#eff3f9';
    }
  }, []); 

  return (
    <div className="box" style={{ background: " #0e2246"}}>
    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
    <div className="weathercon">{weatherIcon}</div>
    <div className="info">
      <p className="location" style={{ color: "white",marginBottom:"0.5rem"}}>{city}</p>
      <p className="date" style={{ color: "white"}}>{date}</p>
      <h3 className="temp" style={{ color: "white" }}>{temp}</h3>
    </div>
  </div>
  );
};

export default WeatherWidget;