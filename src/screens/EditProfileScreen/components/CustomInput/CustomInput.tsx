import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {ICustomInput} from './types';
import {styles} from './styles';
import {Controller} from 'react-hook-form';
import {colors} from '../../../../theme/colors';

export const CustomInput = ({
  label,
  placeholder,
  multiline = false,
  name,
  control,
  rules = {},
}: ICustomInput): JSX.Element => {
  return (
    <Controller
      {...{name, control, rules}}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => {
        const errorStyle = {borderColor: error ? colors.accent : colors.border};
        return (
          <View style={styles.root}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                {...{placeholder, multiline, onBlur, value}}
                onChangeText={onChange}
                style={[styles.input, errorStyle]}
              />
              {error && (
                <Text style={styles.error}>{error.message || 'Error'}</Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};
