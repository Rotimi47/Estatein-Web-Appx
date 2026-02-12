import React from 'react'
import { Send } from "lucide-react";

const Email = () => {
  return (
    <div className=''>
        <form className='relative w-full max-w-md'>
            <input 
            type="email"
            placeholder= 'Enter Your Email' 
            className='w-full flex-1 rounded-lg border border-neutral-700 bg-transparent px-4 py-3  pr-12 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 '
            required
            />

              <button
                type="submit"
                className="
                  absolute right-2 top-1/2 -translate-y-1/2
                  rounded-md p-2 text-neutral-400
                  hover:text-white hover:bg-neutral-800
                  transition
                "
                aria-label="Submit email"
              >
                 <Send className="h-5 w-5" />
              </button>

        </form>
    </div>
  )
}

export default Email