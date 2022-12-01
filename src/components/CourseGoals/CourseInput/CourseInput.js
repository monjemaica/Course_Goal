import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import { spacing, style } from '@mui/system';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (e) => {
    if(e.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid ? styles.invalid : '' }`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      {!isValid ? <Alert severity="error">Invalid Input!</Alert> : ''}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
