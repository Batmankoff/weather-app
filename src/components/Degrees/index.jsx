import { useState, useEffect } from 'react';

import styles from './degrees.module.scss';

const Degrees = ({ scaleSelection }) => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (checked) {
      scaleSelection('temp_c');
    } else {
      scaleSelection('temp_f');
    }
  }, [checked, scaleSelection]);

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type='checkbox'
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className={styles.celsius}>°C</span>
        <span className={styles.divider}>/</span>
        <span className={styles.fahrenheit}>°F</span>
      </label>
    </form>
  );
};

export default Degrees;
