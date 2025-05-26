import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";

export default function Atividade1() {
    return (
        <>
            <Link to = "/">Voltar</Link>

            <h1>Semana 1</h1>

            <h2>Relógio</h2>
                <Relogio />
            
            <h2>Letreiro</h2>
                <Letreiro />

        </>
    );
}