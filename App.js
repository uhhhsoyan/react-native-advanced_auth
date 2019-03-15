import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAL1XOH16cLYdQMaaQxxB2TtIbj8y5l4hw",
      authDomain: "one-time-password-e5298.firebaseapp.com",
      databaseURL: "https://one-time-password-e5298.firebaseio.com",
      projectId: "one-time-password-e5298",
      storageBucket: "one-time-password-e5298.appspot.com",
      messagingSenderId: "184929098308"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
