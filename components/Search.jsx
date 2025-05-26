import React, { useState } from 'react'

const SearchSection = () => {
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <section className="px-4 py-6  bg-emerald-200 space-y-3  lg:h-30 lg:flex lg:gap-4  ">
             {/* <div className=" px-4  py-6 -mt-6  bg-emerald-200 rounded-xl shadow-lg p-4 space-y-4 lg:flex ">  */}
                {/* Location Dropdown */}
                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 border border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-600 lg:h-15"
                >
                    <option value="">Select Location</option>
                    <option value="ranchi">Ranchi</option>
                    <option value="jamshedpur">Jamshedpur</option>
                    <option value="dhanbad">Dhanbad</option>
                    <option value="bokaro">Bokaro</option>
                </select>

                {/* Category Dropdown */}
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 border border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-600 lg:h-15"
                >
                    <option value="">Select Category</option>
                    <option value="restaurants">Restaurants</option>
                    <option value="hotels">Hotels</option>
                    <option value="shopping">Shopping</option>
                    <option value="services">Services</option>
                </select>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="location"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 border border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-600c lg:h-15 "
                />

                {/* Search Button */}
                 
                <button
                    className="w-full p-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors font-semibold flex items-center justify-center gap-2 lg:h-15"
                >
                    <span>Search</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
             {/* </div>  */}
         </section>
    )
}

export default SearchSection 