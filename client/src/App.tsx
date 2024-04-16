import './App.css'
import {Navbar} from "./components/Navbar/Navbar.tsx";
import {Routes, Route, Navigate} from "react-router-dom";
import {Catalog} from "./components/Catalog/Catalog.tsx";
import {Cart} from "./components/Cart/Cart.tsx";
import {Info} from "./components/Info/Info.tsx";
import {WishList} from "./components/WishList/WishList.tsx";

function App() {

  return (
    <>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<Navigate to="/catalog" />} />
            <Route path={"/catalog"} element={<Catalog/>}/>
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/info"} element={<Info/>}/>
            <Route path={"/WishList"} element={<WishList/>}/>
        </Routes>
    </>
  )
}

export default App
