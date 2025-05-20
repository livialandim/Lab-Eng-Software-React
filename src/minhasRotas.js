import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atividade1 from "./Atividade1";
import Atividade2 from "./Atividade2";
import Atividade3 from "./Atividade03/Atividade3";

export default function MinhasRotas() {
    return (
        // Todas as rotas devem estar aqui dentro do BrowserRouter
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/atividade1" element = {<Atividade1 />} />
                <Route path = "/atividade2" element = {<Atividade2 />} />
                <Route path = "/atividade3" element = {<Atividade3 />} />
            </Routes>
        </BrowserRouter>
    );
}