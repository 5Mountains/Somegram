import React from 'react';
import {FlatList} from 'react-native';
import {FeedPost} from '../../components/FeedPost/';

import posts from '../../assets/data/posts.json';

export const HomeScreen = (): JSX.Element => (
  <FlatList
    data={posts}
    renderItem={({item}) => <FeedPost post={item} />}
    showsVerticalScrollIndicator={false}
  />
);
