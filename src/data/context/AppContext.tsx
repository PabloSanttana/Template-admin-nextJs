import { createContext, useState } from "react";

type theme = "dark" | "";

interface AppContextProps {
  theme?: theme;
  toggleTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [theme, setTheme] = useState<theme>("");

  function toggleTheme() {
    setTheme(theme === "" ? "dark" : "");
  }

  return (
    <AppContext.Provider
      value={{
        theme: theme,
        toggleTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
