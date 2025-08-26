
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/Home";
import "./App.css";

import Apenasumshow from "./paginas/Apenasumshow";
import Horadeaventura from "./paginas/Horadeaventura";
import Oincrivelmundodegumball from "./paginas/Oincrivelmundodegumball";
import OsSimpsons from "./paginas/OsSimpisons";

export default function App()
{
    return (
       
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/Apenasumshow" element={<Apenasumshow/>} />
         <Route path="/Horadeaventura" element={<Horadeaventura/>} />
         <Route path="/Oincrivelmundodegumball" element={<Oincrivelmundodegumball/>} />
         <Route path="/OsSimpsons" element={<OsSimpsons/>} />
         </Routes>
         </BrowserRouter>
      )
}