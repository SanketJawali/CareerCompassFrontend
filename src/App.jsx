import { Link, Outlet } from "react-router"
import Navbar from "./components/navbar"

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default App
