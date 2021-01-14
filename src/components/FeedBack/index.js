import React, {Component} from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import SectionTitle from '../SectionTitle/SectionTitle'
import Statistic from '../Statistics/Statistics'
import Notification from '../Statistics/Notification/Notification '


class Counter extends Component {
    
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
   }
   
   onCountTotalFeedback = () => {
       this.setState ((prevState) => {
           return {total: prevState.good + prevState.neutral + prevState.bad}
        })
    }
    
    
    countPositiveFeedbackPercentage = () => {
        this.setState ((prevState) => {
            return { percentage: Number(((prevState.good / prevState.total) * 100).toFixed()) }
        })
    }
    
    onClick = (e) => {
        this.setState ((prevState) => {
            return { [e.target.dataset.type]: prevState[e.target.dataset.type] + 1 }
        });
        this.onCountTotalFeedback();
        this.countPositiveFeedbackPercentage();
       }


    render () {
        const { good, neutral, bad, total, percentage } = this.state;
        
        return <>
       
        <SectionTitle title = 'Please leave your feedback'>
            <FeedbackOptions options={['good', 'neutral', 'bad']}  onLeaveFeedback={this.onClick}/>
        </SectionTitle>
        
        <SectionTitle title = 'Statistics'>
            { total ? <Statistic good ={good} neutral = {neutral} bad ={bad} total = {total} percentage = {percentage}/> : <Notification message = "No feedback given."/> }
        </SectionTitle>
        
        </>
    }
}

export default Counter

















