import useAppData from "../../data/hook/useAppData";
import Content from "./Content";
import Header from "./Header";
import SideBar from "./SideBar";

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const ctx = useAppData();
  return (
    <div
      className={`
      ${ctx.theme}
       flex h-screen w-screen
    `}
    >
      <SideBar />
      <div
        className={`
        flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-700
      `}
      >
        <Header title={props.title} subTitle={props.subTitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}
