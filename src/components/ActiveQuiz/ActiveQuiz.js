import React from 'react';
import './ActiveQuiz.scss';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
    <div className="ActiveQuiz">
        <p className="Question">
            <span>
                <strong>&nbsp;
                { props.answerNumber }.
                </strong>
                {props.question}
            </span>
            <small>{ props.answerNumber } out of { props.quizLength }</small>
        </p>        
        <AnswersList 
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
        />
    </div>
)

export default ActiveQuiz;
