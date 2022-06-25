import React from 'react';
import {Image, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {colors} from '../../theme/colors';

export const FeedPost = (): JSX.Element => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>some user name</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      <View>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
          }}
          style={styles.image}
        />
      </View>

      {/* Content */}
      <View />

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
          Licked by <Text style={styles.bold}>some user</Text> and
          <Text style={styles.bold}>66 others</Text>
        </Text>
        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>Some user</Text> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Porro vel temporibus alias placeat eos
          quis fugit eligendi quae magni totam, similique atque, cumque rem
          omnis!
        </Text>
        {/* Comments */}
        <Text>View all 16 comments...</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>Some user</Text> Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </Text>
          <AntDesign
            name={'hearto'}
            size={14}
            style={styles.iconLeft}
            color={colors.black}
          />
        </View>
        {/* Posted date */}
        <Text>15 July, 2022</Text>
      </View>
    </View>
  );
};
