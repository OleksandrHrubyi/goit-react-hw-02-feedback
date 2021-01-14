import styles from '../FeedbackOptions/feedbackOptions.module.css';
import PropTypes from 'prop-types';


function FeedbackOptions ({options}) {
    return <div className ={styles.container}>
    <button className ={styles.btn} data-type = 'good' onClick = {options}>Good</button>
    <button className ={styles.btn} data-type = 'neutral' onClick = {options}>Neutral</button>
    <button className ={styles.btn} data-type = 'bad' onClick = {options}>Bad</button>
    </div>
    
}

FeedbackOptions.propTypes ={
    options: PropTypes.func.isRequired,
}

export default FeedbackOptions