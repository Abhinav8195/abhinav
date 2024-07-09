import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("https://abhinav-kappa.vercel.app/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.error("Login failed:", err);
    dispatch(loginFailure());
  }
};
