import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ViewabilityConfig,
} from 'react-native';
import {DoublePress} from '../DoublePress';
import {styles} from './styles';
import {ICarousel, IOnViewableItemsChanged, IRenderItem} from './types';

export const Carousel = ({
  images,
  onDoublePress = () => {},
}: ICarousel): JSX.Element => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: IOnViewableItemsChanged) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  const renderItem = ({item}: IRenderItem) => (
    <DoublePress onDoublePress={onDoublePress}>
      <Image source={{uri: item}} style={styles({width}).image} />
    </DoublePress>
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles({}).dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index.toString()}
            style={styles({activeImageIndex, index}).dot}
          />
        ))}
      </View>
    </View>
  );
};
