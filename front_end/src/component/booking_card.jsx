import PropTypes from "prop-types";
function BookingCard({ job }) {
  console.log(job);
  if (!job) {
    return <div>No job selected</div>;
  }

  return (
    <>
      <div className="card relative h-auto w-80 overflow-hidden rounded-2xl bg-gray-800 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,255,0.5)] hover:scale-105">
        <div className="card-content relative z-10 p-4">
          <div className="mb-4 flex items-center">
            <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white/20 bg-blue-500 text-[0.6rem] font-bold leading-tight text-yellow-400 shadow-lg">
              <img
                className="rounded-xl"
                src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg"
                alt=""
              />
              <div className="text-center">
                {/* {job.company ? job.company.slice(0, 2) : "NA"}
                <br />
                {job.company || "N/A"} */}
              </div>
            </div>
            <div>
              <h2
                title={job.title}
                className="truncate text-lg font-bold text-white/90"
              >
                {job.title}
              </h2>
              <h2 className="truncate text-xs font-bold text-green-500/90">
                sr.{job.user_first_name} {job.user_last_name}
              </h2>
              <span className="mt-1 inline-block rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300/90">
                {job.open_jobs ? "Open" : "Closed"}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="mb-2 text-xs font-semibold text-white/80">
              Description
            </h3>
            <div className="-mx-1 flex">
              <div className="m-0.5 rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-xs font-medium text-white/70 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                <p>{job.description || "No description available."}</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="mb-2 text-xs font-semibold text-white/80">
              Job Information
            </h3>
            <ul className="grid grid-cols-1 gap-1 text-xs text-white/60">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="mr-1 h-3 w-3 text-green-500/70"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <span title="Duration" className="truncate">
                  {job.time_frame || "N/A"}
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="mr-1 h-3 w-3 text-green-500/70"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <span title="Location" className="truncate">
                  {job.location || "N/A"}
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="mr-1 h-3 w-3 text-green-500/70"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <span title="Pay" className="truncate">
                  {job.pay || "N/A"} ph
                </span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between space-x-2">
            <button className="flex flex-1 items-center justify-center rounded-lg border border-green-400/20 bg-green-500/10 px-3 py-2 text-xs font-medium text-white/90 transition duration-300 ease-in-out hover:bg-green-500/20">
              Accept
            </button>
            <button className="flex flex-1 items-center justify-center rounded-lg bg-green-500/20 px-3 py-2 text-xs font-medium text-white transition duration-300 ease-in-out hover:bg-green-500/30">
              Make Offers
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

BookingCard.propTypes = {
  job: PropTypes.object,
};
export default BookingCard;
