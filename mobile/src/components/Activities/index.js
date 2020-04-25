import React from 'react';
import { View } from 'react-native';

import 
{ Container,
   Header,
   Title,
   Card,
   CardHeader,
   Avatar,
   Description,
   Bold,
   CardBody,
   UserName
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


      </Card>
    </Container>
  );
}
