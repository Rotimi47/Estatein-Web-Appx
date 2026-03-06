import React from 'react'
import { Link } from "react-router-dom";

const BrowseBtn = () => {
  return (
    <div>
        <button className='w-full lg:w-38 text-sm py-3.5 px-5 bg-[#703BF7] rounded-md text-white transition-all duration-300 ease-in-out hover:bg-linear-to-r hover:from-[#7C4DFF] hover:to-[#9B6BFF] hover:shadow-lg hover:shadow-[#703BF7]/50 hover:-translate-y-0.5 hover:scale-[1.03]'>
            <Link to="/properties">Browse properties </Link>
        </button>
    </div>
  )
}

export default BrowseBtn;