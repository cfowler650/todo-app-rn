import React, { Component } from 'react';
import { View, Text, StyleSheet, ButtonProperties } from 'react-native';
import { Button } from 'react-native-elements';

export default class TodoComponent extends Component {

  _handleDelete(todo) {
    this.props._handleDelete(todo);
  }

  _handleEdit(todo) {
    this.props._handleEdit(todo);
  }

  render() {
    return (
      <View style={styles.todosList}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>My Todos</Text>
        </View>
        {this.props.todos.map((todo, index) => {
          return (
            <View style={styles.todoContainer} key={index}>
              <Text style={styles.todoText}>{todo.name}</Text>
              <View style={styles.buttonGroup}>
                <Button buttonStyle={styles.editButton} title="Edit" onPress={this._handleEdit.bind(this, todo)} />
                <Button buttonStyle={styles.deleteButton} title="Delete" onPress={this._handleDelete.bind(this, todo)} />
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todosList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  todoText: {
    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'center',
    padding: 5,
    color: '#eee'
  },

  todoContainer: {
    borderWidth: 0.5,
    padding: 20,
    backgroundColor: "#3E4A2B",
    borderRadius: 16,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5
  },

  buttonGroup: {
    justifyContent: 'center',
    flexDirection: 'row'
  },

  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },

  header: {
    fontSize: 25,
    color: '#eee'
  },

  editButton: {
    marginTop: 10,
    marginRight: 5,
    width: 150,
    backgroundColor: '#697D48'
  },

  deleteButton: {
    marginTop: 10,
    marginLeft: 5,
    width: 150,
    backgroundColor: '#697D48'
  }
});
