import React, { useState, useEffect } from "react";


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
        <div className="flex flex-col items-center p-6 space-y-6">
            <div className="flex items-center space-x-4">
                <p className="text-3xl font-bold">Total</p>
                <button onClick={Resetar} className="text-2xl">🔄</button>
            </div>
            <p className="text-2xl border px-6 py-2 rounded">{total}</p>

            <div className="flex space-x-16">

                <div className="flex flex-col items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                        alt="Homem"
                        className="w-20 h-20 mb-2"
                    />
                    <div className="mt-2 text-xl">Homens</div>
                    <div className="flex space-x-2 mt-2">
                        <button onClick={AdicionarH} className="text-green-500 text-2xl">➕</button>
                        <button onClick={SubtrairH} className="text-red-500 text-2xl">➖</button>
                    </div>
                    <div className="border px-4 py-1 mt-1 text-lg">{homem}</div>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1995/1995522.png"
                        alt="Mulher"
                        className="w-20 h-20 mb-2"
                    />
                    <div className="mt-2 text-xl">Mulheres</div>
                    <div className="flex space-x-2 mt-2">
                        <button onClick={AdicionarM} className="text-green-500 text-2xl">➕</button>
                        <button onClick={SubtrairM} className="text-red-500 text-2xl">➖</button>
                    </div>
                    <div className="border px-4 py-1 mt-1 text-lg">{mulher}</div>
                </div>
            </div>
        </div>
    );

}