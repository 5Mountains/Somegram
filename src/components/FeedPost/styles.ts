import {weight} from './../../theme/fonts';
import {colors} from './../../theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  post: {},
  header: {flexDirection: 'row', alignItems: 'center', padding: 10},
  userName: {fontWeight: weight.bold, color: colors.black},
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  threeDots: {marginLeft: 'auto'},
  image: {width: '100%', aspectRatio: 1},
  iconContainer: {flexDirection: 'row', marginBottom: 5},
  iconLeft: {marginHorizontal: 5},
  iconRight: {marginLeft: 'auto'},
  footer: {padding: 10},
  text: {color: colors.black, lineHeight: 18},
  bold: {fontWeight: weight.bold},
  comment: {flexDirection: 'row', alignItems: 'center'},
  commentText: {flex: 1, color: colors.black},
});
