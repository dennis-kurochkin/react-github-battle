import PropTypes from 'prop-types';
import { FaUser, FaStar, FaCar, FaCodeBranch } from 'react-icons/fa';
import InfoElem from './InfoElem';
import styles from './index.module.scss';

// TODO: add styles to the classes
const Repository = ({ ownIndex, name, url, author, stars, forks, issues }) => {
  const { login: authorName, avatar_url: avatarUrl, html_url: authorUrl } = author

  return (
    <li className={styles.elem}>
      <p className={styles.number}>#{ownIndex}</p>
      <div className={styles.avatar}>
        <img
          src={avatarUrl}
          alt={`${authorName}'s avatar`}
          className={styles.avatarImage}
        />
      </div>
      <h2 className={styles.title}>
        <a
          href={url}
          className={styles.link}
          target="_blank"
        >{name}</a>
      </h2>
      <ul className={styles.info}>
        <li className={styles.infoElem}> {/* TODO: extend and use InfoElem component */}
          <a href={authorUrl} target="_blank">
            <span className={styles.infoElemIcon}><FaUser /></span>
            <span className={styles.infoElemText}>{authorName}</span>
          </a>
        </li>
        <InfoElem icon={<FaStar />}>{stars.toLocaleString()} stars</InfoElem>
        <InfoElem icon={<FaCodeBranch />}>{forks.toLocaleString()} forks</InfoElem>
        <InfoElem icon={<FaCar />}>{issues.toLocaleString()} open issues</InfoElem>
      </ul>
    </li>
  );
}

Repository.propTypes = {
  ownIndex: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  issues: PropTypes.number.isRequired,
};

export default Repository;
