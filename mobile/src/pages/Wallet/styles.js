import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`

export const Header = styled(LinearGradient)`
    height: 300px;
    
`

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    font-weight: bold;
    
`

export const BalanceContainer = styled.View`
    margin: 10px 0;
    flex-direction: row;
    align-items: center;
`

export const Value = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 42px;
    font-weight: 200;
`

export const Bold = styled.Text`
    font-weight: bold;
    
`
export const EyeBotton = styled.TouchableOpacity`
    margin-left: 10px;

`
export const Info = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    font-weight: bold;
    
`