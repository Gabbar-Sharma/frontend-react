import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* Left - Brand Section */}
        <div className="relative hidden overflow-hidden bg-indigo-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          {/* Decorative circles */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-white/10" />

          <div className="relative z-10">
            <a
              href="/"
              className="text-3xl font-extrabold tracking-tight"
            >
              Shop<span className="text-indigo-200">X</span>
            </a>
          </div>

          <div className="relative z-10 max-w-md">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-200">
              Welcome back
            </p>

            <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
              Everything you love,
              <br />
              all in one place.
            </h1>

            <p className="mt-6 text-base leading-7 text-indigo-100">
              Sign in to access your orders, wishlist, personalized
              recommendations and more.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600 bg-gray-200 text-sm font-semibold text-gray-700">
                  A
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600 bg-gray-300 text-sm font-semibold text-gray-700">
                  R
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600 bg-gray-400 text-sm font-semibold text-gray-700">
                  S
                </div>
              </div>

              <p className="text-sm text-indigo-100">
                Join thousands of happy shoppers
              </p>
            </div>
          </div>

          <p className="relative z-10 text-sm text-indigo-200">
            © 2026 ShopX. All rights reserved.
          </p>
        </div>

        {/* Right - Login Form */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-10 text-center lg:hidden">
              <a
                href="/"
                className="text-3xl font-extrabold tracking-tight text-gray-900"
              >
                Shop<span className="text-indigo-600">X</span>
              </a>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter your details to access your account.
              </p>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-[0.99]"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M21.35 12.23c0-.79-.07-1.55-.22-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.95 2.94v2.45h3.15c1.84-1.69 2.91-4.18 2.91-7.42Z"
                />

                <path
                  fill="#34A853"
                  d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.15-2.45c-.87.58-1.98.92-3.3.92-2.54 0-4.69-1.72-5.46-4.03H3.28v2.53A9.74 9.74 0 0 0 12 21.5Z"
                />

                <path
                  fill="#FBBC05"
                  d="M6.54 13.59A5.85 5.85 0 0 1 6.23 12c0-.55.11-1.08.31-1.59V7.88H3.28A9.76 9.76 0 0 0 2.25 12c0 1.57.38 3.05 1.03 4.12l3.26-2.53Z"
                />

                <path
                  fill="#EA4335"
                  d="M12 6.38c1.43 0 2.72.49 3.73 1.46l2.8-2.8C16.83 3.47 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.72 5.38l3.26 2.53C7.31 8.1 9.46 6.38 12 6.38Z"
                />
              </svg>

              Continue with Google
            </button>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                or
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Form */}
            <form className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M3 3l18 18M10.58 10.58A2 2 0 0 0 13.41 13.4M9.88 5.09A9.77 9.77 0 0 1 12 4.86c5 0 8.27 4.27 9.5 7.14a11.8 11.8 0 0 1-3.06 4.22M6.61 6.62C4.62 8.05 3.29 10.15 2.5 12c1.23 2.87 4.5 7.14 9.5 7.14a9.78 9.78 0 0 0 3.4-.6"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
                        />

                        <circle
                          cx="12"
                          cy="12"
                          r="2.5"
                          strokeWidth="1.8"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-3">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.99]"
              >
                Sign in
              </button>
            </form>

            {/* Register */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Create account
              </a>
            </p>

            {/* Security */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z"
                />
              </svg>

              Your information is securely protected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;