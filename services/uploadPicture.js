import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { resizeImage } from '../helpers/resizeImage';
import { auth, storage, tripsRef } from '../firebase/config';

/**
 *
 * @param {string} tripId ID документа в колекції trips
 * @param {string} pictureUri URI зображення для завантаження в БД
 * @returns true у випадку успішної операції або false у випадку винекнення помилки
 */
export const uploadPicture = async (tripId, pictureUri) => {
  const userId = auth.currentUser.uid;
  const tripRef = doc(tripsRef, tripId);
  let storageRef;
  let pictureBlob;

  try {
    // Обробка зображення локально
    const resizedPicture = await resizeImage(pictureUri, 325, 318);
    storageRef = ref(storage, `${userId}/places/${tripId}/${Date.now()}.jpg`);
    pictureBlob = await fetch(resizedPicture).then(response => response.blob());
  } catch (error) {
    console.log('Помилка з обробкою зображення');
    return false;
  }

  try {
    // Завантаження зображення в Firestore
    const snapshot = await uploadBytes(storageRef, pictureBlob);
    const pictureUrl = await getDownloadURL(snapshot.ref);

    // Оновлення БД. Додавання нового URL в масив з URL зображеннями
    await updateDoc(tripRef, { images: arrayUnion(pictureUrl) });
  } catch (error) {
    console.log('Помилка з завантаженням зображення на сервер');
    return false;
  }
  return true;
};
