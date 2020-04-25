import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import 
{ 
  Container,
  Detail,
  Img,
  Title,
  Description
 }
from './styles';

import img13 from '../../assets/13.png'

export default function Banner() {
  return (
    <Container>

      <Detail>
        <Title> Cobre um amigo</Title>
        <Description> 
          Mantenha suas parcerias em dia, use o Picpay para fazer suas cobranças
        </Description>
      </Detail>

      <Img source={img13} />
      
    </Container>
  );
}
