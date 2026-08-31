import { useAuth } from "../hooks/authHook";

const Register = () => {
  const {
    navigate,
    register,
    errors,
    handleSubmit,
    registerForm,
  } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md min-h-[400px] rounded-2xl bg-white p-6 shadow-lg">

        {/* Heading */}
        <div className="mb-5 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Register your account
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(registerForm)}
          className="space-y-3"
        >

          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>

            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Enter your name"
              className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-violet-600"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-violet-600"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters required",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-violet-600"
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="h-10 w-full rounded-lg bg-violet-600 text-sm font-semibold text-white hover:bg-violet-700"
          >
            Register
          </button>

        </form>

        {/* Login */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="ml-1 cursor-pointer font-semibold text-violet-600"
          >
            Login
          </button>
        </p>

      </div>
    </div>
  );
};

export default Register;