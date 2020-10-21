import React from 'react';
import './FinishedQuiz.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/Button/Button';
import '../UI/Button/Button.scss';

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++;
        } 

        return total;
    }, 0)
    return (
        <div className="FinishedQuiz">
            <ul>
                { props.quiz.map((quizItem, index) => {
                    return (
                        <li 
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <FontAwesomeIcon icon={props.results[quizItem.id] === 'error' ? faTimes : faCheck} color={props.results[quizItem.id] === 'error' ? 'rgba(240, 87, 108, .7)' : 'rgba(161, 240, 69, .7)'}/>
                        </li>
                    )
                }) }
            </ul>

            <p>Right {successCount} out of {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} className="btn-primary">Repeat</Button>
                <Button onClick={props.onRetry} className="btn-success">Move to quiz list</Button>
                <Button onClick={props.onRetry} className="btn-error">Repeat</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz;
