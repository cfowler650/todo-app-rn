import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Todo App</Text>
        </View>

        <Button
          title="Add Todo"
          type="solid"
          buttonStyle={styles.button}
          onPress={() => this.props.navigation.navigate('AddTodo')}
        />

        <Button
          title="View Todos"
          type="solid"
          buttonStyle={styles.button}
          onPress={() => this.props.navigation.navigate('TodoList')} />

        <Text style={styles.divider}> </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  headerContainer: {
    margin: 20,

  },

  header: {
    fontSize: 25,
    textAlign: 'center',
    color: '#eee'
  },

  container: {
    flex: 1,
    backgroundColor: '#202616',
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingRight: 20
  },

  button: {
    backgroundColor: '#3E4A2B',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0,
    borderRadius: 8,
  }

})