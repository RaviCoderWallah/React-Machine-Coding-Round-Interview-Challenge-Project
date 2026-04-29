import { Outlet } from "react-router"
import GlobalHeader from "./components/GlobalHeader"

const App = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <GlobalHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App