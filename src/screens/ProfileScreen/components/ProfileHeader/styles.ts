import {StyleSheet} from 'react-native';
import {colors} from '../../../../theme/colors';
import {size, weight} from '../../../../theme/fonts';

export const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: size.md,
    fontWeight: weight.bold,
    color: colors.black,
  },
  name: {
    fontWeight: weight.semi,
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
