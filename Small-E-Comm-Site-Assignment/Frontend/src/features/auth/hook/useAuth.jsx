import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../state/authAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import api from "../../../config/api";

export const userAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password");

  const registerForm = async (data) => {
    try {
      const res = await api.post("/auth/register", data);
      if (res) {
        toast.success("user registered successfully", {
          closeOnClick: true,
        });
        reset();
        navigate("/");
      }
    } catch (error) {
      console.log("register form:", error);
    }
  };

  const loginForm = (data) => {
    dispatch(loginUserAction(data));
  };

  return {
    register,
    handleSubmit,
    errors,
    password,
    registerForm,
    loginForm,
  };
};
