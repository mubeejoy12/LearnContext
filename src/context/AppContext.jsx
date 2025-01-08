import { createContext, useContext, useReducer } from "react";
const AppContext = createContext();
const initialState = { theme: "light", user: null };
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
  const [state, dispatch] = useReducer(reducer, initialState);
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
