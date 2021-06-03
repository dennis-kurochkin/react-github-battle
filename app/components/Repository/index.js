import PropTypes from 'prop-types';
import { FaUser, FaStar, FaCar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa';
import InfoElem from './InfoElem';
import styles from './index.module.scss';

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
      <div className={styles.body}>
        <h2 className={styles.title}>
          <a
            href={url}
            className={styles.link}
            target="_blank"
          >{name}</a>
        </h2>
        <ul className={styles.infoList}>
          <InfoElem
            icon={<FaUser color="var(--color-secondary)" />}
            href={authorUrl}
          >
            {authorName}
          </InfoElem>
          <InfoElem
            icon={<FaStar color="rgb(255, 215, 0)" />}
          >
            {stars.toLocaleString()} stars
          </InfoElem>
          <InfoElem
            icon={<FaCodeBranch color="rgb(129, 195, 245)" />}
          >
            {forks.toLocaleString()} forks
          </InfoElem>
          <InfoElem
            icon={<FaExclamationTriangle color="rgb(241, 138, 147)" />}
          >
            {issues.toLocaleString()} open issues
          </InfoElem>
        </ul>
      </div>
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
