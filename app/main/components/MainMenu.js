import React from "react";
import Link from "next/link";

export default function MainMenu() {
  return (
    <div className="bg-[#F2F2F2] rounded-2xl p-4 w-[80%] h-[320px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-orange-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
            AF
          </div>
          <span className="ml-2 text-gray-700 text-sm">Anderson Floriano</span>
        </div>
      </div>
      <div className="mb-2">
        <input
          type="search"
          placeholder="Buscar..."
          className="w-full p-3 text-sm rounded-xl border bg-gray-200 text-slate-400"
        />
      </div>
      <div className="flex flex-col">
        <Link
          href="/main/my-forms"
          className="text-[#606060] hover:bg-[#c13f0b] hover:text-white focus:bg-[#E0783E] focus:text-white rounded-lg p-2 text-sm mb-2 p-4"
        >
          MEUS FORMULARIOS
        </Link>
        <Link
          href="/main/templates"
          className="text-[#606060] hover:bg-[#c13f0b] hover:text-white focus:bg-[#E0783E] focus:text-white rounded-lg p-2 text-sm mb-2 p-4"
        >
          TEMPLATES
        </Link>
        <Link
          href="/main/upload"
          className="text-[#606060] hover:bg-[#c13f0b] hover:text-white focus:bg-[#E0783E] focus:text-white rounded-lg p-2 text-sm mb-2 p-4"
        >
          UPLOAD DE ARQUIVO
        </Link>
      </div>
    </div>
  );
}
