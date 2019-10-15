import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList, ScrollView } from 'react-native';

import { 
  SectionTitle, 
  Header, 
  SearchEmail, 
  BarSearch,
  UserAvatar, 
  Container,
  Message,
  Title,
  Author,
  Content,
  Avatar,
  Description,
  Adicionals,
  CreatedAt
} from './styles';

export default function Entrada() {
  const [value, setValue] = useState('');
  const [emails, setEmails] = useState({});
  const [star, setStar] = useState('star-border');
  const [color, setColor] = useState('#333');

  const shadowStyle = {
    shadowOpacity: 0.5,
    shadowRadius:2,
    shadowColor: '#666',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 2,
  }


  useEffect(() => {
    async function loadEmails(){
      const response = await fetch('http://5da3eb21a6593f001407a0d8.mockapi.io/api/v1/messages?_limit=5');
      const data = await response.json();
      setEmails(data);
    }
    loadEmails();
  }, [])

  function handleLike (){
    setStar(star === 'star'? 'star-border': 'star');
    setColor(color === '#333'? '#aa0': '#333');
  }

  //http(s)://5da3eb21a6593f001407a0d8.mockapi.io/api/v1/
  return (
    
    <Container>
      <ScrollView>
        <Header>
          <BarSearch style={shadowStyle}>
            
          <Icon name="menu" size={25}  color="#666" />
          <SearchEmail 
             onChangeText={text => setValue(text)}
             value={value}
             placeholder="Procurar e-mail"
          />
          
          <UserAvatar>
              R
          </UserAvatar>
            </BarSearch>
        </Header>
        <SectionTitle>CAIXA DE ENTRADA</SectionTitle>

        <FlatList
          data={emails}
          keyExtractor = {message => String(message.id)}
          renderItem={ ({ item } ) => (
            <Message>
              <Avatar color={item.color} > {item.name.slice(0, 1)} </Avatar>
              <Content>
              <Author>{item.name}</Author>
                <Title>{item.title}</Title>
                <Description>{item.Menssage.slice(0, 32)}...</Description>
              </Content>

              <Adicionals onClick={handleLike}>
                <CreatedAt>11 de {item.createdAt.slice(0, 3)}</CreatedAt>
                <Icon name={star} size={25} color={color} style={{textAlign: 'right'}} />
              </Adicionals>
            </Message>
          )}
        />
      </ScrollView>
    </Container>
    
  );
}
