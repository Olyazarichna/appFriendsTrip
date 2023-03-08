import { FlatList } from 'react-native';

import TripItem from '../TripItem/TripItem';

export default function ListTrips({ trips, handleLoadMore }) {
  return (
    <>
      {trips.length > 0 && (
        <FlatList
          style={{ paddingLeft: 25 }}
          contentContainerStyle={{ paddingRight: 25 }}
          data={trips}
          renderItem={({ item }) => <TripItem trip={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'center'}
          snapToInterval={0}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.9}
        />
      )}
    </>
  );
}
