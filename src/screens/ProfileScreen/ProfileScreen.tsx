import React from 'react';
import {FeedGridView} from '../../components/FeedGridView';
import {ProfileHeader} from './components/ProfileHeader';

import user from '../../assets/data/user.json';

export const ProfileScreen = (): JSX.Element => (
  <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />
);
