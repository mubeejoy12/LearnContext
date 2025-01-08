import React from "react";
import { useAppContext } from "../context/AppContext";
// import { usePhone } from "../context/PhoneContext";
// import { useAuth } from '../context/AuthContext'

export const Dashboard = () => {
  // const { user } = usePhone();
   const { state } = useAppContext();
 

  return (
    <main className="flex-1 p-4">
      {state.user ? (
        <div>
          <h2 className="text-xl font-bold">User Dashboard</h2>
          <p>Name: {state.user.name}</p>
          <p>Email: {state.user.email}</p>
        </div>
      ) : (
        <p>Please log in to access the dashboard.</p>
      )}
    </main>
  );
};
