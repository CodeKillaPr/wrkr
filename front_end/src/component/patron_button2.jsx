import PropTypes from "prop-types";
// import axios from "axios";
// import { useEffect, useState } from "react";

function AllButton({ onJobPostClick, onStatisticClick, onBookingClick }) {
  const hasBooking = false;
  //   const [booking, setBooking] = useState([]);

  //   useEffect(() => {}, []);
  return (
    <div className="relative top-52 flex h-full w-full items-center justify-center">
      <div className="profileCard_container relative border-spacing-4 rounded-full border-2 border-dashed p-10 duration-300 hover:border-blue-400">
        <button className="group profile_item absolute -top-[4px] left-[45px] cursor-pointer  rounded-full border border-teal-400/50  bg-cover p-[2px] transition-all duration-100 hover:-translate-x-[0.5rem] hover:-translate-y-[0.5rem] hover:scale-125 active:scale-95">
          <div
            className="absolute text-sm text-gray-500 ease-in-out duration-300 bg-white border border-gray-200 rounded-lg shadow-sm  dark:text-gray-400 dark:border-teal-600 dark:bg-teal-500/60 opacity-0 group-hover:opacity-100 -translate-x-2 -translate-y-6 group-hover:-translate-y-[2.3rem] "
            id="popover-top"
          >
            <h1 className="m-1 text-white">Market</h1>
          </div>
          <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-teal-400 p-2 transition-all duration-500">
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
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
              />
            </svg>
          </span>
        </button>

        <button className="group profile_item absolute -top-[4px] right-[45px] cursor-pointer rounded-full border border-gray-400/50 bg-cover p-[2px] transition-all duration-100 hover:-translate-x-[-1rem] hover:-translate-y-[0.5rem] hover:scale-125 active:scale-95">
          <div
            className="absolute text-sm text-gray-500 ease-in-out duration-300 bg-white border border-gray-200 rounded-lg shadow-sm  dark:text-gray-400 dark:border-gray-600 dark:bg-gray-500/60 opacity-0 group-hover:opacity-100 -translate-x-2 -translate-y-6 group-hover:-translate-y-[2.3rem] "
            id="popover-top"
          >
            <h1 className="m-1 text-white">Setting</h1>
          </div>
          <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-gray-500 p-2 transition-all duration-500">
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
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
        </button>

        <button
          onClick={onStatisticClick}
          className="group profile_item absolute -left-4 top-20 cursor-pointer rounded-full border border-red-400/50 bg-cover p-[2px] transition-all duration-100 hover:-translate-x-[1rem] hover:-translate-y-[0.5rem] hover:scale-125 active:scale-95"
        >
          <div
            className="absolute text-sm text-gray-500 ease-in-out duration-300 bg-white border border-gray-200 rounded-lg shadow-sm  dark:text-gray-400 dark:border-red-600 dark:bg-red-500/60 opacity-0 group-hover:opacity-100 -translate-x-[1rem] -translate-y-[-0.3rem] group-hover:-translate-x-[5rem] "
            id="popover-top"
          >
            <h1 className="m-1 text-white">Statistics</h1>
          </div>
          <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-red-500 p-2 transition-all duration-500">
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
                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
              />
            </svg>
          </span>
        </button>

        <button className="profile_item absolute -right-4 top-20 cursor-pointer rounded-full border border-blue-400/50 bg-cover p-[2px] transition-all duration-100 hover:-translate-x-[-1rem] hover:-translate-y-[0.5rem] hover:scale-125 active:scale-95">
          <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-blue-400 p-2 transition-all duration-500">
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
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </span>
        </button>

        <button
          onClick={onBookingClick}
          className={`group profile_item absolute -left-0 bottom-8 cursor-pointer rounded-full border border-orange-400/50 bg-cover p-[2px] transition-all duration-100 hover:-translate-x-[0.5rem] hover:-translate-y-[-0.5rem] hover:scale-125 active:scale-95 ${
            hasBooking ? "animate-bounce" : ""
          }`}
        >
          <div
            className="absolute text-sm text-gray-500 ease-in-out duration-300 bg-white border border-orange-200 rounded-lg shadow-sm  dark:text-gray-400 dark:border-orange-500 dark:bg-red-400/60 opacity-0 group-hover:opacity-100 -translate-x-[1rem] -translate-y-[-0.3rem] group-hover:-translate-x-[5rem] "
            id="popover-top"
          >
            <h1 className="m-1 text-white">Bookings</h1>
          </div>
          <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-orange-400 p-2 transition-all duration-500">
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </span>
        </button>

        <button
          onClick={onJobPostClick}
          className="profile_item absolute -right-0 bottom-8 cursor-pointer rounded-full border  border-amber-400/50 bg-cover p-[2px] transition-all duration-100 hover:scale-125 active:scale-90 hover:-translate-x-[-0.5rem] hover:-translate-y-[-0.5rem]"
        >
          <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-amber-700 p-2 transition-all duration-500">
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
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </span>
        </button>

        <button className="profile_item absolute -bottom-4 right-[40%] cursor-pointer rounded-full border border-green-400/50 bg-cover p-[2px] transition-all duration-100 hover:scale-125 hover:-translate-y-[-1rem] active:scale-95">
          <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-green-500 p-2 transition-all duration-500">
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
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
          </span>
        </button>

        <button className="profile_item z-0 h-[200px] w-[200px] cursor-pointer rounded-full border-2 p-1 transition-all duration-500 hover:border-blue-400 ">
          <div className="flex h-full w-full items-center justify-center rounded-full  object-cover p-2 transition-all duration-500">
            <img
              className="inline-block rounded-full duration-100 hover:scale-100 active:scale-90"
              src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671122.jpg"
              alt=""
            />
          </div>
        </button>
      </div>
    </div>
  );
}
AllButton.propTypes = {
  onJobPostClick: PropTypes.func.isRequired,
  onStatisticClick: PropTypes.func.isRequired,
  onBookingClick: PropTypes.func.isRequired,
};

export default AllButton;
