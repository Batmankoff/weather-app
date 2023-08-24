import styles from './weatherInfo.module.scss';
import Weather from '@components/Weather';
import WeatherUpdates from '@components/WeatherUpdates';
import Container from '@components/Container';

const WeatherInfo = ({ scale, forecast, hourlyForecast }) => {
  return (
    <>
      <Container>
        <div className={styles.info}>
          <Weather scale={scale} {...forecast} />
          <WeatherUpdates scale={scale} hourlyForecast={hourlyForecast} />
        </div>
      </Container>
    </>
  );
};

export default WeatherInfo;
