import {
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
  getDoc,
} from 'firebase/firestore';

import { tripsRef } from '../firebase/config';

const PAGE_LIMIT = 4;

export const getTrips = async lastVisible => {
  try {
    // Створюємо запит для отримання документів відсортованих за датою створення
    // з пагінацією
    let q = query(tripsRef, orderBy('createdAt', 'desc'), limit(PAGE_LIMIT));
    if (lastVisible) {
      // Додатково встановлюємо точку з якої починати пагінацію
      q = query(q, startAfter(lastVisible));
    }

    // Отримуємо snapshot документів за запитом
    const snapshot = await getDocs(q);

    // Отримуємо масив документів з додатковою інформацією про власника
    // посилання на якого міститься в документі
    const trips = await Promise.all(
      snapshot.docs.map(async doc => {
        try {
          // Отримуємо дані документа та додаємо до них його id
          const trip = { id: doc.id, ...doc.data() };
          // Отримуємо дані власника
          const ownerRef = trip.owner;
          const ownerDoc = await getDoc(ownerRef);
          // Додаємо дані власника до об'єкту документа
          trip.owner = ownerDoc.data();
          return trip;
        } catch (error) {
          console.log(error);
        }
      })
    );

    // Отримуємо останній документ зі списку документів з snapshot
    // для встановлення точки з якої починати наступну пагінацію
    const newLastVisible = snapshot.docs[snapshot.docs.length - 1];

    return { trips, lastVisible: newLastVisible };
  } catch (error) {
    console.log(error);
  }
};
