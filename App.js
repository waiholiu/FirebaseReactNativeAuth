import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Body, Title, Form, Item, Input, Label, Button } from 'native-base';

import * as firebase from "firebase";



var config = {
  apiKey: "AIzaSyBwD6srsoYzWSUiZaoNd4HVZHtkc-OG_8w",
  authDomain: "demoreactnative-4e037.firebaseapp.com",
  databaseURL: "https://demoreactnative-4e037.firebaseio.com",
  projectId: "demoreactnative-4e037",
  storageBucket: "demoreactnative-4e037.appspot.com",
  messagingSenderId: "114290350786"
};


firebase.initializeApp(config);


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : ""
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

  logIn(){
    let email = this.state.username;
    let password = this.state.password;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      // Handle Errors here.
      console.log(error.message);
      // ...
    });

  }

  register() {
    let email = this.state.username;
    let password = this.state.password;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      console.log(error.message);
      
      
    });

  }

  logout(){

    firebase.auth().signOut().then(function() {
      console.log('Sign-out successful.');
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {



    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Log in screen</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={username => this.setState({username : username })} />
            </Item>
            <Item floatingLabel >
              <Label>Password</Label>
              <Input onChangeText={password => this.setState({password : password })} />
            </Item>
            <Button block  style={styles.buttons} onPress={() => this.logIn()}>
              <Text>Log in</Text>
            </Button>
            <Button block  style={styles.buttons} onPress={() => this.register()}>
              <Text>Register</Text>
            </Button>
            <Text>User is {this.state.user}</Text>

            <Button block danger style={styles.buttons} onPress={() => this.logout()}>
              <Text>Logout</Text>
            </Button>
          </Form>
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
