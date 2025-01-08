import { createContext, useContext, useState } from "react";

const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const [user, setUser] = useState(null);

  const login = (name, email) => setUser({ name, email });
  const logout = () => setUser(null);

  return (
    <PhoneContext.Provider value={{ theme, toggleTheme, user, login, logout }}>
      {children}
    </PhoneContext.Provider>
  );
};

export const usePhone = () => useContext(PhoneContext);
