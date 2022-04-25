import { parseCookies } from "nookies";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/index";
import { ProductsProvider } from "./hooks/useProducts";
import  {Login}  from "./pages/Login/index";
import { ProductsTable } from "./pages/ProductsTable";
import { RegisterUser } from "./pages/RegisterUser";
import "./styles/global.scss"

export function App() {

  return (
    <ProductsProvider>
        <div className="App">
          <Header/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/Register_User" element={<RegisterUser />} />
              <Route path="/Products" element={<ProductsTable />} />
            </Routes>
          </BrowserRouter>,
        </div>
      </ProductsProvider>
  );
}

export default App;
