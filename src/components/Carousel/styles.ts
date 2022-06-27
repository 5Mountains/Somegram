import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
export const styles = ({
  width,
  activeImageIndex,
  index,
}: {
  width?: number;
  activeImageIndex?: number;
  index?: number;
}) =>
  StyleSheet.create({
    image: {width, aspectRatio: 1},
    dotsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    dot: {
      width: 10,
      aspectRatio: 1,
      borderRadius: 5,
      backgroundColor:
        activeImageIndex === index ? colors.accent : colors.white,
      margin: 10,
      marginVertical: 5,
    },
  });
