import {weight} from './../../../theme/fonts';
import {colors} from './../../../theme/colors';
import {StyleSheet} from 'react-native';
import {size} from '../../../theme/fonts';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-end',

    padding: 5,

    borderTopWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: 40,

    borderRadius: 20,
    aspectRatio: 1,
  },
  input: {
    flex: 1,

    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 50,
    marginLeft: 5,

    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 15,

    fontSize: size.s,
    fontWeight: weight.bold,
    color: colors.primary,
  },
});
