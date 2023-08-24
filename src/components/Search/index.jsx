import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import styles from './search.module.scss';

const Search = ({ locationChange }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    locationChange(text);
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        className={styles.input}
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.button}>
        <RiSearchLine className={styles.icon} />
      </button>
    </form>
  );
};

export default Search;
