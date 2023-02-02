import { useState } from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import TripCategory from '../TripCategory/TripCategory';

export default function ListCategories({ categories }) {
  const [checked, setChecked] = useState(null);
  const intervals = categories.length;

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
      {categories.length > 0 &&
        categories.map((item) => {
          return (
            <View key={item.id}>
              {checked === item.id ? (
                <TripCategory data={item} isActive={true} />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    console.log(`Selected ${item.category}`);
                    setChecked(item.id);
                  }}
                >
                  <TripCategory data={item} />
                </TouchableOpacity>
              )}
            </View>
          );
        })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    // height: 64,
    // width: 64,
    // backgroundColor: 'transparent',
    // backgroundColor: 'linear-gradient(95.23deg, #457CF7 0%, #375ABE 100%)',
  },
});
