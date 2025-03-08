import styles from './Notification.module.css';

export default function Notification({ totalFeedback }) {
  return (
    <div className={styles.container}>
      <p>No feedback yet</p>
    </div>
  );
}
