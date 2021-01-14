import styles from '../Statistics/statistics.module.css';
import PropTypes from 'prop-types';


function Statistics ({good, neutral, bad, percentage}) {
    return <div className ={styles.container}>
        <span className = {styles.review}>Good: {good}</span>
        <span className = {styles.review}>Neutral: {neutral} </span>
        {bad? <span className ={styles.bad}>Bad: {bad}</span> : '' }
        <span className = {styles.review}>Positive feedback: {percentage} %</span>
    </div>
    
}

Statistics.propTypes ={
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    percentage: PropTypes.number,
}


export default Statistics