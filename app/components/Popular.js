import styles from './Popular.module.scss';

const Popular = () => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className={styles.list}>
      {languages.map(language => (
        <li key={language} className={styles.elem}>
          <button className={styles.button}>
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Popular;
