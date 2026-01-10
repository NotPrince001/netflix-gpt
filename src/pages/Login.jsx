import React from "react";

const Login = () => {
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
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>

          <input
            type="email"
            placeholder="Email address"
            className="p-3 rounded bg-gray-700 focus:outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-700 focus:outline-none"
            required
          />

          <button className="bg-red-600 py-3 rounded font-semibold mt-4 cursor-pointer">
            Sign In
          </button>

          <p className="text-gray-400">
            New to Netflix?{" "}
            <button className="underline text-white cursor-pointer">
              Sign up now
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
