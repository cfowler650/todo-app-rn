import React, { Component } from 'react';
import { Button, View } from 'react-native';
import * as Facebook from 'expo-facebook';

export default class FBLoginButton extends Component {
  async logIn() {
    try {
      await Facebook.initializeAsync('569210390542865');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        alert('Logged in!', `Hi ${(await response.json()).name}!`);
        this.props.authHandler(true);
      } else {
        this.props.authHandler(false);
      }
    } catch ({ message }) {
      this.props.authHandler(false);
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <View>
        <Button title="Login with Facebook" onPress={this.logIn.bind(this)} />
      </View>
    );
  }
};

module.exports = FBLoginButton;