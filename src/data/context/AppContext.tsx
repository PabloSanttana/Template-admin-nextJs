import { createContext, useEffect, useState } from "react";

//type theme = "dark" | "";

interface AppContextProps {
  theme?: string;
  toggleTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if (getTheme) {
      setTheme(getTheme);
    }
  }, []);

  function toggleTheme() {
    setTheme(theme === "" ? "dark" : "");
    localStorage.setItem("theme", theme === "" ? "dark" : "");
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
