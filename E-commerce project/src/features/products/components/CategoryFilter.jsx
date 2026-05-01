const CategoryFilter = ({ categoryList, setCategorySelected, categorySelected }) => {
    return (
        <div>
            <p className="text-lg font-medium text-gray-800 pb-2">Cateogory</p>
            {/* All Category Option */}
            <div className="flex items-center gap-2">
                <input
                    type="radio"
                    name="cateogory"
                    id="All"
                    value="All"
                    checked={categorySelected === "All"}
                    onChange={(e) => setCategorySelected(e.target.value)}
                />
                <label htmlFor="All">All</label>
            </div>

            {/* Individual Categories */}
            {
                categoryList?.map((categoryItem) => {
                    return (
                        <div key={categoryItem} className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="cateogory"
                                id={categoryItem}
                                value={categoryItem}
                                checked={categorySelected === categoryItem}
                                onChange={(e) => setCategorySelected(e.target.value)}
                            />
                            <label htmlFor={categoryItem}>{categoryItem}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryFilter