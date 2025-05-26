import React, { useState, useEffect } from "react";
import "./contador.css";

export default function Contador() {
    const [homem, setHomem] = useState(0);
    const [mulher, setMulher] = useState(0);
    const total = homem + mulher;

    function AdicionarH() {
        setHomem(homem + 1);
    };

    function SubtrairH() {
        if (homem > 0)
            setHomem(homem - 1);
    };

    function AdicionarM() {
        setMulher(mulher + 1);
    }

    function SubtrairM() {
        if (mulher > 0)
            setMulher(mulher - 1);
    }

    function Resetar() {
        setHomem(0);
        setMulher(0);
    }

    return (
        <div className="contador">
            <div className="total-container">
                <p className="total-label">Total</p>
                <button onClick={Resetar} title="Resetar">🔄</button>
            </div>
            <p className="total-numero">{total}</p>

            <div className="pessoas-container">
                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" alt="Homem" />
                    <div className="card-title">Homens</div>
                    <div className="botoes">
                        <button onClick={AdicionarH}>➕</button>
                        <button onClick={SubtrairH}>➖</button>
                    </div>
                    <div className="contagem">{homem}</div>
                </div>

                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/1995/1995522.png" alt="Mulher" />
                    <div className="card-title">Mulheres</div>
                    <div className="botoes">
                        <button onClick={AdicionarM}>➕</button>
                        <button onClick={SubtrairM}>➖</button>
                    </div>
                    <div className="contagem">{mulher}</div>
                </div>
            </div>
        </div>
    );

}