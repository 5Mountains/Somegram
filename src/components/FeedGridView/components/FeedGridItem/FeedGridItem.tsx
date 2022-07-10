import React from 'react';
import {View, Image} from 'react-native';
import {IPost} from '../../../../types/models';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';
import {colors} from '../../../../theme/colors';

export const FeedGridItem = ({item}: {item: IPost}): JSX.Element => {
  const uri = item.image || item.images?.[0];

  return (
    <View style={styles.root}>
      <Image source={{uri}} style={styles.image} />
      {item.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={styles.icon}
        />
      )}
    </View>
  );
};
