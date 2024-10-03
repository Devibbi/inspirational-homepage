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
        <h1>Inspirational Homepage</h1>
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

`;