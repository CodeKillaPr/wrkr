function WorkPost() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden dark hover:scale-110 duration-300">
      <div className="relative w-full max-w-md bg-gray-700 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          Jobs Post Form
        </h2>

        <form className="flex flex-col">
          <input
            placeholder="Job title"
            className="bg-gray-600 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />

          <textarea
            placeholder="Description"
            className="bg-gray-600 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            rows="4"
          />

          <input
            placeholder="Pay rate"
            className="bg-gray-600 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 no-spinner"
            type="number"
            step="0.01"
          />

          <input
            placeholder="Location"
            className="bg-gray-600 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />

          <input
            placeholder="Time frame"
            className="bg-gray-600 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />

          <div className="flex items-center justify-between mt-4">
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        <img
          src="/public/avatar.webp"
          alt="3D Man Holding Laptop"
          className="absolute top-[10rem] right-[-13rem] w-96 h-auto mt-4 rounded-lg"
        />
      </div>
    </div>
  );
}

export default WorkPost;
