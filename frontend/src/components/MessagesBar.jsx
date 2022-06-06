import React from 'react';
import styled from 'styled-components';

const MessagesBar = () => {
  return (
    <Container>
      <Wrapper>
        <Message>FREE SHIPPING ON ORDERS OVER 50$</Message>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 30;
  display: flex;
  background-color: #5e5e4b;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Message = styled.div`
  font-family: urbanist;
  color: #ffffff;
  letter-spacing: 1.5px;
`;

export default MessagesBar;
