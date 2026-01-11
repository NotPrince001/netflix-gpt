import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const initialFormData = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleLogin = () => {
    if (isLogin) {
      console.log("Login", formData);
      const { email, password } = formData;
      if (password !== localStorage.getItem(email)) {
        alert("Incorrect email or password");
        return;
      }
      console.log("User login!");
      setFormData(initialFormData);
    } else {
      console.log("Signup", formData);

      const { fullName, email, password, confirmPassword } = formData;

      if (!fullName || !email || !password || !confirmPassword) {
        alert("All fields are required");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      localStorage.setItem(email, password);

      console.log("User saved");

      setFormData(initialFormData);
      setIsLogin(true);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
              type="text"
              placeholder="Full name"
              className="p-3 rounded bg-gray-700 focus:outline-none"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          ) : (
            ""
          )}

          <input
            type="email"
            placeholder="Email address"
            className="p-3 rounded bg-gray-700 focus:outline-none"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-700 focus:outline-none"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {!isLogin ? (
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-3 rounded bg-gray-700 focus:outline-none"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          ) : (
            ""
          )}

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
                setFormData(initialFormData);
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
