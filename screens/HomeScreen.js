import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Body, Title, Form, Item, Input, Label, Button } from 'native-base';

import * as firebase from "firebase";

export default class HomeScreen extends React.Component {

 
    constructor(props) {
        super(props);
        this.state = {
          user : "loading",
         
        }
    
      }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {

        this.setState({user : user.email});
      } else {
        this.setState({user:null});
      }
    });
  }

  

  render() {



    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Home screen</Title>
          </Body>
        </Header>
        <Content>
          
            <Text>User is {this.state.user}</Text>

           
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  buttons: {
    margin: 10
  }
});
