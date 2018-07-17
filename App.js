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
      count: -2
    }

  }
  componentDidMount() {

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
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Password</Label>
              <Input />
            </Item>
            <Button block last style={styles.buttons}>
              <Text>Log in</Text>
            </Button>
            <Button block last style={styles.buttons}>
              <Text>Register</Text>
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
