import { StyleSheet, View, Text, Image } from 'react-native';

export const TripDetailsInfo = ({ trip, owner }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading}>Trip Details</Text>
            <View>
                <View style={styles.imgContainer}>
                    <Image style={styles.imgDetails} source={{ uri: trip.image }} />
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.descriptionText}>
                        {`${trip.country}, ${trip.city}`}
                    </Text>
                </View>
                <View style={styles.containerDetails}>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.description}>
                            Date:<Text style={styles.text}>{trip.date}</Text>{' '}
                        </Text>
                    </View>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.description}>
                            Duration: <Text style={styles.text}>{trip.duration} days</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.description}>
                        More: <Text style={styles.text}>{trip.detailsAboutTrip}</Text>{' '}
                    </Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.description}>
                        Age:
                        <Text style={styles.text}>
                            {trip.minAge}-{trip.maxAge} years old
                        </Text>
                    </Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.description}>
                        About companion:
                        <Text style={styles.text}>{trip.detailsAboutCompanion}</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.avatarWrapper}>
                    <Image style={styles.avatarDetails} source={{ uri: owner.avatar }} />
                </View>
                <View style={styles.avatar}>
                    <Text style={styles.mainText}>{owner.name}</Text>
                    <Text style={styles.text}>Email: {owner.email}</Text>
                    <Text style={styles.text}>Phone: {owner.phone}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
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
    descriptionText: {
        fontSize: 18,
        fontWeight: '500',
    },
    description: {
        fontSize: 14,
        fontWeight: '500',
    },
    infoContainer: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
    },
    avatarWrapper: {
        borderRadius: 30,
        overflow: 'hidden',
        marginRight: 20,
    },
    avatarDetails: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
    },
    mainText: {
        fontSize: 16,
        fontWeight: '500',
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color: '#848689',
    },
});
