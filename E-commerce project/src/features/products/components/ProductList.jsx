import ProductCard from "./ProductCard"

const ProductList = ({
    data,
    totalPages,
    productSkip,
    setProductSkip
}) => {

    //Find out current product page
    const currentProductPage = (productSkip / 6) + 1;

    //Handle Previous Page Pagination
    const handlePreviousProduct = () => {
        if (currentProductPage === 1) return;
        setProductSkip((prev) => prev - 6);
    }

    //Handles Next Page Pagination
    const handleNextProduct = () => {
        if(currentProductPage === totalPages) return;
        setProductSkip((prev) => prev + 6);
    }


    return (
        <>
            <div className="grid grid-cols-3 gap-4 col-span-7 rounded-sm">
                {
                    data?.products.map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
                {/* Pagination  */}
                <div className="col-span-3 flex items-center mx-auto gap-4">
                    <button
                        className={`${currentProductPage === 1 ? "bg-gray-300 text-gray-800 cursor-no-drop" : "bg-green-700 text-white cursor-pointer"}  px-2 py-1 rounded-sm`}
                        onClick={handlePreviousProduct}
                    >
                        Previous
                    </button>
                    <div className="p-2 flex gap-2">
                        <p>Page {currentProductPage} of {totalPages} </p>
                    </div>
                    <button
                        className={`${currentProductPage === totalPages ? "bg-gray-300 text-gray-800 cursor-no-drop" : "bg-green-700 text-white cursor-pointer"}  px-2 py-1 rounded-sm`}
                        onClick={handleNextProduct}
                    >
                        Next
                    </button>
                </div>
            </div>


        </>
    )
}

export default ProductList