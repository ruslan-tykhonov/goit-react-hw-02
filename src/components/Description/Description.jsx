import styles from './Description.module.css';

export default function Description () {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Sip Happens Café</h2>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
