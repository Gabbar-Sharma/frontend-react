
import useAuth from "../../hooks/authHook";

function Login() {
  const {
    register,
    handleSubmit,
    loginForm,
    errors,
    navigate,
  } = useAuth();

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

        {/* Form */}
        <form
          onSubmit={handleSubmit(loginForm)}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
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