import {ViewToken} from 'react-native';

export interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}

export interface IOnViewableItemsChanged {
  viewableItems: ViewToken[];
}

export interface IRenderItem {
  item: string;
}
