import {
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import star from '../../assets/images/star.png';
import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';

const { width } = Dimensions.get('screen');

export default function ListTripItem({ data }) {
  const { owner, destination, date, comment, avatar, countryImg, rating } =
    data;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={countryImg}
        resizeMode="cover"
        style={styles.countryImg}
      />
      <View style={styles.card}>
        <Image style={styles.avatar} source={avatar} />
        <View style={styles.ratingFlex}>
          <Image style={styles.svg} source={star} />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <View style={styles.details}>
          <View>
            <Text style={styles.owner}>{owner}</Text>
            <Text style={styles.destination}>{destination}</Text>
          </View>
          <ButtonRoundBlue />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: width * 0.7,
    width: 261,
    height: 318,
    overflow: 'hidden',
    borderRadius: 30,
    marginRight: 20,
  },
  countryImg: {
    flex: 1,
    justifyContent: 'center',
    height: 316,
  },
  card: {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 15,
    marginBottom: 15,
  },
  avatar: {
    position: 'absolute',
    top: -11,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#E3E5E8',
  },
  ratingFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  svg: {
    marginLeft: 45,
  },
  rating: {
    marginLeft: 5,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  owner: {
    marginTop: 11,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 16,
  },
  destination: {
    marginTop: 8,
    fontSize: 12,
    color: '#848689',
    lineHeight: 12,
  },
});
