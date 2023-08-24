import { TiWeatherCloudy } from 'react-icons/ti';
import styles from './weatherShapshot.module.scss';

const WeatherShapshot = ({ icon, temp_c, temp_f, time }) => {
  return (
    <div className={styles.inner}>
      <p className={styles.time}>{time}</p>
      <TiWeatherCloudy className={styles.icon} />
      <p className={styles.temperature}> {temp_c} °C</p>
    </div>
  );
};

export default WeatherShapshot;
