import React from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export const Header = () => {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const demoUser = { name: "My boss", email: "myboss@gamil.com" };

  return (
    <header
      className={`p-4 flex justify-between items-center ${
        theme === "light"
          ? "bg-blue-500 text-white"
          : "bg-gray-800 text-gray-200"
      }`}
    >
      <h1 className="text-lg font-bold">Multi-Context App</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-yellow-500"
        >
          Toggle Theme
        </button>
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={logout} className="px-4 py-2 bg-red-500 rounded">
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => login(demoUser.name, demoUser.email)}
            className="px-4 py-2 bg-green-500 rounded"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};
