import { tripsRef } from '../firebase/config';
import { doc, deleteDoc } from "firebase/firestore";

export const removeTrip = async (id) => {
    try {
        await deleteDoc(doc(tripsRef, id))
        console.log(`Document ${id} successfully deleted!`);
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}
