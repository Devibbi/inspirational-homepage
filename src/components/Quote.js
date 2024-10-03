import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../redux/reducers';
import styled from 'styled-components';
const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.app.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  if (!quote) {
    return <div>Loading quote...</div>;
  }

  if (quote.status === 'loading') {
    return <div>Loading quote...</div>;
  }

  if (quote.status === 'failed') {
    return <div>Error fetching quote</div>;
  }

  return (
    <Container>
    <div>
      {quote.data && (
        <blockquote>
          <p>"{quote.data.quote}"</p>
          <footer>- {quote.data.author}</footer>
        </blockquote>
      )}
    </div>
    </Container>
  );
};

export default Quote;



const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;


p
 { font-size: 1.5rem;
  font-style: italic;
  color: #333;}


footer
  {font-size: 1.2rem;
  margin-top: 10px;
  color: #666;}
`;