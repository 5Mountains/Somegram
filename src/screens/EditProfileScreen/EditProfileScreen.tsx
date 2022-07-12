import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {launchImageLibrary, Asset} from 'react-native-image-picker';
import {useForm} from 'react-hook-form';

import {CustomInput} from './components/CustomInput';
import {IEditableUser} from './components/CustomInput/types';
import {styles} from './styles';

import user from '../../assets/data/user.json';
import {RULES} from './utils';

export const EditProfileScreen = (): JSX.Element => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);
  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.image,
      bio: user.bio,
    },
  });

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  const onSubmit = (data: IEditableUser) => {
    console.log('onSubmit', data);
  };

  return (
    <View style={styles.root}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Pressable onPress={onChangePhoto}>
        <Text style={styles.button}>Change Profile Photo</Text>
      </Pressable>

      <CustomInput
        control={control}
        name="name"
        label="Name"
        placeholder="Type your Name"
        rules={RULES.name}
      />
      <CustomInput
        control={control}
        name="username"
        label="UserName"
        placeholder="Type your UserName"
        rules={RULES.userName}
      />
      <CustomInput
        control={control}
        name="website"
        label="Website"
        placeholder="Type your Website"
        rules={RULES.website}
      />
      <CustomInput
        control={control}
        name="bio"
        label="Bio"
        placeholder="Type your Bio"
        rules={RULES.bio}
        multiline
      />

      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text style={styles.button}>Submit</Text>
      </Pressable>
    </View>
  );
};
