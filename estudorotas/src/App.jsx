import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/Home";
import SaoPaulo from "./paginas/SaoPaulo";
import RioJaneiro from "./paginas/RioJaneiro";
import MinasGerais from "./paginas/MinasGerais";
import EspiritoSanto from "./paginas/EspiritoSanto";
import "./App.css";

import Parana from "./paginas/Parana";
import SantaCatarina from "./paginas/SantaCatarina";
import RioGrandeSul from "./paginas/RioGrandeSul";
import Acre from "./paginas/Acre";
import Amapa from "./paginas/Amapá";
import Tocantins from "./paginas/Tocantins";


export default function App()
{
    return (
       
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/sp" element={<SaoPaulo/>} />
         <Route path="/rj" element={<RioJaneiro/>} />
         <Route path="/mg" element={<MinasGerais/>} />
         <Route path="/es" element={<EspiritoSanto/>} />

         <Route path="/pr" element={<Parana/>} />
         <Route path="/sc" element={<SantaCatarina/>} />
         <Route path="/rs" element={<RioGrandeSul/>} />
       </Routes>
       </BrowserRouter>
    );
}