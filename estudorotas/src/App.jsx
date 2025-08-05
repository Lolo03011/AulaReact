import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/Home";
import SaoPaulo from "./paginas/SaoPaulo";
import RioJaneiro from "./paginas/RioJaneiro";
import MinasGerais from "./paginas/MinasGerais";
import EspiritoSanto from "./paginas/EspiritoSanto";

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
       </Routes>
       </BrowserRouter>
    );
}