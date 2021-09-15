import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ leaveFeedback, options }) {
  return (
    <div>
      <List>
        {Object.keys(options).map(option => (
          <li key={option}>
            <Button type="button" onClick={() => leaveFeedback(option)}>
              {option}
            </Button>
          </li>
        ))}
      </List>
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  option: PropTypes.arrayOf(
    PropTypes.exact({
      Good: PropTypes.string.isRequired,
      Neutral: PropTypes.string.isRequired,
      Bad: PropTypes.number.isRequired,
    }),
  ),
};
