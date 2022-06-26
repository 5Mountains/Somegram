import React from 'react';
import {Image, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {colors} from '../../theme/colors';
import {Comment} from './Comment';
import {IPost} from '../../types/models';

interface IFeedPostProps {
  post: IPost;
}

export const FeedPost = ({post}: IFeedPostProps): JSX.Element => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{uri: post.user.image}} style={styles.userAvatar} />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <Image source={{uri: post.image}} style={styles.image} />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.iconLeft}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.iconLeft}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.iconLeft}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={styles.iconRight}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Licked by <Text style={styles.bold}>some user</Text> and{'  '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>

        {/* Comments */}
        <Text>View all {post.nofComments} comments...</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Posted date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};
