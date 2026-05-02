import SearchBar from "../../../components/SearchBar"
import CategoryFilter from "./CategoryFilter"

const SidebarControls = ({
    categoryList,
    setCategorySelected,
    categorySelected,
    setSearchInputValue,
    searchInputValue
}) => {
    return (
        <div className="flex flex-col gap-8 bg-purple-50 col-span-3 p-6 pl-4 rounded-sm">
            <SearchBar
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
            />
            <CategoryFilter
                categoryList={categoryList}
                setCategorySelected={setCategorySelected}
                categorySelected={categorySelected}
            />
        </div>
    )
}

export default SidebarControls