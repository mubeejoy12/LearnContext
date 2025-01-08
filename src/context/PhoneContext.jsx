  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const login = (name, email) => setUser({ name, email });
  const logout = () => setUser(null);
