import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import ListTrip from '../../components/ListTrip/ListTrip';

import { tripData } from '../../hardcodedData/tripData';
import FilterIcon from '../../components/FilterIcon/FilterIcon';

export default function HomeTrips() {
  const intervals = tripData.length;

  const handleFilterPress = () => {
    console.log('Open filter settings.');
  };

  const handleSearchPress = () => {
    console.log('Send search query.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Find your trip</Text>
        <Text style={styles.title}>TRVL</Text>
      </View>
      <View style={styles.search}>
        <View style={styles.searchContainer}>
          <Pressable style={styles.searchIcon} onPress={handleSearchPress}>
            <Ionicons
              name="ios-search"
              size={20}
              color={'rgba(28, 79, 165, 0.07)'}
            />
          </Pressable>
          <TextInput style={styles.searchInput} placeholder="Search Trip.." />
        </View>
        <LinearGradient
          style={styles.button}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 0.5 }}
          colors={['rgb(69, 124, 247)', 'rgb(55, 90, 190)']}
        >
          <Pressable style={styles.button} onPress={handleFilterPress}>
            <FilterIcon />
          </Pressable>
        </LinearGradient>
      </View>
      <View style={styles.list}>
        <ListTrip intervals={intervals} trips={tripData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.01)',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14 + Constants.statusBarHeight,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 16,
  },
  searchIcon: {
    paddingLeft: 24,
    paddingRight: 20,
  },
  searchInput: {
    flex: 1,
    height: 64,
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 64,
    width: 64,
    // backgroundColor: 'transparent',
    // backgroundColor: 'linear-gradient(95.23deg, #457CF7 0%, #375ABE 100%)',
  },
  list: {
    marginTop: 20,
    marginLeft: 25,
  },
});
