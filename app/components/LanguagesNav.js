import styles from './LanguagesNav.module.scss';

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

const LanguagesNav = ({ selected, onUpdateLanguage }) => {
  return (
    <ul className={styles.list}>
      {languages.map(language => (
        <li
          key={language}
          className={styles.elem}
        >
          <button
            onClick={() => onUpdateLanguage(language)}
            className={`${styles.button}${language === selected ? ` ${styles.buttonHighlighted}` : ''}`}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default LanguagesNav;
