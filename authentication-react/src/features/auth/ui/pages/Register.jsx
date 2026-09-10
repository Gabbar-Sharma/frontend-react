import useAuth from "../../hooks/authHook";



const Register = () => {
  const {
    navigate,
  } = useAuth();

  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="min-h-[400px] w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">

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
         
          className="space-y-3"
        >

          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-violet-600"
              
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your email"
              className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-violet-600"
             
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-violet-600"
              
            />
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
          onClick={() => navigate("/login")}
            type="button"
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