import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Description from "./Description";
import Feedback from "./Feedback";
import Options from "./Options";
import Notification from "./Notification";

const STORAGE_KEY = "feedbackData";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem(STORAGE_KEY);
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className={styles.container}>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} total={totalFeedback} positive={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;