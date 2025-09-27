import { Outlet } from "react-router"
import Navbar from "./components/navbar"

function App() {
    return (
        <div className="bg-base-200 flex flex-col gap-1">
            <div>
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default App
