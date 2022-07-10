import {StyleSheet} from 'react-native';

import {colors} from '../../theme/colors';
import {size, weight} from '../../theme/fonts';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  button: {
    margin: 10,
    color: colors.primary,
    fontWeight: weight.semi,
    fontSize: size.md,
  },
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
