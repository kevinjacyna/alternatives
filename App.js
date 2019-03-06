import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import * as firebase from 'firebase';
import Discover from './src/components/screens/Discover';

export default class App extends React.Component {
  render() {
    return (
      <Discover />
    );
  }
}
