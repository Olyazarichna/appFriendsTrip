import { StyleSheet, View, Text, Image } from 'react-native';

export const TripDetailsInfo = ({ trip }) => {
    console.log('trip', trip);
    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.heading}>Trip Details</Text>
            <View>
                <View style={styles.imgContainer}>
                    <Image style={styles.imgDetails} source={{ uri: trip.image }} />
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.description}>
                        {`${trip.country}, ${trip.city}`}
                    </Text>
                </View>
                <View style={styles.containerDetails}>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.description}>Date: {trip.date}</Text>
                    </View>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.description}>
                            Duration: {trip.duration} days
                        </Text>
                    </View>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.description}>More: {trip.detailsAboutTrip} </Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.description}>
                        Age: {trip.minAge}-{trip.maxAge}years old{' '}
                    </Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.description}>
                        About companion:{trip.detailsAboutCompanion}{' '}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        marginVertical: 70,
        marginHorizontal: 30,
    },
    heading: {
        fontWeight: '600',
        fontSize: 24,
        marginBottom: 20,
    },
    imgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: 30,
        overflow: 'hidden',
    },
    imgDetails: {
        width: '100%',
        height: 318,
        resizeMode: 'cover',
    },
    infoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    containerDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    description: {
        fontSize: 14,
        fontWeight: '500',
    },
});
