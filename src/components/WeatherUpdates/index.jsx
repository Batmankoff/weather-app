import styles from './weatherUpdates.module.scss';
import WeatherShapshot from '@components/WeatherShapshot';

const WeatherUpdates = ({ hourlyForecast }) => {
  console.log(hourlyForecast);
  return (
    <div className={styles.updates}>
      {hourlyForecast.map((el, index) => {
        return <WeatherShapshot {...el} key={index} />;
      })}
    </div>
  );
};

export default WeatherUpdates;
