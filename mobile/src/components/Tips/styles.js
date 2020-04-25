import styled from 'styled-components/native'

export const ScrollContainer = styled.ScrollView `
    margin-top: 25px;
    padding: 0 16px;
    flex-direction: row;
    
`;


export const Option = styled.TouchableOpacity `
    background: ${({ bgColor }) => bgColor};
    width: 150px;
    height: 200px;
    border-radius: 8px;
    padding: 15px;
    justify-content: space-between;
    margin-right: 16px;
    
`;

export const Title = styled.Text `
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    
`;

export const Img = styled.Image `
    align-self: center;
    
`;

