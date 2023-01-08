import { Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export default function ListTripItem({ data }) {
  const { owner, destination, date, comment } = data;

  const getRGB = () => {
    const getNum = () => Math.round(Math.random() * 255);
    return [getNum(), getNum(), getNum()].join(',');
  };
  return (
    <View
      style={{
        backgroundColor: `rgb(${getRGB()})`,
        width: width * 0.85,
        borderWidth: 1,
        borderColor: 'tomato',
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
      }}
    >
      <Text style={{ color: 'royalblue' }}>{destination}</Text>
      <Text>{date}</Text>
      <Text>{owner}</Text>
      <Text>{comment}</Text>
    </View>
  );
}
