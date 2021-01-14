import styles from '../Notification/notification.module.css';
import PropTypes from 'prop-types';

function Notification ({message}) {
    return <span className ={styles.msg}>{message}</span>
};


Notification.propTypes ={
    message: PropTypes.string.isRequired,
}

export default Notification