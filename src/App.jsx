import { useEffect, useState } from 'react';

import './App.scss';
import { API_KEY, API_URL } from '@config/apiConfig';
import Header from '@components/Header';
import WeatherHighlights from '@components/WeatherHighlights';
import WeatherInfo from '@components/WeatherInfo';

function App() {
  const [forecast, setForecast] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [city, setCity] = useState('Moscow');
  const [scale, setScale] = useState('temp_c');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const apiUrlWithQuery = `${API_URL}?key=${API_KEY}&q=${city}&days=1`;

  function locationChangeHandler(city) {
    setCity(city);
  }

  function scaleSelectionHandler(value) {
    setScale(value);
  }

  function getHourlyForecastArray(array) {
    const outputArray = array.map((item) => ({
      temp_c: item.temp_c,
      temp_f: item.temp_f,
      icon: item.condition.icon,
      time: item.time.split(' ')[1],
    }));

    return outputArray;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(apiUrlWithQuery);
        const forecast = await res.json();
        setForecast(forecast);
        const forecastData = forecast.forecast.forecastday[0].hour;
        if (forecastData) {
          setHourlyForecast(getHourlyForecastArray(forecastData));
        }
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [city]);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className='wrapper'>
      <Header
        scaleSelection={scaleSelectionHandler}
        locationChange={locationChangeHandler}
      />
      <div className='main'>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <>
            <WeatherInfo
              scale={scale}
              forecast={forecast}
              hourlyForecast={hourlyForecast}
            />
            <WeatherHighlights {...forecast} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
