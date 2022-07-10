import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {ICustomInput} from './types';
import {styles} from './styles';

export const CustomInput = ({
  label,
  placeholder,
  multiline = false,
}: ICustomInput): JSX.Element => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput {...{placeholder, multiline}} style={styles.input} />
  </View>
);
