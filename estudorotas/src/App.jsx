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
import Amazonas from "./paginas/Amazonas";
import Rondonia from "./paginas/Rondônia";
import Roraima from "./paginas/Roraima";
import Pará from "./paginas/Pará";

import Alagoas from "./paginas/Alagoas";
import Bahia from "./paginas/Bahia";
import Ceará from "./paginas/Ceará";
import Maranhão from "./paginas/Maranhão";
import Paraíba from "./paginas/Paraíba";
import Piauí from "./paginas/Piauí";
import RioGrandeNorte from "./paginas/RioGrandeNorte";
import Sergipe from "./paginas/Sergipe";


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

         <Route path="/ac" element={<Acre/>} />
         <Route path="/ap" element={<Amapa/>} />
         <Route path="/to" element={<Tocantins/>} />
         <Route path="/pa" element={<Pará/>} />
         <Route path="/am" element={<Amazonas/>} />
         <Route path="/ro" element={<Rondonia/>} />
         <Route path="/rr" element={<Roraima/>} />

         <Route path="/al" element={<Alagoas/>} />
         <Route path="/ba" element={<Bahia/>} />
         <Route path="/ce" element={<Ceará/>} />
         <Route path="/ma" element={<Maranhão/>} />
         <Route path="/pb" element={<Paraíba/>} />
         <Route path="/pi" element={<Piauí/>} />
         <Route path="/rn" element={<RioGrandeNorte/>} />
         <Route path="/se" element={<Sergipe/>} />
       </Routes>
       </BrowserRouter>
    );
}