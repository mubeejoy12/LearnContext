import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = { theme: "light", user: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle_theme":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "login":
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    default:
      throw new Error("Unknown action type");
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
