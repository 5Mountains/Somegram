import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {colors} from '../../theme/colors';
import {Comment} from '../Comment';
import {IPost} from '../../types/models';
import {DoublePress} from '../DoublePress';
import {Carousel} from '../Carousel';

interface IFeedPostProps {
  post: IPost;
}

export const FeedPost = ({post}: IFeedPostProps): JSX.Element => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isPostLicked, setIsPostLicked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(value => !value);
  };
  const togglePostLicked = () => {
    setIsPostLicked(value => !value);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePress onDoublePress={togglePostLicked}>
        <Image source={{uri: post.image}} style={styles.image} />
      </DoublePress>
    );
  } else if (post.images) {
    content = (
      <Carousel onDoublePress={togglePostLicked} images={post.images} />
    );
  }

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
      {content}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={togglePostLicked}>
            <AntDesign
              name={isPostLicked ? 'heart' : 'hearto'}
              size={24}
              style={styles.iconLeft}
              color={isPostLicked ? colors.accent : colors.black}
            />
          </Pressable>
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
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
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
