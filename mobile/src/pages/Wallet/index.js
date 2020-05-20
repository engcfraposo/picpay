import React from 'react';
import { Feather } from '@expo/vector-icons'

import { 

  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeBotton,
  Info,

} from './styles';

export default function Wallet() {
  return (
    <Wrapper> 

      <Header colors={['#52e78c','#1ab563']}>
       
        <HeaderContainer>

          <Title>Saldo PicPay</Title>

          <BalanceContainer>

            <Value>
              R$ <Bold>0,00</Bold>
            </Value>

            <EyeBotton>
              <Feather name="eye" size={28} color="#fff"/>
            </EyeBotton>
            
          </BalanceContainer>

          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>
        
        </HeaderContainer>
      
      </Header>
    
    </Wrapper>
  );
}
