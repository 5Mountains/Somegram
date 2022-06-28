import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Comment} from '../../components/Comment';

import comments from '../../assets/data/comments.json';

interface ICommentsScreenPost {
  id: string;
  comment: string;
  user: {
    id: string;
    image: string;
    username: string;
  };
}

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

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
