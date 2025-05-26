import React, { useState, useEffect } from "react";

function Letreiro() {
    const texto = "Conheça a Fatec";
    const [textoExibido, setTextoExibido] = useState("");
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        if (indice < texto.length) {
            const timeout = setTimeout(() => {
                setTextoExibido((anterior) => anterior += texto[indice]);
                setIndice((anterior) => anterior + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setTextoExibido("");
                setIndice(0);
            }, 1000);
        }
    }, [indice]);

    return (
        <h1>{textoExibido}</h1>
    )
}
export default Letreiro;