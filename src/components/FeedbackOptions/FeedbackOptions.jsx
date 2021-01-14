import styles from '../FeedbackOptions/feedbackOptions.module.css';
import PropTypes from 'prop-types';


function FeedbackOptions ({options, onLeaveFeedback}) {
   return <div className ={styles.container}>{options.map((btn) => {
        return <button key ={btn} className ={styles.btn} data-type = {btn} onClick = {onLeaveFeedback}>{btn}</button>
    })}
    </div>
}

FeedbackOptions.propTypes ={
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    
}

export default FeedbackOptions