import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HOME, LOGIN, VIEW, EDITAR, CREAR, HOMEBOARD } from "./Routers/router";
import './App.css'

import LoginPage from "./Pages/LoginPage"; 
import ViewPage from "./Pages/ViewPage"; 
import EditPage from "./Pages/EditPage"; 
import CrearPage from "./Pages/CrearPage";
import HomeBoard from "./Pages/HomeBoard";


function App() {
  

  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<LoginPage />} /> {/* nombre de los archivos de las páginas */}
        <Route path={HOME} element={<Home />} />
        <Route path={HOMEBOARD} element={<HomeBoard />} />
        <Route path={VIEW} element={<ViewPage />} />
        <Route path={EDITAR} element={<EditPage />} />
        <Route path={CREAR} element={<CrearPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
