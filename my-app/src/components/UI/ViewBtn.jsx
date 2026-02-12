import { Link } from "react-router-dom";

const ViewBtn = ({ id }) => {
  if (!id) return null; // safety guard

  return (
    <Link
      to={`/properties/${id}`}
      className=" lg:w-38 text-sm py-3.5 px-5 lg:px-0 bg-[#703BF7] rounded-md text-center inline-block"
    >
      View Property Details
    </Link>
  );
};

export default ViewBtn;
