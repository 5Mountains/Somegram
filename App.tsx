import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';

const App = (): JSX.Element => (
  <SafeAreaView style={styles.root}>
    <View style={styles.root}>
      <HomeScreen />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
