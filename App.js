import React, { Component } from 'react';
import { View, Fragment, Text, StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';

import AddTodo from './src/screens/AddTodo';
import TodoList from './src/screens/TodoList';

const AppNavigator = createStackNavigator(
  {
    Home,
    AddTodo,
    TodoList
  },
  {
    initialRouteName: 'Home'
  },
);

const AppContainer = createAppContainer(AppNavigator);

var FBLoginButton = require('./FBLoginButton');

export default class App extends Component {
  state = {
    loggedIn: false
  }


  authHandler = (authBooleanValue) => {
    this.setState({
      loggedIn: authBooleanValue
    });
  }

  render() {
    return (
      <>

        {this.state.loggedIn ? (
          <AppContainer style={{ backgroundColor: '#f23657' }} />
        ) : (
            <View style={styles.container}>
              <View style={styles.headerContainer}>
                <Text style={styles.header}>Todo App </Text>
                <FBLoginButton authHandler={this.authHandler} />


              </View>
              <StatusBar barStyle="light-content" />

            </View>
          )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202616',
  },

  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E4A2B',
    padding: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  header: {
    fontSize: 25,
    marginBottom: 30,
    textAlign: 'center',
    color: "#eee"
  }
});
