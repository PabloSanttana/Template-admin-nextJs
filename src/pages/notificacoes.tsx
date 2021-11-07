import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const ctx = useAppData();

  return (
    <main>
      <Layout title="notificacoes" subTitle="notificacoes">
        <h3>Tema:{ctx.theme}</h3>
        <button onClick={() => ctx.toggleTheme()}>Alrear Tema</button>
      </Layout>
    </main>
  );
}
