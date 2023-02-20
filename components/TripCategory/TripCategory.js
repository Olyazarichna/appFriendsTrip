import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TripCategory({ data, isActive = false }) {
  return (
    <>
      {isActive ? (
        <LinearGradient
          style={styles.button}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 0.5 }}
          colors={['rgb(69, 124, 247)', 'rgb(55, 90, 190)']}
        >
          <Text style={styles.active}> {data.category}</Text>
        </LinearGradient>
      ) : (
        <Text style={[styles.button, styles.inactive]}> {data.category}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 18,
    paddingRight: 36,
    paddingBottom: 18,
    paddingLeft: 36,
    marginRight: 8,
    borderRadius: 20,
  },
  active: {
    color: '#fff',
    fontSize: 14,
    fontWeight: "500",
  },
  inactive: {
    backgroundColor: '#fff',
    color: '#BEC0C7',
    fontSize: 14,
    fontWeight: "500",
  },
});
