import { Text, View } from 'react-native';

export const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 36 }}>Loading...</Text>
    </View>
  );
};
