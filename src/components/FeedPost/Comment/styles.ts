import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {weight} from '../../../theme/fonts';
export const styles = StyleSheet.create({
  bold: {
    fontWeight: weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    color: colors.black,
  },
  icon: {
    marginHorizontal: 5,
  },
});
