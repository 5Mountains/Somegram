import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {weight} from '../../theme/fonts';
export const styles = StyleSheet.create({
  bold: {
    fontWeight: weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    lineHeight: 18,
  },
  icon: {
    marginHorizontal: 5,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
  },
  textContainer: {
    flex: 1,
  },
  footerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
    color: colors.grey,
  },
});
