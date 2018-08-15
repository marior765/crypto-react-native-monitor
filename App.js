import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Item from './src/components/Item';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h}>Cryptocurrency App</Text>
        <View  style={styles.scroll}>
          <Item />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  scroll: {
    marginTop: 80,
    width: '100%'
  },
  h: {
    position: 'absolute',
    left: '28%',
    top: '5%',
    fontWeight: 'bold',
    fontSize: 18
  }
});
