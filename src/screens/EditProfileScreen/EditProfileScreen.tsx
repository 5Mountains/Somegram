import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {CustomInput} from './components/CustomInput';
import {styles} from './styles';

import user from '../../assets/data/user.json';

export const EditProfileScreen = (): JSX.Element => {
  const onChange = () => {
    console.log('onChange');
  };
  const onSubmit = () => {
    console.log('onSubmit');
  };
  return (
    <View style={styles.root}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Pressable onPress={onChange}>
        <Text style={styles.button}>Change Profile Photo</Text>
      </Pressable>

      <CustomInput label="Name" placeholder="Name" />
      <CustomInput label="UserName" placeholder="UserName" />
      <CustomInput label="Website" placeholder="Website" />
      <CustomInput label="Bio" placeholder="Bio" multiline />

      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Submit</Text>
      </Pressable>
    </View>
  );
};
