import axios from 'axios'
import { useState } from 'react';

export const Weather = () => {

  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});


  const submitHandler = (e) => {
    e.preventDefault();
    console.log("I am click handler")
    axios.get(`https://api.weatherbit.io/v2.0/current?city=${cityName}&units=matrics&key=ff1d845976ac4e0aa75fb4c10a59425c&include=minutely`)
    .then((response) =>{
      console.log("Response",response.data.data[0].app_temp)
      setWeatherData(response.data)
    })
    .catch((err) =>{
      console.log(err , "Error")
    })
  }
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your city Name' onChange={(e)=>{
          setCityName(e.target.value) ;
        }} />
        <button type='submit'>Get Weather</button>
      </form>
      <div>
      {weatherData && Array.isArray(weatherData.data) && weatherData.data.length > 0 && (
        <>
          <p>Temperature: {Math.round(weatherData.data[0].app_temp)}</p>
          <p>City: {weatherData.data[0].city_name}</p>
          </>
        )}
      </div>
    </>
  )
}
