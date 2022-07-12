import {StyleSheet} from 'react-native';
import {colors} from '../../../../theme/colors';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  label: {
    width: 90,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    padding: 5,
    borderBottomWidth: 1,
  },
  error: {
    color: colors.accent,
  },
});
