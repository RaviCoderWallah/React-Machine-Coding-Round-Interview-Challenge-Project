import useFetch from "../hooks/useFetch";
import LoadingSkeleton from "../features/products/components/LoadingSkeleton";
import ProductList from "../features/products/components/ProductList";
import SidebarControls from "../features/products/components/SidebarControls";

const PRODUCT_API = "https://dummyjson.com/products?limit=6&skip=0";

const Product = () => {

  const categoryList = ["All", "Beauty", "Fragrances", "Furniture", "Groceries"];
  const { data, error, loading } = useFetch(PRODUCT_API);
  if (error) console.log(error); 

  return (
    <div className="max-w-5xl mx-auto my-8 bg-white p-2 grid grid-cols-10 gap-8">

      {/* Sidebar Filters Controls - Search Bar, Category and more.. */}
      <SidebarControls categoryList={categoryList} />

      {/* Show Loading Skeleton Cards  */}
      {
        loading && <LoadingSkeleton initialCount={6} />
      }

      {/* Pass Product All Data and Show Product List  */}
      <ProductList data={data} />
    </div>
  )
}

export default Product