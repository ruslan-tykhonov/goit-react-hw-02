import styles from './Feedback.module.css';

export default function Feedback({ values, totalFeedback, positiveFeedback }) {
  return (
    <div className={styles.container}>
      <ul className={styles.opinionList}>
        <li>Good: {values.good}</li>
        <li>Neutral: {values.neutral}</li>
        <li>Bad: {values.bad}</li>
        <li className={styles.opinionItem}>Total: {totalFeedback}</li>
        <li className={styles.opinionItemPositive}>
          Positive: {positiveFeedback}
        </li>
      </ul>
    </div>
  );
}
