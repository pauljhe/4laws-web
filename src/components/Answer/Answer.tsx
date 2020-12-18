import React, { useState } from 'react';
import ArrowIcon from '../../icons/ArrowIcon';
import './Answer.css';

export interface IAnswerProps {
  answer: string;
  className?: string | undefined;
}

const Answer: React.FC<IAnswerProps> = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const className = 'Answer' + ((props.className) ? (' ' + props.className) : '');
  const classNameAnswer = 'Answer-span' + ((showAnswer) ? ' Answer-span-show' : '');
  const classNameArrow = 'Answer-arrow' + ((showAnswer) ? ' Answer-arrow-left' : '');
  return (
    <div className={className}>
      <span className={classNameAnswer}>{ (showAnswer) ? props.answer : '' }</span>
      <button className={classNameArrow} onClick={() => setShowAnswer(!showAnswer)}>
        <ArrowIcon  />
      </button>
    </div>
  );
};

export default Answer;