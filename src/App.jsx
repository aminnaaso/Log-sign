import { Routes, Route } from "react-router"
import AuthLayout from "./Layouts/AuthLayout"
import MainLayout from "./Layouts/MainLayout"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/SignUp/SignUp"
import Home from "./Pages/Home/Home"
import "./../src/assets/styles.css"
const App = () => {
  return (
    <div className="font-bold bg-gradient-to-r  from-[#b20b1f] to-[#490d1f]  h-screen w-full">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
        </Route>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
