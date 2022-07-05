import React from 'react';
import {Pressable} from 'react-native';
import {IDoublePress} from './types';

export const DoublePress = ({
  onDoublePress = () => {},
  children,
}: IDoublePress): JSX.Element => {
  let lastTap = 0;

  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }

    lastTap = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};
