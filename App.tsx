import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {EditProfileScreen} from './src/screens/EditProfileScreen';

const App = (): JSX.Element => (
  <SafeAreaView style={styles.root}>
    <View style={styles.root}>
      <EditProfileScreen />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
