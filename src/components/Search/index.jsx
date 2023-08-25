import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import styles from './search.module.scss';

const Search = ({ locationChange }) => {
  const [text, setText] = useState('');
  const allowedCharacters = /[\p{L}\s-]/u;

  function onSubmitHandler(event) {
    event.preventDefault();
    locationChange(text);
    setText('');
  }

  function onChangeHandler(event) {
    const input = event.target.value;
    if (allowedCharacters.test(input) || input === '') {
      setText(input.charAt(0).toUpperCase() + input.slice(1));
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        className={styles.input}
        type='text'
        value={text}
        onChange={onChangeHandler}
      />
      <button className={styles.button}>
        <RiSearchLine className={styles.icon} />
      </button>
    </form>
  );
};

export default Search;
