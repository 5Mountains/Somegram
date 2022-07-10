import {weight} from './../../theme/fonts';
import {colors} from './../../theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    margin: 5,
    padding: 5,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
  },
  text: {
    color: colors.black,
    fontWeight: weight.semi,
  },
});
