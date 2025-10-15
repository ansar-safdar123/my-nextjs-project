import React, { useState } from "react";

const Calculation = () => {
  const [pack, setPack] = useState("");
  const [serverSeed, setServerSeed] = useState("");
  const [clientSeed, setClientSeed] = useState("");
  const [nonce, setNonce] = useState("");

  const packs = [
    "Aetherdrift",
    "Archazias Island",
    "Azurite Sea",
    "Bloomburrow",
    "Chilling Reign",
    "Commander Masters",
    "Destined Rivals",
    "Duskmourn House of Horror",
    "Evolving Skies",
    "Fusion Strike",
    "Innistrad Remastered",
    "Into the Inklands",
    "Journey Together",
    "March of the Machine",
    "Outlaws of Thunder Junction",
    "Paldea Evolved",
    "Paldean Fates",
    "Phyrexia All Will Be One",
    "Prismatic Evolutions"
  ];

  return (
    <div className=" flex items-center py-10 justify-center text-gray-200 ">
      <div className="w-full max-w-3xl bg-[#131328] rounded-2xl shadow-lg p-4 md:p-8 space-y-6 border border-gray-700">
        
        <div>
          <label className="block font-semibold mb-2 text-gray-300">Pack</label>
           <div className="relative">
            <select
              value={pack}
              onChange={(e) => setPack(e.target.value)}
              className="w-full appearance-none bg-[#1A1A2E] text-gray-200 border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-blue-500 cursor-pointer overflow-y-auto no-scrollbar"
            >
              <option value="" className="bg-[#1A1A2E] text-gray-200">
                Select Pack
              </option>
              {packs.map((p, i) => (
                <option key={i} value={p} className="bg-[#1A1A2E] text-gray-200">
                  {p}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </span>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-300">Server Seed</label>
          <input
            type="text"
            value={serverSeed}
            onChange={(e) => setServerSeed(e.target.value)}
            placeholder=""
            className="w-full bg-transparent border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-300">Client Seed</label>
          <input
            type="text"
            value={clientSeed}
            onChange={(e) => setClientSeed(e.target.value)}
            placeholder=""
            className="w-full bg-transparent border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-300">Nonce</label>
          <input
            type="text"
            value={nonce}
            onChange={(e) => setNonce(e.target.value)}
            placeholder=""
            className="w-full bg-transparent border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="border border-dotted border-gray-600 rounded-lg p-8 h-40 flex items-center justify-center text-center text-gray-400">
          {pack && serverSeed && clientSeed && nonce
            ? "✅ Ready to verify result"
            : "More inputs are required to verify result"}
        </div>
      </div>
    </div>
  );
};

export default Calculation;
