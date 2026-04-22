import { useEffect, useState } from "react"

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const limit = 6;

  useEffect(() => {
    async function fetchingCartData() {
      const skip = (currentPage - 1) * limit;
      let response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      let result = await response.json();
      setData(result.products);
    }
    fetchingCartData();
  }, [currentPage])

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  }

  const handleNextPage = () => {
    if (currentPage < 5) setCurrentPage((prev) => prev + 1);
  }

  return (
    <div className="max-w-4xl mx-auto my-8 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-semibold text-center">Pagination</h1>
      <div className="flex items-center gap-4 mx-auto">
        <button
          className={`${currentPage !== 1 ? "bg-blue-600 text-white cursor-pointer" : "bg-gray-100 text-black cursor-no-drop"}  px-2 py-1`}
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        <p className="text-xl">Page <span className="font-semibold">{currentPage} </span>of 5</p>
        <button
          className={`${currentPage !== 5 ? "bg-blue-600 text-white cursor-pointer" : "bg-gray-100 text-black cursor-no-drop"} px-2 py-1`}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          data?.length > 0 && data?.map((item) => {
            return <div key={item.id} className="outline-1 p-4 rounded-md bg-gray-50 shadow-sm">
              <img src={item.thumbnail} alt={item.title} className="max-w-30" />
              <h1 className="text-xl font-semibold text-gray-900">{item.title}</h1>
              <p className="my-2">Price: ${item.price}</p>
              <ul className="flex items-center gap-4">
                <li className="py-0 px-2 bg-blue-600 text-white">{item.category}</li>
                <li className="py-0 px-2 bg-black text-white">{item.brand}</li>
              </ul>
            </div>
          })
        }
      </div>


    </div>
  )
}

export default App