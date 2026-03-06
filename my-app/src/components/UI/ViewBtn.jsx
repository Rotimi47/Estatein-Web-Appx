import { Link } from "react-router-dom";

const ViewBtn = ({ id }) => {
  if (!id) return null; // safety guard

  return (
    <Link
      to={`/properties/${id}`}
      className=" lg:w-38 text-sm py-3.5 px-5 lg:px-0 bg-[#703BF7] rounded-md text-center inline-block text-white transition-all duration-300 ease-in-out hover:bg-linear-to-r hover:from-[#7C4DFF] hover:to-[#9B6BFF] hover:shadow-lg hover:shadow-[#703BF7]/50 hover:-translate-y-0.5 hover:scale-[1.03]"
    >
      View Property Details
    </Link>
  );
};

export default ViewBtn;
