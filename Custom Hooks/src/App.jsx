import { useState } from "react";
// import LoginForm from "./components/LoginForm";
import useLocalStorage from "./hooks/useLocalStorage";
// import UserList from "./components/UserList";

const App = () => {
  const [value, setValue] = useState("");
  const {
    handleSetItem,
    handleGetItem, 
    handleRemoveItem,
    data
  } = useLocalStorage("Username", value);

  console.log(handleGetItem, data);

  return (
    <div>
      <>
        <input type="text" onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleSetItem}>Submit</button>
        <button onClick={handleRemoveItem}>Remove</button>
        {/* <LoginForm/> */}
        {/* <UserList /> */}
      </>
    </div>
  )
}

export default App