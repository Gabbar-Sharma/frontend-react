import { useForm } from "react-hook-form";
function Form({setUsers}) {
   
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

   const onSubmit = (data) => {
    console.log(data)
      setUsers((prevUsers) => [
    ...prevUsers,
    data,
  ]);
   }


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-gray-100">
        {/* Header */}
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Create Profile</h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your details to create your profile
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <input
              {...register("name", { required: "Name is Required",
               })}
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />
            {errors.name && (<p className="text-red-700 text-sm mt-1">{errors.name.message}</p>)}
          </div>

          {/* Email */}
          <div className="relative">
            <input
            {...register("email", {required: "Email is required"})}
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />
            {errors.email && (<p className="text-red-700 text-sm mt-1">{errors.email.message}</p>)}
          </div>

          {/* Mobile */}
          <div className="relative">
            <input
              {...register("mobile", {required: "email is required"})}
              type="tel"
              placeholder="Mobile Number"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />
            {errors.mobile && ( <p className="text-red-700 text-sm mt-1">{errors.mobile.message}</p>)}
          </div>

          {/* Profile Image URL */}
          <div>
            <input
              type="url"
              name="url"
              {...register("url", {required: "url is required"})}
              placeholder="Profile Image URL"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />
            {errors.url &&(<p className="text-red-700 text-sm mt-1">{errors.url.message}</p>)}
          </div>

          {/* OR */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs font-medium text-gray-400">OR</span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Local Image Upload */}
          <div>
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-7 transition hover:border-blue-400 hover:bg-blue-50">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 015.828 0L20 17m-2-2l-1.586-1.586a2 2 0 00-2.828 0L12 15m-8 1V7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2z"
                  />
                </svg>
              </div>

              <span className="text-sm font-medium text-gray-700">
                Upload Profile Image
              </span>

              <span className="mt-1 text-xs text-gray-400">
                PNG, JPG or JPEG
              </span>

              <input
                {...register("profileImageFile")}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                className="hidden"
              />
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
