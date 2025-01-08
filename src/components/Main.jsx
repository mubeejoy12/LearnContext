import React from "react";
// import { useAuth } from '../context/AuthContext'
import TaskManager from "./TaskManager";
import { usePhone } from "../context/PhoneContext";

const Main = () => {
  // const {user} = useAuth()
  const { user } = usePhone();

  return (
    <main className="p-4">
      {user ? (
        <TaskManager />
      ) : (
        <p className="text-center text-grayy-600">
          please log in to manage task
        </p>
      )}
    </main>
  );
};

export default Main;
