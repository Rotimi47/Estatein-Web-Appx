import React from 'react'
import { Link } from "react-router-dom";

const BrowseBtn = () => {
  return (
    <div>
        <button className='w-full lg:w-38 text-sm py-3.5 px-5 bg-[#703BF7] rounded-md'>
            <Link to="/properties">Browse properties </Link>
        </button>
    </div>
  )
}

export default BrowseBtn;