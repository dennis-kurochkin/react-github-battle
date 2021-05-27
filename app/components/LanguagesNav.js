import styles from './LanguagesNav.module.scss';
import PropTypes from 'prop-types';

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
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.oneOf(languages).isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default LanguagesNav;
