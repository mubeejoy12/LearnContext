import React from 'react'
import { useAuth } from '../context/AuthContext'


export const Dashboard = () => {
  const {user} = useAuth()

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
  )
}
