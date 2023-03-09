import {
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';

const { width } = Dimensions.get('screen');

export default function TripItem({ trip }) {
  const { id, owner, place, image, rating } = trip;

  const handleFavoriteBtn = () => {
    console.log(`Trip with id: ${id} added to favorite`);
  };

  const handleDetailsBtn = () => {
    // Navigate to trip details screen
    console.log(`Get details of the trip with id: ${id}`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <TouchableOpacity style={styles.heart} onPress={handleFavoriteBtn}>
        <Ionicons name="ios-heart" size={20} color="white" />
      </TouchableOpacity>
      <View style={styles.card}>
        <Image style={styles.avatar} source={{ uri: owner.avatar }} />
        <View style={styles.ratingFlex}>
          <AntDesign style={styles.star} name="star" size={15} color="gold" />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <View style={styles.details}>
          <View>
            <Text style={styles.owner}>{owner.name}</Text>
            <Text style={styles.place}>{place}</Text>
          </View>
          <ButtonRoundBlue
            title={<AntDesign name="arrowright" size={20} color="white" />}
            width={40}
            height={40}
            click={handleDetailsBtn}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: width * 0.7,
    position: 'relative',
    width: 261,
    height: 318,
    overflow: 'hidden',
    borderRadius: 30,
    marginRight: 20,
    // marginLeft: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 316,
  },
  heart: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 20,
    height: 20,
    marginBottom: 'auto',
    marginTop: 'auto',
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
  star: {
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
  place: {
    marginTop: 8,
    fontSize: 12,
    color: '#848689',
    lineHeight: 12,
  },
});
