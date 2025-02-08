import css from "./Feedback.module.css";

export default function Feedback({
  feedback,
  positiveFeedback,
  totalFeedback,
}) {
  return (
    <div className={css.feedback}>
      <ul className={css.feedbackList}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
      </ul>
      <p className={css.total}>Total: {totalFeedback}</p>
      <p className={css.positive}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
