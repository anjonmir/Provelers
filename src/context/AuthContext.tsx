import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  type User,
} from "firebase/auth";

import { auth } from "../services/firebase";

type AuthContextType = {
  user: User | null;

  loading: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;

  resetPassword: (
    email: string
  ) => Promise<void>;
};

export const AuthContext =
  createContext<AuthContextType>(
    {} as AuthContextType
  );

type Props = {
  children: ReactNode;
};

export function AuthProvider({
  children,
}: Props) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  // LOGIN
  const login = async (
    email: string,
    password: string
  ) => {
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // REGISTER
  const register = async (
    name: string,
    email: string,
    password: string
  ) => {

    const result =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    console.log("User created");

    try {

      await updateProfile(
        result.user,
        {
          displayName: name,
        }
      );

      console.log("Profile updated");

    } catch (error) {

      console.error(
        "updateProfile Error:",
        error
      );

      throw error;

    }

  };

  // LOGOUT
  const logout = async () => {
    await signOut(auth);
  };

  // RESET PASSWORD
  const resetPassword = async (
    email: string
  ) => {
    await sendPasswordResetEmail(
      auth,
      email
    );
  };

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser);

          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;