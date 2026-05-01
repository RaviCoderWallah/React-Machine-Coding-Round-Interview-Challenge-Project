import useFetch from "../hooks/useFetch";
import LoadingSkeleton from "../features/products/components/LoadingSkeleton";
import ProductList from "../features/products/components/ProductList";
import SidebarControls from "../features/products/components/SidebarControls";
import { useState } from "react";

const totalPages = 32;

const Product = () => {
  const [productSkip, setProductSkip] = useState(0);
  const [categorySelected, setCategorySelected] = useState("All");

  // For Pagination 
  const PRODUCT_API = `https://dummyjson.com/products?limit=6&skip=${productSkip}`;
  const { data, error, loading } = useFetch(PRODUCT_API);
  if (error) console.error(error);

  //For Show All Category List in Sidebar Controls
  const CATEGORY_LIST_API = "https://dummyjson.com/products/category-list";
  const { data: categoryList, error: categoryError} = useFetch(CATEGORY_LIST_API);
  if(categoryError) console.error(categoryError);

  //For Get All Date Based Upon Category Filtered - Only fetch when category is NOT "All"
  const SEARCH_BY_CATEGORY_API = categorySelected !== "All" 
    ? `https://dummyjson.com/products/category/${categorySelected}`
    : null;
  const {data: filteredCategoryData, error: filteredCategoryError } = useFetch(SEARCH_BY_CATEGORY_API);
  if(filteredCategoryError) console.error(filteredCategoryError);

  // Determine which data to show
  const dataToShow = categorySelected === "All" ? data : filteredCategoryData;

  return (
    <div className="max-w-5xl mx-auto my-8 bg-white p-2 grid grid-cols-10 gap-8">


      {/* Sidebar Filters Controls - Search Bar, Category and more.. */}
      <SidebarControls
        categoryList={categoryList}
        setCategorySelected={setCategorySelected}
        categorySelected={categorySelected}
      />

      {/* Show Loading Skeleton Cards  */}
      {
        loading && <LoadingSkeleton initialCount={6} />
      }

      {/* Pass Product All Data and Show Product List  */}
      <ProductList
        data={dataToShow}
        totalPages={totalPages}
        setProductSkip={setProductSkip}
        productSkip={productSkip}
      />

    </div>
  )
}

export default Product