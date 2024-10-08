import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Weather from './components/Weather';
import Quote from './components/Quote';
import ImageGallery from './components/ImageGallery';
import GoalsList from './components/GoalsList';
import styled from 'styled-components';


function App() {
  return (
    <Container>
    <Provider store={store}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1 class="heading">Inspirational Homepage</h1>
        <Weather />
        <ImageGallery />
        <Quote />
        <GoalsList />
      </div>
    </Provider>
    </Container>
  );
}

export default App;

const Container= styled.div`
  background-image: url('https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
.heading{
font-size: 70px;
  font-weight: 600;
  color: #fdfdfe;
  text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
    0px 0px 20px #b393d3;}

`;