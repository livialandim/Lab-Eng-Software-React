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
        <div className="flex flex-col items-center p-8 bg-white rounded-md shadow-md space-y-6">
            <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-semibold">Total</h1>
                <button
                    onClick={Resetar}
                    className="text-2xl hover:rotate-90 transition-transform duration-300"
                    title="Resetar"
                >
                    🔄
                </button>
            </div>

            <div className="text-2xl font-bold border px-8 py-2 rounded bg-gray-100">
                {total}
            </div>

            <div className="flex space-x-20 mt-4">
                <div className="flex flex-col items-center space-y-2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                        alt="Homem"
                        className="w-16 h-16"
                    />
                    <div className="text-xl font-medium">Homens</div>
                    <div className="flex space-x-3">
                        <button
                            onClick={AdicionarH}
                            className="text-green-600 text-3xl hover:scale-110 transition"
                        >
                            ➕
                        </button>
                        <button
                            onClick={SubtrairH}
                            className="text-red-600 text-3xl hover:scale-110 transition"
                        >
                            ➖
                        </button>
                    </div>
                    <div className="border mt-1 px-5 py-1 text-lg bg-gray-50 rounded">
                        {homem}
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1995/1995522.png"
                        alt="Mulher"
                        className="w-16 h-16"
                    />
                    <div className="text-xl font-medium">Mulheres</div>
                    <div className="flex space-x-3">
                        <button
                            onClick={AdicionarM}
                            className="text-green-600 text-3xl hover:scale-110 transition"
                        >
                            ➕
                        </button>
                        <button
                            onClick={SubtrairM}
                            className="text-red-600 text-3xl hover:scale-110 transition"
                        >
                            ➖
                        </button>
                    </div>
                    <div className="border mt-1 px-5 py-1 text-lg bg-gray-50 rounded">
                        {mulher}
                    </div>
                </div>
            </div>
        </div>
    );

}