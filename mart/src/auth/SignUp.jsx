import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../context-api/authContext";
import { toast } from "react-toastify";


function SignUp() {
  const { registerUser, setRegisterUser } = useContext(Auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const formSubmit = (data) => {
    const arr = [...registerUser, data];
    setRegisterUser(arr);
    reset();
    localStorage.setItem("registerUser", JSON.stringify(arr));
    toast.success("User Register bhi kar diya")
  };
  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Brand mark */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-emerald-900 text-amber-300 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
            mart
          </div>
          <p className="text-stone-500 text-sm mt-3">
            Fresh account, fresh cart.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
          {/* Sticker toggle */}
          <div className="flex border-b border-dashed border-stone-300 bg-stone-50 px-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex-1 pb-3 text-sm font-semibold border-b-2 border-transparent text-stone-400 hover:text-stone-600"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/sign-up")}
              type="button"
              className="flex-1 pb-3 text-sm font-semibold border-b-2 border-emerald-700 text-emerald-800"
            >
              Sign up
            </button>
          </div>

          <form onSubmit={handleSubmit(formSubmit)} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                Full name
              </label>
              <input
                {...register("name", {
                  required: "Name is Required Bro",
                })}
                type="text"
                name="name"
                placeholder="Gabbar Singh"
                className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              {errors.name && (
                <p className="text-orange-600 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is Required Bro",
                })}
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              {errors.email && (
                <p className="text-orange-600 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                Password
              </label>
              <input
                {...register("password", {
                  required: "password is Required Bro",
                  minLenth: {
                    length: 8,
                    message: "kam se kam 8 char chahiye",
                  },
                })}
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              {errors.password && (
                <p className="text-orange-600 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                Confirm password
              </label>
              <input
                {...register("confirmPassword", {
                  required: "confirmPassword is Required Bro",
                  validate: (value, formvalue) => value === formvalue.password || "password match nhi ho rha"})}
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              {errors.confirmPassword && (
                <p className="text-orange-600 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              Create account
            </button>
          </form>

          {/* Barcode footer signature */}
          <div className="flex justify-center gap-0.5 py-4 bg-stone-50 border-t border-dashed border-stone-300">
            {[3, 1, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 1, 4, 2, 1, 3, 1].map(
              (w, i) => (
                <div
                  key={i}
                  className="bg-stone-400"
                  style={{ width: `${w}px`, height: "16px" }}
                />
              ),
            )}
          </div>
        </div>

        <p className="text-center text-xs text-stone-400 mt-4">
          Pehle se account hai?{" "}
          <button
            onClick={() => navigate("/")}
            type="button"
            className="text-emerald-700 font-semibold hover:underline"
          >
            Login karo
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
