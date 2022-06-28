import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 25,

    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  timeContainer: {
    width: '100%',
    backgroundColor: `${colors.black}50`,
    padding: 5,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
  },
  text: {
    color: colors.white,
    padding: 5,
  },
});
