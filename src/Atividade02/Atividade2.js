import { Link } from "react-router-dom";
import Contador from "./Contador";

export default function Atividade2() {
    return (
        <>
            <Link to="/">Voltar</Link>

            <h1>Semana 2</h1>

            <h2>Contador</h2>
                <Contador />

        </>
    );
}