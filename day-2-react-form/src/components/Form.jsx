import { useState } from "react";
import { useForm } from "react-hook-form";
import UserCard from "./UserCard";

function Form() {
  const [user, setUserData] = useState([]);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setUserData((prevUser) => [...prevUser, data]);
  };
  return (
    <>
    <div className="`w-[340px]` `h-[500px]`  mt-10 p-6 bg-white rounded-lg shadow-md">
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>

          <input
            id="email"
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password atleast 8 digits",
              },
              maxLength: {
                value: 10,
                message: "Password at most 10 digits",
              },
            })}
            id="password"
            type="password"
            placeholder="Create a password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          {errors.password && (
             <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
             <div>
              
              <input 
              {...register("image", {
                required: "Image is required"
              })}
              id="image"
              placeholder="upload your img/url"
              type="url" 
               className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          
              />
              {errors.image &&(
                <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
              )}
             </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] transition"
        >
          Create Account
        </button>
      </form>
    
    </div>

 <div className="mt-6 w-full h-full flex flex-wrap items-center gap-4 justify-center">
      {user.map((userData, index) => (
  <UserCard
    key={index}   
    name={userData.name}
    email={userData.email}
    image={userData.image}
    password={userData.password}
    className="w-50 max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  />
))}
     </div>

    </>
  );
}

export default Form;
