import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {FeedPost} from './src/components/FeedPost';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hello from Somegram app</Text>
        </View>
        <FeedPost />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
