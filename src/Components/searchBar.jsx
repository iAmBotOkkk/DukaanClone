import { Search } from "lucide"

export const SearchBar = () => {
    return(
        <div className=" p-5 flex justify-around ml-20 mr-20 gap-2  ">
            <input className='bg-gray-100 w-full p-2 rounded-md' 
            type="text" placeholder="Search for Products"/>
            <button className="border border-gray-200 p-3 rounded-md text-white bg-gray-300 "><img  src="search.svg" alt=""/></button>
        
        </div>
    )
}