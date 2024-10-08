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
        <h2 class='heading2'>Your Goals</h2>
        <div id="form">
        <input
          type="text"
          value={goalText}
          onChange={(e) => setGoalText(e.target.value)}
          placeholder="Write your goal"
        />
        <button onClick={handleAddGoal}>Add Goal</button>
        </div>
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              <span style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>
                {goal.text}
              </span>
              <button class="complete" onClick={() => dispatch(toggleGoal(goal.id))}>
                {goal.completed ? 'Undo' : 'Complete'}
              </button>
              <button class="delete" onClick={() => dispatch(deleteGoal(goal.id))}>Delete</button>
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
  font-size: 30px;
  font-weight: 600;
  color: #fdfdfe;
  text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
    0px 0px 20px #b393d3;}


ul li
  {display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eaeaea;
  &:last-child {
    border-bottom: none;}

div #form{
 background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
 
.complete {
    background-color: purple;
    color: white;
       padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
    &:hover {
    background-color: plum;
  
  }
  }

.delete {
    background-color: crimson;
    color: white;
    padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
    &:hover {
    background-color: red;
     
  }
}
`;