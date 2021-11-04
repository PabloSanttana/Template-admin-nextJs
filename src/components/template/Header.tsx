import Title from "./Title";

interface HeaderProps {
  title: string;
  subTitle: string;
  children?: any;
}

export default function Header(props: HeaderProps) {
  return (
    <div>
      <Title title={props.title} subTitle={props.subTitle} />
    </div>
  );
}
