import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import * as firebase from 'firebase';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Discover from './src/components/screens/Discover';
import Saved from './src/components/screens/Saved';

export default createBottomTabNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarLabel: 'DISCOVER',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-heart-empty" color={tintColor} size={24} />
      )
    }
  },
},{
tabBarOptions: {
  activeTintColor: 'black',
  inactiveTintColor: 'grey',
  style: { 
    backgroundColor: 'transparent',
    borderTopWidth: 0.2
  }
}
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabFont: {
      fontFamily: 'Cochin'
    }

});