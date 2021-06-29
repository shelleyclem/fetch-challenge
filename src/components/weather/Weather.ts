import React, { useEffect, useState } from 'react';

const Weather: any = () => {
    const baseURL: string = 'http://api.openweathermap.org/data/2.5/weather';
    const key: string = '5cb0082a663be375f7d12c74f060790f';

    const [results, setResults] = useState({});

    let lat: string;
    let long: string;

    const fetchWeather: any = (props: string) => {
        let url: string = `${baseURL}?lat=${lat}&${long}&appid=${key}`;

        fetch(url)
        .then((res) => {
            res.json();
        })
        .then((data) => {
            setResults(data)
        })
        .catch((err) => console.log(err));
    }   

    useEffect(() => {
        fetchWeather();
    }, []);

    return(
        <div>
            {results.weather.map((item, index) => (
                <>
                <h1>{item.description}</h1>
                <h1>{results.main.temp}</h1>
            ))}
        </div>
    )
}

export default Weather;