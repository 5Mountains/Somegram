import React from 'react';
import {View, Text, Image, Pressable, TextInput} from 'react-native';

import {styles} from './styles';

import user from '../../assets/data/user.json';

export interface ICustomInput {
  label: string;
  placeholder: string;
  multiline?: boolean;
}

const CustomInput = ({
  label,
  placeholder,
  multiline = false,
}: ICustomInput): JSX.Element => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput {...{placeholder, multiline}} style={styles.input} />
  </View>
);

export const EditProfileScreen = () => {
  const onSubmit = () => {
    console.log('onSubmit');
  };
  return (
    <View style={styles.root}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Pressable>
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
