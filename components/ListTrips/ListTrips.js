import { ScrollView, Text, View } from 'react-native';

import TripItem from '../TripItem/TripItem';

export default function ListTrips({ trips }) {
  const intervals = trips.length;

  return (
    <ScrollView
      style={{
        overflow: 'visible',
      }}
      horizontal={true}
      contentContainerStyle={{ width: `${100 * intervals}%` }}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}
      decelerationRate="fast"
      pagingEnabled
      snapToAlignment="start"
    >
      {trips.length > 0 &&
        trips.map((trip) => {
          return <TripItem data={trip} key={trip.id} />;
        })}
    </ScrollView>
  );
}
