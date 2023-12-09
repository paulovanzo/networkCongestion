import React from 'react';
import { useState } from 'react';

import { CgProfile } from "react-icons/cg";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";

import styled from 'styled-components';

interface QuestionBox {
  userName: string;
  title: string;
  text: string;
}

const BoxContainer = styled.div`
  max-width: 80%;
`

const BoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const UserArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const UserImage = styled.span`
  width: 40px;
  align-items: center;
`

const Title = styled.h1`
  font-size: 2rem;
  min-width: 200px;
`

const Text = styled.p`
`

const SpanImage = styled.span`
  width: 40px;
  align-items: center;
`

const Button = styled.button`
  border: none;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
`

const SpanVotes = styled.span`
  display: flex;
  font-size: 1rem
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 1rem;
  justify-content: space-around;
`

const QuestionBox: React.FC<QuestionBox> = ({ userName, title, text }) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  
  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };
  
  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };
  
  const voteDifference = upvotes - downvotes;
  
  return (
    <BoxContainer>
      <BoxHeader>
        <UserArea>
          <UserImage>
            <CgProfile/>
          </UserImage>
          <p>{userName}</p>
        </UserArea>
        <Title>{title}</Title>
      </BoxHeader>
      <Text>{text}</Text>
      <Options>
        <Button onClick={handleUpvote}>
          <SpanImage><BsArrowUpCircle/></SpanImage>
        </Button>
        <SpanVotes>{voteDifference}</SpanVotes>
        <Button onClick={handleDownvote}>
          <SpanImage><BsArrowDownCircle/></SpanImage>
        </Button>
      </Options>
    </BoxContainer>
  );
};

export default QuestionBox;
