import { View, Image, Text } from "react-native-web"

export default function TripDetails({ trip }) {
    console.log('tripIn', trip)

    return (
        <View>
            <Text>{trip.country}</Text>
            {/* {trip ? (
               
            ) : (<Text>country</Text>)} */}
        </View>
    )
}