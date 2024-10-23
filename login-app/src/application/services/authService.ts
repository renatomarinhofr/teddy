import { auth } from '../../infra/firebaseConfig';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from 'firebase/auth';
import { LoginFormInputs } from '../../domain/schemas/loginSchema';
import { User } from '../../domain/entities/User';

export async function loginWithEmailAndPassword(data: LoginFormInputs): Promise<User> {
  const userCredential: UserCredential = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  const { uid, email, displayName, photoURL } = userCredential.user;
  return { uid, email, displayName, photoURL };
}

export async function loginWithGoogle(): Promise<User> {
  const provider = new GoogleAuthProvider();
  const userCredential: UserCredential = await signInWithPopup(auth, provider);

  const { uid, email, displayName, photoURL } = userCredential.user;
  return { uid, email, displayName, photoURL };
}
