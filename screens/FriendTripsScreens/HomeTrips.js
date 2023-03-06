import { useState, useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import FilterIcon from '../../components/FilterIcon/FilterIcon';
import ListTrips from '../../components/ListTrips/ListTrips';
import ListCategories from '../../components/ListCategories/ListCategories';
import categories from '../../hardcodedData/tripCategories';
import variables from '../../styles/utils/variables';
import { getTrips } from '../../services/getTrips';

export default function HomeTrips() {
  const [trips, setTrips] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { trips: newTrips, lastVisible: newLastVisible } = await getTrips();
      setTrips(newTrips);
      setLastVisible(newLastVisible);
    }
    fetchData();
  }, []);

  const loadMore = async () => {
    const { trips: newTrips, lastVisible: newLastVisible } = await getTrips(
      lastVisible
    );
    setTrips(trips => [...trips, ...newTrips]);
    setLastVisible(newLastVisible);
  };

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
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={handleSearchPress}
          >
            <Ionicons
              name="ios-search"
              size={20}
              color={'rgba(28, 79, 165, 0.07)'}
            />
          </TouchableOpacity>
          <TextInput style={styles.searchInput} placeholder="Search Trip.." />
        </View>
        <LinearGradient
          style={styles.button}
          colors={[variables.gradColorOne, variables.gradColorTwo]}
        >
          <TouchableOpacity style={styles.button} onPress={handleFilterPress}>
            <FilterIcon />
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.list}>
        <Text style={styles.subTitle}>Categories</Text>
        <View style={styles.categories}>
          <ListCategories categories={categories} />
        </View>
      </View>
      <View style={[styles.list, styles.trips]}>
        <ListTrips trips={trips} />
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
  categories: {
    marginTop: 24,
  },
  trips: {
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  list: {
    marginTop: 20,
    marginLeft: 25,
  },
});
