import React, { useEffect, useState } from "react";
import LoadingSplash from "./LoadingSplash";
import './Styles/Weather.css'
import logo from './assets/Logo.png'
import axios from "axios";
export default function Weather(){
    const [input,setInput] = useState()
    const [city,setCity] = useState("Coimbatore")
    const [weatherData,setWeatherData] = useState(null)
    const [loading,setLoading] = useState(false)
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    
    useEffect(() => {
       if(city){
        const getWeather = async () =>{            
            const options = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                params: {q: city},
                headers: {
                    'X-RapidAPI-Key': 'df9c785ademshfa84631e3184d34p166d4djsn6c2950c335c7',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            try {
                setLoading(true)
                const response = await axios.request(options);
                console.log(response.data);
                setWeatherData(response.data);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error(error);
            }
        }
        getWeather()
    }
        }
        ,[city])


    return(
        <div className="Weather">
            <div>
                <input placeholder="Enter Any Major City" className="searchBar" type="text" onChange={(e) => setInput(e.target.value)}/>
                <button className="SearchButton" onClick={() => {setCity(input)}}>Search</button>
            </div>
            {loading && <LoadingSplash/> }
            {weatherData &&

                <div className="WeatherContainer">
                    <div>{day}</div>
                    <div><pre>{weatherData.location.name}, {weatherData.location.region}</pre></div>
                    <div className="temp-and-image">
                        <div>
                            {weatherData.current.temp_c} °C <br />{weatherData.current.temp_f} °F
                        </div>
                        <figure>
                            <figcaption style={{fontSize:"20px",textAlign:"center",marginBottom:"20px"}} >{weatherData.current.condition.text}</figcaption>
                            <img className="weather-icon" src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
                        </figure>
                    </div>
                    <div className="conditions">
                            <i class="fa-solid fa-droplet" title="Humidity"/>{weatherData.current.humidity}%  
                            <i class="fa-brands fa-envira" title="Wind Speed KPH" />{weatherData.current.wind_kph} kph
                            <i class="fa-brands fa-canadian-maple-leaf" title="Wind Speed MPH" />{weatherData.current.wind_mph} mph
                            <i class="fa-solid fa-gauge-high" title="Pressure(in)" />{weatherData.current.pressure_in} "hg                      

                    </div>
                </div>
            }
        
        </div>
    );
}