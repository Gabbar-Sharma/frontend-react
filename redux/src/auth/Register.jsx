
import { useState } from "react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* Left Side */}
        <div className="relative hidden overflow-hidden bg-indigo-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          
          {/* Decorative Shapes */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-white/10" />

          {/* Logo */}
          <div className="relative z-10">
            <a
              href="/"
              className="text-3xl font-extrabold tracking-tight"
            >
              Shop<span className="text-indigo-200">X</span>
            </a>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-md">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-200">
              Create your account
            </p>

            <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
              Your shopping
              <br />
              journey starts here.
            </h1>

            <p className="mt-6 text-base leading-7 text-indigo-100">
              Create your ShopX account and enjoy a personalized shopping
              experience with faster checkout, order tracking and wishlist.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  ✓
                </div>

                <span className="text-sm text-indigo-100">
                  Fast and secure checkout
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  ✓
                </div>

                <span className="text-sm text-indigo-100">
                  Track all your orders
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  ✓
                </div>

                <span className="text-sm text-indigo-100">
                  Save products to your wishlist
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="relative z-10 text-sm text-indigo-200">
            © 2026 ShopX. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-8 text-center lg:hidden">
              <a
                href="/"
                className="text-3xl font-extrabold tracking-tight text-gray-900"
              >
                Shop<span className="text-indigo-600">X</span>
              </a>
            </div>

            {/* Heading */}
            <div className="mb-7">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Create account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter your details to create your ShopX account.
              </p>
            </div>

            {/* Google Signup */}
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
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                or
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Form */}
            <form className="space-y-4">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

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
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
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
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>

                <p className="mt-2 text-xs text-gray-400">
                  Use at least 8 characters with a mix of letters and numbers.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />

                <label
                  htmlFor="terms"
                  className="text-sm leading-5 text-gray-500"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md active:scale-[0.99]"
              >
                Create account
              </button>
            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Sign in
              </a>
            </p>

            {/* Security */}
            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-400">
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

export default Register;