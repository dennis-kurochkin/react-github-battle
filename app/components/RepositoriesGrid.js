import PropTypes, { object } from 'prop-types';
import Repository from './Repository';
import styles from './RepositoriesGrid.module.scss';

const RepositoriesGrid = ({ repositories }) => {
  return (
    <ul className={styles.list}>
      {repositories.map((repository, index) => (
        <Repository
          key={repository.id}
          ownIndex={index + 1}
          name={repository.name}
          url={repository.html_url}
          author={repository.owner}
          stars={repository.stargazers_count}
          forks={repository.forks}
          issues={repository.open_issues}
        />
      ))}
    </ul>
  );
}

RepositoriesGrid.propTypes = {
  repositories: PropTypes.arrayOf(object).isRequired,
}

export default RepositoriesGrid;
