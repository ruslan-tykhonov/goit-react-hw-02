import { useState } from 'react';
import { useEffect } from 'react';
import styles from './App.module.css';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
  //Збереження стану + отримання данних зі сховища
  const [values, setValues] = useState(() => {
    const saveLocalStorage = localStorage.getItem('feedback');
    return saveLocalStorage
      ? JSON.parse(saveLocalStorage)
      : { good: 0, neutral: 0, bad: 0 };
  });

  //Подання данних до локального сховища за допомогою useEffect
  useEffect(() => {
    const stringifiedValue = JSON.stringify(values);
    localStorage.setItem('feedback', stringifiedValue);
  }, [values]);

  //Інкремент для кожної кнопки, тип відгука отримуємо за допогою параметру feedbackType
  const updateFeedback = feedbackType => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  //Сума всіх відгуків
  const totalFeedback = values.good + values.neutral + values.bad;

  //Reset - кнопка. Встановлюємо всі значення на нуль.
  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  //Обрахунок відсоткового значення позитивних відгуків, виконано згідно умов тз...
  const positiveFeedback =
    Math.round((values.good / totalFeedback) * 100) + '%';

  return (
    <div className={styles.wrapper}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification totalFeedback={totalFeedback} />
      )}
    </div>
  );
}

export default App;
