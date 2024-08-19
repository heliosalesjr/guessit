"use client";

import React from "react";

export default function Action() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-pink-600 text-center p-8">
      <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
      Descubra o Número Secreto!
      </h1>
      <p className="text-lg text-white max-w-lg mb-6">
      Reúna seus amigos, crie um jogo e veja quem consegue desvendar o mistério primeiro. Adivinhe o número certo com menos tentativas e alcance o topo do placar. Você está preparado para o desafio?
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-purple-400 text-black font-bold rounded-lg hover:bg-pink-300 transition-colors">
          Novo jogo
        </button>
        <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors">
          Jogo existente
        </button>
      </div>
    </div>
  );
}
