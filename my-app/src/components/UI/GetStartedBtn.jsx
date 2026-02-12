import React from "react";
import { Link } from "react-router-dom";



const GetStartedBtn = () => {
  return (
    <div>
        <button className='rounded-md border border-neutral-700 bg-black py-3.5 px-5'>
            <Link to="/get-started">Get Started</Link>
        </button>

    </div>
  )
}

export default GetStartedBtn;