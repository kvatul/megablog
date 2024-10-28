import { Header, Footer } from "./components/index.js";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../src/appwrite/auth.js";
import { login, logout } from "./store/authSlice.js";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        console.log(userData);
        if (userData) {
          dispatch(login({ userData }));
        } else dispatch(logout());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loading]);

  return !loading ? (
    <>
      <h1 className="text-2xl text-center bg-gray-500 px-5 py-5">
        A bolg with Appwrite
      </h1>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </>
  ) : null;
}

export default App;
