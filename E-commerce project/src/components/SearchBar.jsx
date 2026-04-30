import { IoSearch } from "react-icons/io5"

const SearchBar = () => {
    return (
        <div className="outline-1 outline-gray-600 rounded-sm w-60 px-2 py-1 flex items-center gap-2 bg-white">
            <IoSearch />
            <input type="text" placeholder="Search here.." className="outline-none" className="bg-white" />
        </div>
    )
}

export default SearchBar