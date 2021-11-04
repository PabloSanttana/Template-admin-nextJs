import { IconBell, IconHome, IconSetting } from "../icons";
import { HeaderItem } from "./HeaderItem";

interface SideBarProps {}

export default function SideBar(props: SideBarProps) {
  return (
    <aside>
      <ul>
        <HeaderItem url="/" text="Início" icon={IconHome} />
        <HeaderItem url="/ajuste" text="Ajuste" icon={IconSetting} />
        <HeaderItem url="/notificacoes" text="Novidades" icon={IconBell} />
      </ul>
    </aside>
  );
}
