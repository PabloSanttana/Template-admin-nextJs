import { IconMoon, IconSun } from "../icons";

interface BottomToggleThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export default function BottomToggleTheme(props: BottomToggleThemeProps) {
  return props.theme === "dark" ? (
    <div
      onClick={props.toggleTheme}
      className={`
        flex
        items-center
        justify-center
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-8 sm:w-24 h-8
        rounded-full
        cursor-pointer
       
    `}
    >
      <div
        className={`
         bg-white
          rounded-full
          text-yellow-600
      `}
      >
        {IconSun}
      </div>
      <div
        className={`
         hidden sm:block
         text-white
      `}
      >
        <span className={`ml-4`}>Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.toggleTheme}
      className={`
      flex
      items-center
      justify-center
      bg-gradient-to-r from-gray-400 to-gray-900
      w-8 sm:w-24 h-8
      rounded-full
      cursor-pointer
      text-gray-100
  `}
    >
      <div
        className={`
       hidden sm:block
    `}
      >
        <span className={`mr-3`}>Escuro</span>
      </div>
      <div
        className={`
        flex justify-center items-center
        bg-gray-900
        rounded-full
        text-yellow-300
        w-6 h-6
       
    `}
      >
        {IconMoon}
      </div>
    </div>
  );
}
