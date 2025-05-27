import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/Atividade1">Semana 1</Link>
                    </li>
                    <li>
                        <Link to="/Atividade2">Semana 2</Link>
                    </li>
                    <li>
                        <Link to="/Atividade3">Semana 3</Link>
                    </li>
                    <li>
                        <Link to="/Atividade4">Semana 4</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;