import { createContext, useContext, useReducer } from "react";
const AppContext = createContext();
const initialState = { theme: "light", user: null };
