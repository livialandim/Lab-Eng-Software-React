import React, { useState, useEffect } from "react";

function Relogio() {
    const [hora, setHora] = useState("");

    useEffect(() => {
        const intervalo = setInterval(() => {
            const data = new Date();
            const hora = data.getHours().toString().padStart(2, "0");
            const minuto = data.getMinutes().toString().padStart(2, "0");
            const segundos = data.getSeconds().toString().padStart(2, "0");
            setHora(`${hora}:${minuto}:${segundos}`);
        }, 1000);

        return () => clearInterval(intervalo); // Limpar intervalo quando o componente for desmontado
    }, []);

    return (
        <h1>{hora}</h1>
    );
}

export default Relogio;