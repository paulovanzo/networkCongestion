import React from 'react';
import { useState } from 'react';

import { CgProfile } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

import styled from 'styled-components';

interface QuestionBox {
  userName: string;
  title: string;
  text: string;
}

const BoxContainer = styled.div`
  background-color: #ede7d5;
  border-radius: 16px;
  max-width: 80%;
  padding: 2rem;
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
  width: 50%;
  align-items: center;
`

const Title = styled.h1`
  font-size: 2rem;
  min-width: 200px;
  color: #545454;
`

const Text = styled.p`
  font-size: 1rem;
  text-align: justify;
  color: #545454;
`

const SpanImage = styled.span`
  align-items: center;
`

const Button = styled.button`
  border: none;
  box-shadow: 0 0 0 2px #545454;
  border-radius: 24px;
  align-items: center;
  cursor: pointer;
  background-color: #8cbfaf;
`

const SpanVotes = styled.span`
  display: flex;
  padding: 1.5rem;
  font-size: 1rem;
  color: #545454;
`

const OptionsVote = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 1rem;
  justify-content: space-around;
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 1rem;
  justify-content: flex-start;
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
            <CgProfile size={50}/>
          </UserImage>
          <Text>{userName}</Text>
        </UserArea>
        <Title>{title}</Title>
      </BoxHeader>
      <Text>{text}</Text>
      <Options>
        <OptionsVote>
          <Button onClick={handleUpvote}>
            <SpanImage><FaArrowUp size={24}/></SpanImage>
          </Button>
          <SpanVotes>{voteDifference}</SpanVotes>
          <Button onClick={handleDownvote}>
            <SpanImage><FaArrowDown size={24}/></SpanImage>
          </Button>
        </OptionsVote>
      </Options>
    </BoxContainer>
  );
};

export default QuestionBox;
