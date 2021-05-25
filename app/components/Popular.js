import { useState } from 'react';
import styles from './Popular.module.scss';

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  return (
    <ul className={styles.list}>
      {languages.map(language => (
        <li
          key={language}
          className={`${styles.elem}${language === selectedLanguage ? ` ${styles.elemHighlighted}` : ''}`}
        >
          <button
            onClick={() => setSelectedLanguage(language)}
            className={styles.button}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Popular;
