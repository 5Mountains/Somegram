import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '../../components/Button';
import {styles} from './styles';

import user from '../../assets/data/user.json';

export const ProfileScreen = (): JSX.Element => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image source={{uri: user.image}} style={styles.avatar} />

        <View style={styles.textContainer}>
          <Text style={styles.text}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>198</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>298</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      <View>
        <Button
          text="Edit Profile"
          onPress={() => console.log('On Edit Profile')}
        />
        <Button />
      </View>
    </View>
  );
};
