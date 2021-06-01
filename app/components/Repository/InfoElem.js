import PropTypes from 'prop-types';
import styles from './index.module.scss';

const InfoElem = ({ icon, children }) => (
  <li className={styles.infoElem}>
    <span className={styles.infoElemIcon}>{icon}</span>
    <span className={styles.infoElemText}>{children}</span>
  </li>
);

InfoElem.propTypes = {
  icon: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
}

export default InfoElem;
