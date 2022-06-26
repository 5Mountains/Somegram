import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../../theme/colors';
import {IComment} from '../../../types/models';
import {styles} from './styles';

interface ICommentProps {
  comment: IComment;
}

export const Comment = ({comment}: ICommentProps): JSX.Element => (
  <View style={styles.comment}>
    <Text style={styles.commentText}>
      <Text style={styles.bold}>{comment.user.username}</Text> {comment.comment}
    </Text>
    <AntDesign
      name={'hearto'}
      size={14}
      style={styles.icon}
      color={colors.black}
    />
  </View>
);
