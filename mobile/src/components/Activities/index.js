import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import 
{ 
  Container,
   Header,
   Title,
   Card,
   CardHeader,
   Avatar,
   Description,
   Bold,
   CardBody,
   UserName,
   CardFooter,
   Detail,
   Value,
   Divider,
   Date,
   Actions,
   Option,
   OptionLabel,
 }
from './styles';

import avatar from '../../assets/avatar.png'

export default function Activities() {
  return (
    <Container>
      <Header>
      <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@engcfraposo</Bold> 
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Cláudio Rapôso</UserName>
        </CardBody>

        <CardFooter>
          <Detail>
            <Value>R$ 10,00</Value>

            <Divider></Divider>

            <Feather name="lock" size={15} color="#fff" />

            <Date>há 2 anos</Date>
            
          </Detail>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={15} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <MaterialCommunityIcons name="heart-outline" size={15} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
            
          </Actions>
          
        </CardFooter>

      </Card>
    </Container>
  );
}
