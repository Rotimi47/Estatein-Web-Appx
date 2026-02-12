import React from 'react'
import { Search } from 'lucide-react'

const SearchForm = () => {
  return (
    <div>
        <form className='relative w-full max-w-6xl shadow-[0_0_12px_#333] lg:mx-auto '>
                    <input 
                        type="email"
                        placeholder= 'Search For A Property' 
                        className='w-full flex-1 rounded-lg border border-neutral-700 bg-transparent px-4 py-3.5  pr-12 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 '
                        required
                    />

                    <button
                        type="submit"
                        className="
                        absolute right-1 top-1/2 -translate-y-1/2
                        rounded-md p-2 text-neutral-400
                        hover:text-white hover:bg-neutral-800
                        transition
                        "
                        aria-label="Submit email"
                    >
                        <div className="bg-[#703BF7] p-3.5 rounded-lg flex items-center justify-center">
                            <Search className="h-3 w-3 text-white" />
                        </div>

                    </button>

        </form>

    </div>
  )
}

export default SearchForm