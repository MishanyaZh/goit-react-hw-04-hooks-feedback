import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import Section from '../Section/Section.jsx';
import { MainContainer } from './App.styled.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <MainContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          leaveFeedback={leaveFeedback}
          options={{ good, neutral, bad }}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback()}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </MainContainer>
  );
};

export default App;
