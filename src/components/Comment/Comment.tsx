import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../theme/colors';
import {styles} from './styles';
import {ICommentProps} from './types';

export const Comment = ({
  comment,
  includeDetails = false,
}: ICommentProps): JSX.Element => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(value => !value);
  };
  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image style={styles.avatar} source={{uri: comment.user.image}} />
      )}

      <View style={styles.textContainer}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>

      <Pressable onPress={toggleLike} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};
