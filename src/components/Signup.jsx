import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { Input, Button, Logo } from "./index";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const signup = async (data) => {
    setError("");
    try {
      const userAccount = await authService.creteAccount(data);
      if (userAccount) {
        userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div
      className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
    >
      <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
          <Logo width="100%" />
        </span>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">
        Sign up to create your account
      </h2>
      <p className="mt-2 text-center text-base text-black/50">
        Already have an account?&nbsp;
        <Link
          to="/login"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign In
        </Link>
      </p>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <form onSubmit={handleSubmit(signup)}>
        <Input
          label="Name:"
          type="text"
          placeholder="Enter your name"
          {...register("name", {
            required: true,
          })}
        />

        <Input
          label="Email:"
          placeholder="Enter your email"
          type="email"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />
        <Input
          label="Password:"
          placeholder="Enter your password"
          type="password"
          {...register("password", { required: true })}
        />

        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default Signup;
