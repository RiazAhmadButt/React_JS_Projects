import axios from 'axios'
import { useState } from 'react';
import './weather.css'

export const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("I am click handler")
    axios.get(`https://api.weatherbit.io/v2.0/current?city=${cityName}&units=matrics&key=ff1d845976ac4e0aa75fb4c10a59425c&include=minutely`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((err) => {
        console.log(err, "Error")
      })
  }
  return (
    <>
      <div className="weather">
        <div className='weather-body'>
          <h2 className='heading'>Weather App</h2>
          <form action="" onSubmit={submitHandler}>
            <input type="text" placeholder='Enter your city Name' className='input-field' onChange={(e) => {
              setCityName(e.target.value);
            }} />
            <button type='submit' className='btn'>Get Weather</button>
          </form>
          <div className='weather-detail'>
            {weatherData && Array.isArray(weatherData.data) && weatherData.data.length > 0 && (
              <>
                <h4>Temperature: {Math.round(weatherData.data[0].app_temp)}</h4>
                <h4>City: {weatherData.data[0].city_name}</h4>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
