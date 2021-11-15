import { createContext, useEffect, useState } from "react";
import router from "next/router";
import Cookies from "js-cookie";

import firebase from "../../firebase/config";
import User from "../../model/User";

interface AuthContextProps {
  user?: User;
  isLoading?: boolean;
  loginGoogle?: () => Promise<void>;
  login?: (email: string, password: string) => Promise<void>;
  createUser?: (email: string, password: string) => Promise<void>;
  logout?: () => Promise<void>;
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

// usando cookie para deixar o usuario logado quando da refsh na pagnia
function gerenciaCookei(logaod: boolean) {
  if (logaod) {
    Cookies.set("admin-template-auth", logaod, {
      expires: 6,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
}

export function AuthProvider(props) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setLoading] = useState(true);

  //configurar sessao do usuario
  async function configSession(userFirebase) {
    if (userFirebase?.email) {
      const user = await normalizeUser(userFirebase);
      setUser(user);
      gerenciaCookei(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      gerenciaCookei(false);
      setLoading(false);
      return false;
    }
  }

  useEffect(() => {
    // firebase detectar id do usuario

    if (Cookies.get("admin-template-auth")) {
      const cancelar = firebase.auth().onIdTokenChanged(configSession);
      return () => cancelar();
    } else {
      setLoading(false);
    }
  }, []);

  async function loginGoogle() {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configSession(response.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function login(email: string, password: string) {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      await configSession(response.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function createUser(email: string, password: string) {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await configSession(response.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configSession(null);
      router.push("/autenticacao");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, loginGoogle, logout, isLoading, login, createUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
