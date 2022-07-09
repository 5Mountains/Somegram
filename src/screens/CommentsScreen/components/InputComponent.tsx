import React, {useState} from 'react';
import {View, Text, Image, TextInput, Pressable} from 'react-native';
import {styles} from './styles';

export const InputComponent = () => {
  const [newComment, setNewComment] = useState<string>('');
  const onPost = () => {
    console.log('sended comment --> ', newComment);
    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="write your comment..."
        style={styles.input}
        multiline
      />

      <Pressable onPress={onPost}>
        <Text style={styles.button}>POST</Text>
      </Pressable>
    </View>
  );
};
