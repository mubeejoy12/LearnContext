import { createContext, useContext, useReducer } from "react";
const AppContext = createContext();
const initialState = { theme: "light", user: null };
  switch (action.type) {
    case "toggle_theme":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
