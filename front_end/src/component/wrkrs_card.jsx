function Employs() {
  return (
    <div className="group m-2 h-[5rem] w-[20rem] rounded-[90rem] bg-gray-700 duration-300 hover:scale-105">
      <div className="relative flex w-64 gap-2 p-4">
        <div className="h-12 w-12 rounded-full bg-slate-400">
          <img
            className="rounded-4xl"
            src="https://img.freepik.com/psd-premium/ilustracion-3d-avatar-o-perfil-humano_23-2150671167.jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <div className="mb-1 h-6 w-3/5 items-center text-xl text-white">
            <p>Kelyan</p>
          </div>
          <div className="h-6 w-[90%] items-center text-sm text-white">
            <h1>Programer</h1>
          </div>
        </div>
        <div className="bottom-15 absolute right-3 z-10 h-4 w-4 animate-bounce rounded-full duration-500 group-hover:bg-green-500"></div>
        <div className="absolute right-[-0rem] bottom-5 z-0 h-10 w-10 rounded-full duration-500">
          <u>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
              />
            </svg>
          </u>
        </div>
      </div>
    </div>
  );
}

export default Employs;
