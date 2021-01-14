import PropTypes from 'prop-types';
import styles from '../SectionTitle/sectionTitle.module.css';

export default function SectionTitle ({title, children}) {
    return <div className ={styles.container}>
    <h1 className = {styles.title}>{title}</h1>
    <div className ={styles.child}>{children}</div>
    </div>
}

SectionTitle.propTypes ={
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
    
}

