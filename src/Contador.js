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

    return (
        <div className="flex flex-col items-center p-6 space-y-6">
            <p className="text-3xl font-bold">Total</p>
            <p className="text-2xl border px-6 py-2 rounded">{total}</p>

            <div className="flex space-x-16">
                <div className="mt-2 text-xl">Homens</div>
                <div className="flex flex-col items-center">
                    <div className="flex space-x-2 mt-2">
                        <button onClick={AdicionarH} className="text-green-500 text-2xl">➕</button>
                        <button onClick={SubtrairH} className="text-red-500 text-2xl">➖</button>
                    </div>
                    <div className="border px-4 py-1 mt-1 text-lg">{homem}</div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="mt-2 text-xl">Mulheres</div>
                    <div className="flex space-x-2 mt-2">
                        <button onClick={AdicionarM} className="text-green-500 text-2xl">➕</button>
                        <button onClick={SubtrairM} className="text-red-500 text-2xl">➖</button>
                    </div>
                    <div className="border px-4 py-1 mt-1 text-lg">{mulher}</div>
                </div>
            </div>
        </div>
    )
}