import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { PhoneProvider } from "./context/PhoneContext";

// first create the context CreateContext
// const ThemeContext = createContext();
// const AuthContext = createContext();

function App() {
  // const [theme, setTheme] = useState("light"); // state to toggle light

  // secons example
  // const [user, setUser] = useState(null);

  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Dashboard />
        </div>
      </AuthProvider>
    </ThemeProvider>
    // 2. provide the themeValue to the context
    // <ThemeContext.Provider value={{ theme, setTheme }}>
    //   <div
    //     className={`min-h-screen ${
    //       theme === "light" ? "bg-white" : "bg-gray-800"
    //     } text-${theme === "light" ? "black" : "white"}`}
    //   >
    //     <Header />
    //     <Main />

    //   </div>
    // </ThemeContext.Provider>

    // second example
    // <AuthContext.Provider value={{ user, setUser }}>
    //   <div className="min-h-screen bg-gray-100 text-gray-800">
    //     <Header />
    //     <Main />
    //   </div>
    // </AuthContext.Provider>
  );
}
// consume the context in child components
// function Header() {
//   const { theme, setTheme } = useContext(ThemeContext);
//   return (
//     <header className="p-4 flex justify-between items-center border-b border-gray-300">
//       <h1 className="text-lg font-bold">React Context App</h1>
//       <button
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         {" "}
//         Toggle Theme
//       </button>
//     </header>
//   );
// }
// function Main() {
//   return (
//     <main className="p-4">
//       <p>This is the main content area.</p>
//     </main>
//   );
// }

// const Header = () => {
//   const { user, setUser } = useContext(AuthContext);
//   return (
//     <header className="p-4 flex justify-between items-center bg-blue-500 text-white">
//       <h1 className="text-lg font-bold">My App</h1>
//       {user ? (
//         <button
//           onClick={() => setUser(null)}
//           className="px-4 py-2 bg-red-500 rounded"
//         >
//           {" "}
//           Logout
//         </button>
//       ) : (
//         <button
//           onClick={() => setUser({ name: "John Doe" })}
//           className="px-4 py-2 bg-green-500 rounded"
//         >
//           Login
//         </button>
//       )}
//     </header>
//   );
// };

// const Main = () => {
//   const { user, setUser } = useContext(AuthContext);
//   return (
//     <main className="p-4">
//       {user ? (
//         <p>
//           Welcome, <strong>{user.name}</strong>!
//         </p>
//       ) : (
//         <p>Please log in to access more features.</p>
//       )}
//     </main>
//   );
// };
export default App;
