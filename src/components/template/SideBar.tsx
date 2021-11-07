// pra mais icones acessar... https://heroicons.com/
import { IconBell, IconHome, IconLogout, IconSetting } from "../icons";
import { HeaderItem } from "./HeaderItem";
import { Logo } from "./Logo";

interface SideBarProps {}

export default function SideBar(props: SideBarProps) {
  return (
    <aside
      className={`
    flex flex-col
    bg-gray-200 text-gray-700
    dark:bg-gray-900
    `}
    >
      <div
        className={`
        flex flex-col items-center justify-center
        h-20 w-20
        bg-gradient-to-r from-indigo-500 to-purple-500
      `}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <HeaderItem url="/" text="Início" icon={IconHome} />
        <HeaderItem url="/ajuste" text="Ajuste" icon={IconSetting} />
        <HeaderItem url="/notificacoes" text="Novidades" icon={IconBell} />
      </ul>
      <ul className={`cursor-pointer`}>
        <HeaderItem
          text="Sair"
          icon={IconLogout}
          onClick={() => console.log("oioioi")}
          className={`
          text-red-600 
          dark:text-red-400
          hover:bg-red-400 
          hover:text-white 
          dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  );
}
