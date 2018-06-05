import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class FlatListBasics extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never', bottom: 'always' }}>
        <View />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
