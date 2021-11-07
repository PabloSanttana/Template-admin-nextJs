import useAppData from "../../data/hook/useAppData";
import BottomToggleTheme from "./BottomToggleTheme";
import Title from "./Title";

interface HeaderProps {
  title: string;
  subTitle: string;
  children?: any;
}

export default function Header(props: HeaderProps) {
  const ctx = useAppData();

  return (
    <div className={`flex`}>
      <Title title={props.title} subTitle={props.subTitle} />
      <div className={`flex flex-grow justify-end`}>
        <BottomToggleTheme theme={ctx.theme} toggleTheme={ctx.toggleTheme} />
      </div>
    </div>
  );
}
