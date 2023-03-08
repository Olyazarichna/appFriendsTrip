import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import TripCategory from '../TripCategory/TripCategory';

export default function ListCategories({ categories }) {
  const [checked, setChecked] = useState(null);

  return (
    <>
      {categories.length > 0 && (
        <FlatList
          style={{ paddingLeft: 25 }}
          contentContainerStyle={{ paddingRight: 25 }}
          data={categories}
          renderItem={({ item }) => {
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
          }}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'center'}
          snapToInterval={0}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
