const CategoryFilter = ({categoryList}) => {
    return (
        <div>
            <p className="text-lg font-medium text-gray-800 pb-2">Cateogory</p>
            {
                categoryList.map((categoryItem) => {
                    return (
                        <div key={categoryItem} className="flex items-center gap-2">
                            <input type="radio" name="cateogory" id={categoryItem} value={categoryItem} />
                            <label htmlFor={categoryItem}>{categoryItem}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryFilter