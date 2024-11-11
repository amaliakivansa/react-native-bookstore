import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from './config';

export const signUp = async (email, password, name, phone) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // await updateProfile(user, { displayName: name });

    // await setDoc(doc(db, 'users', user.uid), {
    //   name,
    //   email,
    //   phoneNumber,
    // });

    console.log('User account created', user);
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (email, password) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return user;
  } catch (error) {
    throw error;
  }
};
