import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/user";

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string) => {
    const fakeUser: User = {
      id: 1,
      email,
      displayName: "Demo User",
    };
    setUser(fakeUser);
  };

  const register = (name: string, email: string, _password: string) => {
    const fakeUser: User = {
      id: 2,
      email,
      displayName: name,
    };
    setUser(fakeUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used inside AuthProvider");
  }
  return ctx;
}
