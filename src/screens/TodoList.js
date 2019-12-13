import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoComponent from '../components/TodoComponent';
import DialogInput from 'react-native-dialog-input';

import { db } from '../config';
let todosRef = db.collection('todos');
let match = '';

export default class TodoList extends Component {
  state = {
    todos: [],
    isDialogVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  refreshList() {
    let allTodos = [];

    todosRef.get()
      .then(snapshot => {
        snapshot.forEach((doc) => {
          allTodos.push(doc.data())
        });
        this.setState({
          todos: allTodos
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }

  componentDidMount() {
    let allTodos = [];

    todosRef.get()
      .then(snapshot => {
        snapshot.forEach((doc) => {
          allTodos.push(doc.data())
        });
        this.setState({
          todos: allTodos
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }

  delete(todo) {
    let deleteDoc = todosRef.doc(todo.id).delete();

    this.setState(prevState => ({
      todos: prevState.todos.filter(el => el != todo)
    }))
  }

  edit(todo) {
    console.log(todo)
    match = todo
    this.showDialog(true)
  };

  showDialog(boolean) {
    this.setState({ isDialogVisible: boolean });
  }

  sendInput(inputText) {
    let updateDoc = todosRef.doc(match.id).update({
      name: inputText
    })
    this.showDialog(false);
    this.refreshList();
  }

  render() {
    return (
      <View style={styles.container}>
        <DialogInput isDialogVisible={this.state.isDialogVisible}
          title={"Edit This Todo"}
          message={"Type Your New Todo Below"}
          hintInput={"I have todo..."}
          submitInput={(inputText) => { this.sendInput(inputText) }}
          closeDialog={() => { this.showDialog(false) }}>
        </DialogInput>

        {this.state.todos.length > 0 ? (
          <TodoComponent todos={this.state.todos} _handleDelete={this.delete.bind(this)} _handleEdit={this.edit.bind(this)} />
        ) : (
            <Text style={styles.noTodos}>No todos</Text>
          )}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#202616'
  },

  noTodos: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#eee'
  },

  modal: {
    height: 50,
    backgroundColor: 'green'
  }
});