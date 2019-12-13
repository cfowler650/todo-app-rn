import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TextInput, Alert } from 'react-native';

import { db } from '../config';

let todosRef = db.collection('todos');
let generateRandomIDString = () => Math.floor(Math.random() * (1000000 - 100000 + 1) + 100000).toString();

let addTodo = (todo) => {
  let randomID = generateRandomIDString();
  todosRef.doc(randomID).set({
    id: randomID,
    name: todo
  });
};

export default class AddTodo extends Component {
  state = {
    name: '',
    todos: []
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      name: e.nativeEvent.text
    });
  };

  handleSubmit = () => {
    let notEmpty = this.state.name;

    if (notEmpty) {
      addTodo(this.state.name);
      this.setState({ name: '' });
      Alert.alert('Todo saved successfully!');
    } else {
      Alert.alert('Todo can not be empty!');
    }
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>New Todo</Text>
        </View>
        <TextInput selectionColor={'green'} style={styles.todoInput} onChange={this.handleChange} value={this.state.name} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#313B22"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#202616'
  },
  
  title: {
    color: "#EEE",
    fontSize: 24,
    textAlign: 'center'
  },

  titleContainer: {
    margin: 20
  },

  todoInput: {
    height: 40,
    paddingLeft: 10,
    marginRight: 5,
    marginBottom: 10,
    fontSize: 23,
    borderBottomWidth: 1,
    borderColor: '#3E4A2B',
    borderRadius: 8,
    color: '#9FFF00',
  },

  buttonText: {
    fontSize: 18,
    color: '#EEE',
    alignSelf: 'center',
    borderColor: '#3E4A2B'
  },

  button: {
    height: 45,
    flexDirection: 'row',
    borderColor: "#3E4A2B",
    backgroundColor: '#3E4A2B',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
