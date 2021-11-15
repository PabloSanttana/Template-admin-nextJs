import React, { useState } from "react";
import AuthInput from "../components/Auth/AuthInput";
import { IconWarning } from "../components/icons";
import useAuth from "../data/hook/useAuth";

interface AutenticacaoProps {}

export default function Autenticacao() {
  const { loginGoogle, login, createUser, isLoading } = useAuth();

  const [mod, setMod] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function showError(message: string, time = 5) {
    setError(message);

    setTimeout(() => setError(null), time * 1000);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (mod === "login") {
        await login(email, password);
      } else {
        await createUser(email, password);
      }
    } catch (error) {
      showError(error.message);
    }
  }

  return (
    <div className="flex  h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="imagem da tela de autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-5">
          {mod === "login"
            ? "Entre com a Sua conta"
            : "Cadastre-se na Plataforma"}
        </h1>
        {error && (
          <div
            className={`
          flex bg-red-400 text-white 
          rounded-md p-2 border border-red-700
          `}
          >
            {IconWarning} <span className={`ml-2`}>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <AuthInput
            name="email"
            placeholder="Seu email"
            type="email"
            label="Email"
            value={email}
            setValue={setEmail}
            required
          />
          <AuthInput
            name="password"
            placeholder="Sua senha"
            type="password"
            label="Senha"
            value={password}
            setValue={setPassword}
            required
          />
          <span className={`text-gray-500`}>
            A senha deve ter conter no mínimo 6 caracteres
          </span>

          <button
            className={` 
          w-full bg-indigo-500 hover:bg-indigo-400 
          text-white rounded-lg px-4 py-3 mt-6`}
            type="submit"
          >
            {isLoading ? (
              "Carregando..."
            ) : (
              <> {mod === "login" ? "Entrar" : "Cadastrar"}</>
            )}
          </button>
        </form>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={loginGoogle}
          className={`
          w-full bg-red-500 hover:bg-red-400 
          text-white rounded-lg px-4 py-3 `}
          type="submit"
        >
          Entra com Google
        </button>

        {mod === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              className={`
              text-blue-500 hover:text-blue-700 
              font-semibold cursor-pointer`}
              onClick={() => setMod(`cadastro`)}
            >
              {" "}
              Crie uma Conta Gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setMod(`login`)}
              className={`
             text-blue-500 hover:text-blue-700 
             font-semibold cursor-pointer`}
            >
              {" "}
              Entre com suas Credencias
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
