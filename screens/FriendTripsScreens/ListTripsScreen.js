import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Pressable,
} from 'react-native';

import ListTrip from '../../components/ListTrip/ListTrip';

import { tripData } from '../../hardcodedData/tripData';

export default function ListTripsScreen() {
  const intervals = tripData.length;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Find your trip</Text>
        <Text style={styles.title}>TRVL</Text>
      </View>
      <View style={styles.search}>
        <TextInput style={styles.searchInput} placeholder="Search Trip.." />
        <Pressable style={styles.button}>
          <Text>Filter</Text>
        </Pressable>
      </View>
      <View>
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
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  searchInput: {
    flex: 1,
    height: 64,
    marginRight: 16,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 64,
    width: 64,
    backgroundColor: 'royalblue',
    // backgroundColor: 'linear-gradient(95.23deg, #457CF7 0%, #375ABE 100%)',
  },
});
