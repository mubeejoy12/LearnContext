  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("task")) || [];
    setTasks(storedTasks);
  }, []);
