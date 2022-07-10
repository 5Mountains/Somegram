import {Text, Pressable} from 'react-native';
import React from 'react';
import {IButton} from './types';
import {styles} from './styles';

export const Button = ({
  text = '',
  onPress = () => {},
}: IButton): JSX.Element => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
