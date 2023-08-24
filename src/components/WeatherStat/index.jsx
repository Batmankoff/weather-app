import styles from './weatherStat.module.scss';
const WeatherStat = ({ parameter, value, units }) => {
  return (
    <div className={styles.box}>
      <p className={styles.parameter}>{parameter}</p>
      <p className={styles.value}>
        {value}

        {units}
      </p>
    </div>
  );
};

export default WeatherStat;
