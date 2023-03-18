import { tripsRef } from '../firebase/config';
import { doc, deleteDoc } from "firebase/firestore";

export const removeTrip = async (id) => {
    try {
        const trip = await deleteDoc(doc(tripsRef, id))
        console.log('Document successfully deleted!');
        console.log(`Document ${id} successfully deleted!`);
        // return trip;
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}
