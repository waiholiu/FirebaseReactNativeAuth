import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from "firebase";
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';

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
      username: "",
      password: ""
    }

  }

  render() {
    return (
      

        <AppStackNavigator />
      
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen

})

