import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hello from Somegram app</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
