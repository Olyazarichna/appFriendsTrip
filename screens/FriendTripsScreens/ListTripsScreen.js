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
} from 'react-native';

import ListTrip from '../../components/ListTrip/ListTrip';

import { tripData } from '../../hardcodedData/tripData';

export default function ListTripsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ paddingTop: 50 }}>ListTripsScreen</Text>
      <View>
        <ListTrip trips={tripData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
});
