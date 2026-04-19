import { useEffect, useState } from "react"

const App = () => {
  const [searchItem, setSearchItem] = useState("");
  const [data, setData] = useState([]);
  const [foodList, setFoodList] = useState([]);

  //Handle user search food item
  const handleSearchItem = (e) => {
    setSearchItem(e.target.value);
  }

  //Calling fetch food data
  useEffect(() => {
    const fetchFood = async () => {
      if (searchItem.length > 2) {
        const foodApi = await fetch(`https://api.frontendeval.com/fake/food/${searchItem}`);
        const response = await foodApi.json();
        setData(response);
      } else {
        setData([]);
      }
    };

    fetchFood();
  }, [searchItem])

  //For new entry food list 
  const handleClickedSearchItem = (foodItem) => {
    setFoodList((prev) => [...prev, { name: foodItem, id: crypto.randomUUID(), isChecked: false }]);
  }

  //For Checked Toogle in List 
  const handleCheckedItem = (e) => {
    const targetId = e.currentTarget.id;
    setFoodList((prevList) => {
      return prevList.map((item) => {
        if (item.id === targetId) {
          return { ...item, isChecked: !item.isChecked }
        }
        return item;
      })
    });
  }

  //For Remove Specific Item in List Cart
  const handleDeleteItem = (e) => {
    const targetId = e.currentTarget.id;
    let updateFoodList = foodList.filter((item) => item.id !== targetId);
    setFoodList(updateFoodList);
  }


  return (
    <div className="max-w-4xl mx-auto my-8 text-center flex flex-col gap-6">
      <h1 className="text-3xl">Shopping List</h1>
      <div>
        {/* Search Bar  */}
        <input
          type="search"
          placeholder="Search food.."
          value={searchItem}
          onChange={handleSearchItem}
          className="outline-1 text-2xl p-1"
        />

        {/* Food Suggestion Show Container  */}
        {
          data.length > 0 && <div className="flex flex-col gap-2 max-w-71 mx-auto my-4 outline-1 p-4">
            {
              data?.map((item) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="bg-gray-200 hover:bg-gray-300 cursor-pointer"
                    onClick={() => handleClickedSearchItem(item)}
                  >
                    {item}
                  </div>
                )
              })
            }
          </div>
        }

        {/* Checked Item List  */}
        <div className="my-8">
          <h2>Your List</h2>
          <div className="max-w-71 min-h-44 mx-auto my-4 outline-1 p-4 flex flex-col gap-4">
            {
              foodList.length > 0 && foodList?.map(({ name, id, isChecked }) => {
                return (
                  <div key={crypto.randomUUID()} className="flex items-center justify-between bg-gray-100 outline-1 p-1">
                    <span
                      onClick={handleCheckedItem}
                      id={id}
                      className={`${isChecked ? "bg-black text-white" : "hover:bg-gray-300"} w-6 aspect-square rounded-full outline-1 flex items-center justify-center  cursor-pointer`}
                    >
                      ✓
                    </span>
                    <p className={`${isChecked ? "line-through" : ""}`}>{name}</p>
                    <span
                      onClick={handleDeleteItem}
                      id={id}
                      className="w-6 aspect-square rounded-full outline-1 flex items-center justify-center hover:bg-red-700 hover:text-white cursor-pointer"
                    >
                      X
                    </span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default App