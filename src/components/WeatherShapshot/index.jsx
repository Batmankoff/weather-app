import styles from './weatherShapshot.module.scss';

const WeatherShapshot = ({ icon, temp_c, temp_f, time, scale }) => {
  return (
    <div className={styles.inner}>
      <p className={styles.time}>{time}</p>
      <img src={icon} alt='icon' />
      {scale === 'temp_c' ? (
        <p className={styles.temperature}>{Math.round(temp_c)}°C</p>
      ) : (
        <p className={styles.temperature}>{Math.round(temp_f)}°F</p>
      )}
    </div>
  );
};

export default WeatherShapshot;
