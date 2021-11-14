import { createContext, useState } from "react";
import router from "next/router";

import firebase from "../../firebase/config";
import User from "../../model/User";

interface AuthContextProps {
  user?: User;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function normalizeUser(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken();

  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0].providerId,
    imageUrl: userFirebase.photoURL,
  };
}

export function AuthProvider(props) {
  const [user, setUser] = useState<User>({
    uid: "213",
    email: "teste",
    name: "test",
    token: "teste",
    provider: "teste",
    imageUrl: "teste",
  });

  async function loginGoogle() {
    console.log("login google");
    router.push("/");
  }

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
