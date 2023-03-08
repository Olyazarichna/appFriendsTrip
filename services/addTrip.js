import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Toast from "react-native-root-toast";
const auth = getAuth();
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const addTrip = async ({ trip }) => {
    console.log("trip", trip);
    onAuthStateChanged(auth, async (user) => {
        try {
            const docRef = await addDoc(collection(db, "trips"), {
                place: trip.place,
                date: trip.date,
                detailsAboutCompanion: trip.personDetails,
                detailsAboutTrip: trip.tripDetails,
                duration: trip.duration,
                image: trip.image,
                maxAge: 38,
                minAge: 28,
                owner: user.uid,
            });
            Toast.show("Trip successfully added", {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
                backgroundColor: '#375ABE',
                textColor: "#fff",
                hideOnPress: true,
            });
        } catch (e) {
            Toast.show("Error adding document: ", e, {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
                backgroundColor: 'red',
                textColor: "#fff",
                hideOnPress: true,
            });
        }
    });
};
