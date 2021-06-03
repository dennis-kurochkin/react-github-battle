import styles from './BattleInstructions.module.scss';

const BattleInstructions = () => (
  <section>
    <h2 className={styles.title}>Instructions</h2>
    <ol className={styles.list}>
      <li className={styles.elem}>
        Enter two Github users
      </li>
      <li className={styles.elem}>
        Battle
      </li>
      <li className={styles.elem}>
        See the winner
      </li>
    </ol>
  </section>
);

export default BattleInstructions;
