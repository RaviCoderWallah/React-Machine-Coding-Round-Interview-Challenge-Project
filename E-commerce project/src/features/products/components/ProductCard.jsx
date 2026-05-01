const ProductCard = ({ product }) => {
    return (
        <div key={product.id} className="bg-gray-100 outline-1 flex flex-col justify-between outline-gray-300 p-2 rounded-sm">
            <img src={product.thumbnail} className="w-18" alt="" />
            <div className="flex items-center justify-between">
                <h1 className="font-medium text-gray-800">{product.title}</h1>
                <p className="text-sm"><span className="font-semibold text-blue-600">${product.price}</span></p>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
                {
                    product.tags?.map((tag) => {
                        return <span key={tag} className="capitalize px-2 py-1 rounded-sm text-xs bg-orange-50 outline-1 outline-orange-200"> {tag}</span>
                    })
                }
            </div>
            <div>
                <p className="text-sm">Availability: <span className={`${product.availabilityStatus === "In Stock" ? "text-green-600" : "text-red-700"}`}>{product.availabilityStatus}</span></p>
                <p className="text-sm">Warranty: <span className="text-gray-700">{product.warrantyInformation}</span></p>
            </div>
            <button className="bg-blue-600 text-white py-1 rounded-sm hover:bg-blue-700 cursor-pointer text-sm">View Details</button>
        </div>
    )
}

export default ProductCard