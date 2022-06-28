import React, {useRef, useState} from 'react';
import {FlatList, ViewabilityConfig, ViewToken} from 'react-native';
import {FeedPost} from '../../components/FeedPost/';

import posts from '../../assets/data/posts.json';
import {IPost} from '../../types/models';

export const HomeScreen = (): JSX.Element => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  const renderItem = ({item}: {item: IPost}) => (
    <FeedPost post={item} isVisible={activePostId === item.id} />
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};
