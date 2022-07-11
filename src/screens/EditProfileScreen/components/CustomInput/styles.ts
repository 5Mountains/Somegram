import {StyleSheet} from 'react-native';

import {colors} from '../../../../theme/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  label: {
    width: 90,
  },
  input: {
    flex: 1,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
});
