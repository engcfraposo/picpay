import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { Wrapper, Header, ScrollContainer, IconContainer, BalanceContainer, BalanceTitle, Balance } from './styles';

import Activities from '../../components/Activities'
import Suggestions from '../../components/Suggestions'

export default function Home() {
  return (
    <Wrapper>
      <ScrollContainer>
        <Header>
        
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 10,00</Balance>
          </BalanceContainer>

          <IconContainer>
          <AntDesign name="gift" size={25} color="#10c86e" />
          <MaterialCommunityIcons name="sale" size={25} color="#10c86e" />
          </IconContainer>
        </Header>

        <Suggestions/>
        <Activities/>
      </ScrollContainer>
    </Wrapper>
  );
}
