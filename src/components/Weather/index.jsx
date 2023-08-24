import styles from './weather.module.scss';

const Weather = ({ scale, location, current }) => {
  function getFormattedDate() {
    const options = {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    return new Date().toLocaleString('en-US', options);
  }

  const formattedDate = getFormattedDate();

  return (
    <div className={styles.weather}>
      <p className={styles.location}>{location.name}</p>
      <time className={styles.datetime}>{formattedDate}</time>
      {scale === 'temp_c' ? (
        <p className={styles.temperature}>{Math.round(current.temp_c)}°C</p>
      ) : (
        <p className={styles.temperature}>{Math.round(current.temp_f)}°F</p>
      )}
    </div>
  );
};

export default Weather;
