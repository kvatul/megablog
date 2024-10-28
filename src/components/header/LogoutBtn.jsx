import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="inline-block round-full duration-200 hover:bg-blue-500 px-4 py-2"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
