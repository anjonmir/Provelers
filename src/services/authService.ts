import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "./firebase";

const googleProvider =
  new GoogleAuthProvider();

export async function signInWithGoogle() {
  const result =
    await signInWithPopup(
      auth,
      googleProvider
    );

  return result.user;
}