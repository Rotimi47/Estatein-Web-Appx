import React, { useEffect, useState } from 'react';
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Properties from './pages/Properties';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import ViewProperty from './pages/ViewProperty';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import BookingPage from './pages/BookingPage';



const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // optional splash

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // optional splash while checking auth
  }




  return (
   
      <Routes>
         {/* MAIN WEBSITE */}
        <Route element={<MainLayout user={user}/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact/>} />


           {/* Protected pages */}
        <Route
          path="/properties"
          element={
            user ? <Properties /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/properties/:id"
          element={user ? <ViewProperty /> : <Navigate to="/login" replace />}
        />
        <Route path="/booking/:id" element={<BookingPage/>} />
        </Route>
       


         {/* AUTH PAGES */}
          <Route element={<AuthLayout />}>
          {/* Prevent logged-in users from accessing login/get-started */}
            <Route path="/login" 
              element={!user ? <Login /> : <Navigate to="/" replace />}
            />
            <Route path="/get-started" 
              element={!user ? <GetStarted /> : <Navigate to="/" replace />}
            />
          </Route>

      </Routes>
    

    
  )
}

export default App;
