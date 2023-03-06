import { getDatabase, ref, set, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

export const createUserProfile = (
  userId,
  { name, email, phone, avatar, location, about }
) => {
  console.log('UserID', userId);
  try {
    const db = getDatabase();
    console.log('DB', db);
    set(ref(db, 'users/' + userId), {
      name,
      email,
      phone,
      profile_picture: avatar,
      location,
      about,
    });
  } catch (error) {
    console.log('Code', error.code);
    console.log('Message', error.message);
  }
};
