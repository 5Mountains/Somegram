import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {CustomInput} from './components/CustomInput';
import {styles} from './styles';
import {useForm} from 'react-hook-form';
import {IEditableUser} from './components/CustomInput/types';
import user from '../../assets/data/user.json';
import {RULES} from './utils';

export const EditProfileScreen = (): JSX.Element => {
  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.image,
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log('onSubmit', data);
  };

  return (
    <View style={styles.root}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.button}>Change Profile Photo</Text>

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
