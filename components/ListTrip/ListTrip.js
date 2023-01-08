import { ScrollView, Text, View } from 'react-native';

import ListTripItem from '../ListTripItem/ListTripItem';

export default function ListTrip({ trips, intervals }) {
  return (
    <View>
      <Text style={{ marginTop: 20 }}>List trips</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ width: `${100 * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
        snapToAlignment="center"
      >
        {trips.length > 0 &&
          trips.map((trip) => {
            return <ListTripItem data={trip} key={trip.id} />;
          })}
      </ScrollView>
    </View>
  );
}
