import React from 'react';
import {View, FlatList} from 'react-native';
import {Comment} from '../../components/Comment';

import comments from '../../assets/data/comments.json';

export const CommentsScreen = () => {
  const renderItem = ({item}: any) => {
    return <Comment comment={item} includeDetails={true} />;
  };
  return (
    <View style={{padding: 10}}>
      <FlatList data={comments} renderItem={renderItem} />
    </View>
  );
};
