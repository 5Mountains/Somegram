import React from 'react';
import {FlatList} from 'react-native';
import {FeedGridItem} from './components/FeedGridItem';

import {styles} from './styles';

import {IFeedGridView} from './types';

export const FeedGridView = ({
  data,
  ListHeaderComponent,
}: IFeedGridView): JSX.Element => (
  <FlatList
    {...{data, ListHeaderComponent}}
    renderItem={FeedGridItem}
    style={styles.root}
    numColumns={3}
    showsVerticalScrollIndicator={false}
  />
);
