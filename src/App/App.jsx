import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import Section from '../Section/Section.jsx';
import { MainContainer } from './App.styled.js';

const App = () => {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const leaveFeedback = option => {
    setFeedbacks(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce(
      (acc, feedback) => acc + feedback,
      0,
    );
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedbacks.good / countTotalFeedback()) * 100);
  };

  const options = Object.keys(feedbacks);
  const { good, neutral, bad } = feedbacks;
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <MainContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions leaveFeedback={leaveFeedback} options={options} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={total}
          countPositiveFeedbackPercentage={percentage}
        />
      </Section>
    </MainContainer>
  );
};

export default App;
