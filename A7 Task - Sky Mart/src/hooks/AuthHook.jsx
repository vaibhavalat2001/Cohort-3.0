import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/AuthSlice";

export const useAuth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || [],
  );
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const registerForm = (data) => {
    const arr = [...registeredUser, data];
    setRegisteredUser(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success(`${data.name.split(" ")[0]} registered successfully`);
    navigate("/");
  };

  const loginForm = (data) => {
    const user = registeredUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast("Invalid user");
      reset();
      return;
    }

    setLoggedUser(user);
    localStorage.setItem("loggedUser", JSON.stringify(user));
    toast.success(`${user.name.split(" ")[0]} logged successfully`);
    navigate("/main");
  };

  return {
    register,
    handleSubmit,
    errors,
    navigate,
    registerForm,
    loginForm,
    showPassword,
    setShowPassword,
  };
};
