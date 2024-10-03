import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGoal, deleteGoal, toggleGoal } from '../redux/reducers';
import styled from 'styled-components';

const GoalsList = () => {
  const [goalText, setGoalText] = useState('');
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.app.goals);

  const handleAddGoal = () => {
    if (goalText.trim()) {
      dispatch(addGoal(goalText));
      setGoalText('');
    }
  };

  return (
    <Container>
    <div>
      <h2>Your Goals</h2>
      <input 
        type="text" 
        value={goalText} 
        onChange={(e) => setGoalText(e.target.value)} 
        placeholder="Write your goal" 
      />
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <span style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>
              {goal.text}
            </span>
            <button onClick={() => dispatch(toggleGoal(goal.id))}>
              {goal.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch(deleteGoal(goal.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </Container>
  );
};

export default GoalsList;



const Container = styled.div`

  max-width: 600px;
  margin: 40px auto;


h2
  {text-align: center;
  color: #333;}


ul li
  {display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eaeaea;
  &:last-child {
    border-bottom: none;}

button
 { padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &.complete {
    background-color: #28a745;
    color: white;
  }
  &.delete {
    background-color: #dc3545;
    color: white;
}}
`;