import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import useAuth from "../../data/hook/useAuth";
import Loading from "../../../public/images/loading.gif";

export default function ProtectionRouter(props) {
  const { user, isLoading } = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <script
            // segunda verificação para segurança da aplicação
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie.includes("admin-template-auth")){
                window.location.href = "/autenticacao"
            }`,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderLoading() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={Loading} />
      </div>
    );
  }

  if (!isLoading && user?.email) {
    return renderContent();
  } else if (isLoading) {
    return renderLoading();
  } else {
    router.push("/autenticacao");
    return null;
  }
}
