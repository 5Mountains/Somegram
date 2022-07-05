import React from 'react';
import {View, FlatList} from 'react-native';
import {Comment} from '../../components/Comment';

import comments from '../../assets/data/comments.json';
import {ICommentsScreenPost} from './types';
import {styles} from './styles';

export const CommentsScreen = () => {
  const renderItem = ({item}: {item: ICommentsScreenPost}) => (
    <Comment comment={item} includeDetails={true} />
  );
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={renderItem}
        style={styles.container}
      />
    </View>
  );
};
