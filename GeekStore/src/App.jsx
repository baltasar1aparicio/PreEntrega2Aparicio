import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from './Components/CartWidget/CartWidget'
import Error from './Components/Error/Error'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <NavBar />
       <Routes>
         <Route path={"/"} element={<ItemListContainer />} />
         <Route path={"/category/:id"} element={<ItemListContainer />} />
         <Route path={"/item/:id"} element={<ItemDetailContainer />} />
         <Route path={"/cart"} element={<CartWidget />} />
         <Route path={"*"} element={<Error />} />
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App
