import { useState } from "react";
import useAuth from "../../hooks/authHook";

function Login() {
  const {
    register,
    handleSubmit,
    loginForm,
    navigate,
  } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="min-h-[400px] w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Shop<span className="text-violet-600">X</span>
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login to your account
          </p>
        </div>


        {/* Demo Credentials */}
<div className="mb-4 rounded-lg bg-violet-50 p-3 text-sm">
  <p className="font-semibold text-gray-700">Demo Credentials</p>

  <p className="mt-1 text-gray-600">
    Username: <span className="font-medium">emilys</span>
  </p>

  <p className="text-gray-600">
    Password: <span className="font-medium">emilyspass</span>
  </p>
</div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(loginForm)}
          className="space-y-5"
        >

          {/* Username */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
              {...register("username", {
                required: "Username is required",
              })}
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 pr-20 text-sm outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
                {...register("password", {
                  required: "Password is required",
                })}
              />

              {/* Show / Hide Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-violet-600 hover:text-violet-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-violet-600 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Login
          </button>

        </form>

        {/* Register Text */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?

          <button
            onClick={() => navigate("/register")}
            type="button"
            className="ml-1 cursor-pointer font-semibold text-violet-600 hover:text-violet-700"
          >
            Register
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;