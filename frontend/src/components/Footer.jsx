import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
  Room,
  Phone,
  Mail,
} from '@material-ui/icons';
import styled from 'styled-components';
import React from 'react';

const Footer = () => {
  return (
    <Contaniner>
      <Left>
        <Logo>Kyūka</Logo>
        <LinksDes>FIND US ON:</LinksDes>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="1DA1F2">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="FF0000">
            <YouTube />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
        <LinksDes> © 2022 Lee Or Shmuel. All rights reserved</LinksDes>
      </Left>
      <Center>
        <Title>Links:</Title>
        <List>
          <ListItem>About</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Moisturizers</ListItem>
          <ListItem>Eye Care</ListItem>
          <ListItem>Masks</ListItem>
          <ListItem>Lip Balms</ListItem>
          <ListItem>Sunscreen</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact us:</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          62 Example st. tower B floor 2 Tel Aviv 67897
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          Phone: +972-12-3456789
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: '10px' }} />
          Email: contact@kyuka.co.il
        </ContactItem>
      </Right>
    </Contaniner>
  );
};

const Contaniner = styled.div`
  display: flex;
  background-color: #f2eeeb;
  padding: 20px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`;

const Logo = styled.h1`
  margin: 0;
`;

const LinksDes = styled.h5``;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export default Footer;
