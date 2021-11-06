import { IconBell, IconHome, IconSetting } from "../icons";
import { HeaderItem } from "./HeaderItem";

interface SideBarProps {}

export default function SideBar(props: SideBarProps) {
  return (
    <aside>
      <div
        className={`
        flex flex-col items-center justify-center
        h-20 w-20
        bg-gradient-to-r from-indigo-500 to-purple-500
      `}
      ></div>
      <ul>
        <HeaderItem url="/" text="Início" icon={IconHome} />
        <HeaderItem url="/ajuste" text="Ajuste" icon={IconSetting} />
        <HeaderItem url="/notificacoes" text="Novidades" icon={IconBell} />
      </ul>
    </aside>
  );
}
