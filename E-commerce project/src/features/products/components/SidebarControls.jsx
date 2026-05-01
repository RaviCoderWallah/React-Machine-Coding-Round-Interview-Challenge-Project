import SearchBar from "../../../components/SearchBar"
import CategoryFilter from "./CategoryFilter"

const SidebarControls = ({ categoryList, setCategorySelected, categorySelected }) => {
    return (
        <div className="flex flex-col gap-8 bg-purple-50 col-span-3 p-6 pl-4 rounded-sm">
            <SearchBar />
            <CategoryFilter
                categoryList={categoryList}
                setCategorySelected={setCategorySelected}
                categorySelected={categorySelected}
            />
        </div>
    )
}

export default SidebarControls