import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {PostUploadScreen} from './src/screens/PostUploadScreen';

const App = (): JSX.Element => (
  <SafeAreaView style={styles.root}>
    <View style={styles.root}>
      <PostUploadScreen />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
