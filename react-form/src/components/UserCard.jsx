function UserCard({ name, email, image,  }) {
  return (
   <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Cover */}
      <div className="h-24  from-blue-600 to-indigo-600" />

      {/* Content */}
      <div className="relative px-6 pb-6">

        {/* Profile Image */}
        <div className="-mt-12 mb-4">
          <img
            src={image}
            alt={name}
            className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>

        {/* User Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {email}
          </p>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-gray-100" />

        {/* Status */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">
              Account Status
            </p>

            <p className="mt-1 text-sm font-semibold text-green-600">
              ● Active
            </p>
          </div>

          <button
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
          >
            View Profile
          </button>
        </div>

      </div>
    </div>

  );
}

export default UserCard;