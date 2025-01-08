import React from "react";
import { useAppContext } from "../context/AppContext";
// import { usePhone } from "../context/PhoneContext";
// import { useAuth } from "../context/AuthContext";
// import { useTheme } from "../context/ThemeContext";

export const SecondHeader = () => {
  // const { user, login, logout } = useAuth();
  // const { theme, toggleTheme } = useTheme();
  //   const { user, login, logout, theme, toggleTheme } = usePhone();
  const { state, dispatch } = useAppContext();

  const demoUser = { name: "My boss", email: "myboss@gamil.com" };

  return (
    <header
      className={`p-4 flex justify-between items-center ${
        state.theme === "light"
          ? "bg-blue-500 text-white"
          : "bg-gray-800 text-gray-200"
      }`}
    >
      <h1 className="text-lg font-bold">Multi-Context App</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch({ type: "toggle_theme" })}
          className="px-4 py-2 rounded bg-yellow-500"
        >
          Toggle Theme
        </button>
        {state.user ? (
          <>
            <span>Welcome, {demoUser.name}</span>
            <button
              onClick={() => dispatch({ type: "logout" })}
              className="px-4 py-2 bg-red-500 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() =>
              dispatch({
                type: "login",
                payload: demoUser,
              })
            }
            className="px-4 py-2 bg-green-500 rounded"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};
