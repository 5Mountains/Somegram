import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import Video from 'react-native-video';

import {IVideoPlayer} from './types';

import {styles} from './styles';
import {colors} from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const VideoPlayer = ({uri, paused}: IVideoPlayer): JSX.Element => {
  const [muted, setMuted] = useState(true);
  const iconName = muted ? 'volume-mute' : 'volume-medium';
  const [fullDuration, setFullDuration] = useState(0);
  const [fullCurrentTime, setFullCurrentTime] = useState<number>(0);
  const toggleMuted = () => {
    setMuted(value => !value);
  };

  const onLoad = ({duration}: {duration: number}) => {
    setFullDuration(duration);
  };
  const onProgress = ({currentTime}: {currentTime: number}) => {
    setFullCurrentTime(currentTime);
  };
  const getCurrentTimePercentage = () => {
    if (fullCurrentTime > 0) {
      return fullCurrentTime / fullDuration;
    }
    return 0;
  };

  const flexCompleted = (getCurrentTimePercentage() * 10).toFixed();
  const flexRemaining = ((1 - getCurrentTimePercentage()) * 10).toFixed();

  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="contain"
        repeat
        muted={muted}
        paused={paused}
        onLoad={onLoad}
        onProgress={onProgress}
      />

      <View style={styles.timeContainer}>
        <Text style={styles.text}>Completed: {flexCompleted} s</Text>
        <Text style={styles.text}>Remain: {flexRemaining} s</Text>
      </View>

      <Pressable onPress={toggleMuted} style={styles.muteButton}>
        <Ionicons name={iconName} size={14} color={colors.white} />
      </Pressable>
    </View>
  );
};
