import {
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
  getDoc,
  documentId,
} from 'firebase/firestore';

import { tripsRef, usersRef } from '../firebase/config';

const PAGE_LIMIT = 6;

export const getTrips = async lastVisible => {
  try {
    let q = query(tripsRef, orderBy('createdAt', 'desc'), limit(PAGE_LIMIT));
    if (lastVisible) {
      q = query(q, startAfter(lastVisible));
    }
    const snapshot = await getDocs(q);

    const trips = await Promise.all(
      snapshot.docs.map(async doc => {
        const trip = { id: doc.id, ...doc.data() };
        const ownerRef = trip.owner;
        const ownerDoc = await getDoc(ownerRef);
        trip.owner = ownerDoc.data();
        return trip;
      })
    );

    const newLastVisible = snapshot.docs[snapshot.docs.length - 1];

    return { trips, lastVisible: newLastVisible };
  } catch (error) {
    console.log(error);
  }
};
