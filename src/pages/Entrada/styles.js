import styled from 'styled-components/native';

export const SectionTitle = styled.Text`
  color: #666;
  font-size: 13px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 4px;
`;

export const Container = styled.View`

`;

export const Header = styled.View`
 
 align-items: center;
 justify-content: center;
 margin: 10px 0;
 width: 100%;
`;


export const BarSearch = styled.View`
  flex-direction: row;
  border: 1px solid #eee;
  border-radius: 5px;
  align-items: center;
 justify-content: space-between;
  width: 90%;
  padding:  2px 8px;  
`;



export const SearchEmail = styled.TextInput`
 padding: 12px;
 width: 80%;
 color: #222;
 font-size: 16px;
 margin-left: 5px;
`;

export const UserAvatar = styled.Text`
 background-color: #070;
 color: #fff;
 width: 30px;
 height: 30px;
 padding: 5px;
 text-align: center;
 border-radius: 20px;
 font-size: 16px;
`;

export const Message = styled.View`
  flex-direction: row;
  margin: 10px 0;
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold; 
`;

export const Author = styled.Text`
  font-size: 16px;
  font-weight: bold; 
`;

export const Avatar = styled.Text`
  background-color: ${props => props.color};
 color: #fff;
 width: 40px;
 height: 40px;
 padding: 5px;
 text-align: center;
 border-radius: 25px;
 font-size: 20px;
 margin: 15px;
`;

export const Content = styled.View`
  width: 60%;
`;

export const Description= styled.Text`

`;

export const Adicionals = styled.View`
  text-align: right;
`;

export const CreatedAt= styled.Text`
  text-align: right;
  font-weight: bold;
  font-size: 11px;

`;