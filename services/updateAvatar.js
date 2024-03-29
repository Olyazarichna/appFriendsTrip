import { doc, getDoc, updateDoc } from 'firebase/firestore';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';

import { resizeImage } from '../helpers/resizeImage';
import { auth, storage, usersRef } from '../firebase/config';

export const updateAvatar = async avatarUri => {
  const userId = auth.currentUser.uid;
  const userRef = doc(usersRef, userId);

  // Збереження URL попередньої аватарки
  const userData = await getDoc(userRef);
  const previousAvatarUrl = userData.exists ? userData.data().avatar : null;

  // Завантаження нової аватарки
  const resizedAvatar = await resizeImage(avatarUri);
  const storageRef = ref(storage, `${userId}/avatars/${Date.now()}.jpg`);
  const avatarBlob = await fetch(resizedAvatar).then(response =>
    response.blob()
  );
  const snapshot = await uploadBytes(storageRef, avatarBlob);
  const newAvatarUrl = await getDownloadURL(snapshot.ref);

  // Оновлення БД з URL нової аватарки
  await updateDoc(userRef, { avatar: newAvatarUrl });

  // Перевірка успішності збереження нової аватарки в БД перед видаленням попередньої аватарки
  const newUserData = await getDoc(userRef);
  const newAvatarUrlFromDB = newUserData.exists
    ? newUserData.data().avatar
    : null;
  if (newAvatarUrlFromDB !== newAvatarUrl) {
    console.warn(
      'Не вдалося зберегти нову аватарку. Видалення попередньої аватарки відмінено.'
    );
    return false;
  }

  // Видалення попередньої аватарки
  if (previousAvatarUrl) {
    const previousStorageRef = ref(storage, previousAvatarUrl);
    await deleteObject(previousStorageRef);
  }
  return true;
};
