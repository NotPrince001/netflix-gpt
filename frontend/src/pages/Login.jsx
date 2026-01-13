import React, { useRef, useState } from "react";
import axios from "axios";
import { loginSchema, signupSchema } from "../utils/validator";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const confirmPassword = useRef(null);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    setErrorMessage("");
    if (isLogin) {
      try {
        await loginSchema.validate(
          {
            email: email.current.value,
            password: password.current.value,
          },
          { abortEarly: true }
        );
      } catch (error) {
        setErrorMessage(error.message);
        return;
      }
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/login`,
          {
            email: email.current.value,
            password: password.current.value,
          },
          { withCredentials: true }
        );
        console.log(res.data);
        dispatch(
          addUser({
            userId: res.data._id,
            fullName: res.data.fullName,
            email: res.data.email,
          })
        );
        setErrorMessage("");
      } catch (error) {
        console.log("Login Failed: ", error.response.data.message);
        setErrorMessage(error.response.data.message || "Something went wrong");
      }
    } else {
      try {
        await signupSchema.validate(
          {
            fullName: fullName.current.value,
            email: email.current.value,
            password: password.current.value,
            confirmPassword: confirmPassword.current.value,
          },
          { abortEarly: true }
        );
      } catch (error) {
        setErrorMessage(error.message);
        return;
      }
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/register`,
          {
            fullName: fullName.current.value,
            email: email.current.value,
            password: password.current.value,
          },
          { withCredentials: true }
        );
        alert(res.data.message);
        setErrorMessage("");
        setIsLogin(true);
      } catch (error) {
        console.log("signup Failed: ", error.response.data.message);
        setErrorMessage(error.response.data.message || "Something went wrong");
      }
    }
  };
  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_small.jpg')] bg-cover bg-center"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Logo */}
      <div className="absolute z-10 w-40 m-6">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <form className="bg-black/75 p-10 rounded-md w-96 text-white flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-4">
            {isLogin ? "Sign In" : "Sign Up"}
          </h1>

          {!isLogin ? (
            <input
              ref={fullName}
              type="text"
              placeholder="Full name"
              className="p-3 rounded bg-gray-700 focus:outline-none"
              required
            />
          ) : (
            ""
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email address"
            className="p-3 rounded bg-gray-700 focus:outline-none"
            required
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-700 focus:outline-none"
            required
          />

          {!isLogin ? (
            <input
              ref={confirmPassword}
              type="password"
              placeholder="Confirm Password"
              className="p-3 rounded bg-gray-700 focus:outline-none"
              required
            />
          ) : (
            ""
          )}

          <p className="text-red-700">{errorMessage}</p>

          <button
            className="bg-red-600 py-3 rounded font-semibold mt-4 cursor-pointer"
            type="button"
            onClick={handleLogin}
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-gray-400">
            {isLogin ? "New to Netflix?" : "Already a member?"}{" "}
            <button
              className="underline text-white cursor-pointer"
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                email.current.value = "";
                password.current.value = "";
                if (confirmPassword.current) confirmPassword.current.value = "";
                if (fullName.current) fullName.current.value = "";
                setErrorMessage("");
              }}
            >
              {isLogin ? "Sign up now" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
