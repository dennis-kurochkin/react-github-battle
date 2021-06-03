import PropTypes from 'prop-types';
import styles from './index.module.scss';

const InfoElem = ({ icon, children, href }) => {
  const infoElemText = (
    <>
      {icon}
      <span className={styles.infoElemText}>{children}</span>
    </>
  );

  return (
    <li className={!href ? styles.infoElem : ''}>
      {href
        ? <a href={href} className={`${styles.infoElem} ${styles.infoLink}`} target="_blank">{infoElemText}</a>
        : infoElemText
      }
    </li>
  )
};

InfoElem.propTypes = {
  icon: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}

export default InfoElem;
