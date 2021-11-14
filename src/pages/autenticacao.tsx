import React, { useState } from "react";
import AuthInput from "../components/Auth/AuthInput";

interface AutenticacaoProps {}

export default function Autenticacao() {
  const [mod, setMod] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (mod === "login") {
      console.log("login");
    } else {
      console.log("cadastro");
    }
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="w-1/2">
        <h1 className="text-xl font-bold mb-5">
          {mod === "login"
            ? "Entre com a Sua conta"
            : "Cadastre-se na Plataforma"}
        </h1>
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
          <button
            className={`
          w-full bg-indigo-500 hover:bg-indigo-400 
          text-white rounded-lg px-4 py-3 mt-6`}
            type="submit"
          >
            {mod === "login" ? "Entrar" : "Cadastrar"}
          </button>
        </form>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          className={`
          w-full bg-red-500 hover:bg-red-400 
          text-white rounded-lg px-4 py-3 `}
          type="submit"
        >
          Entra com Google
        </button>
      </div>
    </div>
  );
}
