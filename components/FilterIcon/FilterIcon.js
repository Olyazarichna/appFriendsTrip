import { View, StyleSheet } from 'react-native';

export default function FilterIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.round}></View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.line}></View>
        <View style={styles.round}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 16,
    height: 13,
    justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  round: {
    backgroundColor: '#ffffff',
    width: 5,
    height: 5,
    borderRadius: 50,
  },
  line: {
    backgroundColor: '#ffffff',
    width: 10,
    height: 3,
    borderRadius: 50,
  },
});
