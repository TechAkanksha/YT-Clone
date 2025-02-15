import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
   width: 360px;
   margin-bottom: ${(props)=>props.type === "sm" ? "10px" : "45px"};
   cursor: pointer;
   display: ${(props)=>props.type === "sm" && "flex"};
`;

const Image = styled.img`
   width: 100%;
   height: ${(props)=>props.type === "sm" ? "100px" : "202px" };
   background-color: #999;
`;

const Details = styled.div`
   display: flex;
   margin-top: 16px;
   gap: 12px;
`;

const ChannelImage = styled.img`
   width: 36px;
   height: 36px;
   border-radius: 50%;
   background-color: #999;
`;

const Texts = styled.div``;
const Title = styled.h1`
   font-size:16px;  
   font-weight: 500;
   color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
   font-size: 14px;
   color: ${({ theme }) => theme.textSoft};
   margin: 9px 0px;
`;
const Info = styled.div`
   font-size: 14px;
   color: ${({ theme }) => theme.textSoft};
`;

const Card = ( {type} ) => {
  return (
   <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container type={type}>
      <Image type={type} src="./img/wallpaper.jpg" />
      <Details type={type} >
         <ChannelImage src=""/>
         <Texts>
            <Title>Test Video</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info>660,908 views - 1 day ago</Info>
         </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card
