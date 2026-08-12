

function UserCard({name, email, mobile, url, onDelete}) {
    
    

  return (
    
 <div className="">

<div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Top Cover */}
      <div className="h-28 bg-linear-to-r from-blue-600 to-indigo-600" />

      {/* Card Body */}
      <div className="px-6 pb-6">

        {/* Profile Image */}
        <div className="-mt-14 mb-4">
          <div className="h-28 w-28 rounded-full border-4 border-white bg-gray-100 shadow-lg">
            <img
              src={url}
              alt={name}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* User Name from user */}
        <h2 className="text-2xl font-bold text-gray-900">
          {name}
        </h2>
        
        {/* Email */}
        <p className="mt-1 text-sm text-gray-500">
          {email}
        </p>

        {/* Mobile */}
        <p className="mt-2 text-sm font-medium text-gray-700">
         {mobile}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-gray-200" />

        {/* Status */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

            <span className="text-sm font-medium text-green-600">
              Active
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
              Edit
            </button>

            <button
            onClick={onDelete}
             className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100">
              Delete
            </button>

          </div>
        </div>

      </div>
    </div>


 </div>

  )
}

export default UserCard