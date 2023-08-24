import styles from './weatherHighlights.module.scss';

import Container from '@components/Container';
import WeatherStat from '@components/WeatherStat';

const WeatherHighlights = ({ forecast, current }) => {
  return (
    <div className={styles.highlights}>
      <Container>
        <div className={styles.inner}>
          <WeatherStat
            parameter={'Chance of Rain'}
            value={forecast.forecastday[0].day.daily_chance_of_rain}
            units='%'
          />
          <WeatherStat
            parameter={'Humidity'}
            value={current.humidity}
            units='%'
          />
          <WeatherStat
            parameter={'Wind Speed'}
            value={Math.round(current.wind_kph)}
            units='k/h'
          />
          <WeatherStat
            parameter={'Visiblity'}
            value={current.vis_km}
            units='km'
          />
          <WeatherStat
            parameter={'Pressure'}
            value={current.pressure_mb}
            units='hPa'
          />
        </div>
      </Container>
    </div>
  );
};

export default WeatherHighlights;
