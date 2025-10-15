import React, { useState } from "react";

const CardPool = () => {
  const [pack, setPack] = useState("");
  const [tag, setTag] = useState("");
  const [value, setValue] = useState("");

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

  const tags = [
    "Common",
    "Uncommon",
    "Rare",
    "Mythic",
    "Legendary",
    "Promo",
    "Full Art",
    "Secret Rare",
    "Ultra Rare",
    "Special Edition"
  ];

  return (
    <div className=" flex items-center justify-center text-gray-200 py-10 ">
      <div className="w-full max-w-3xl bg-[#131328] rounded-2xl shadow-lg p-4 md:p-8 space-y-6 border border-gray-700">
        
        {/* PACK SELECT */}
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

        {/* TAG SELECT */}
        <div>
          <label className="block font-semibold mb-2 text-gray-300">Tag</label>
          <div className="relative">
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="w-full appearance-none bg-[#1A1A2E] text-gray-200 border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-blue-500 cursor-pointer overflow-y-auto no-scrollbar"
            >
              <option value="" className="bg-[#1A1A2E] text-gray-200">
                Select Tag
              </option>
              {tags.map((t, i) => (
                <option key={i} value={t} className="bg-[#1A1A2E] text-gray-200">
                  {t}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </span>
          </div>
        </div>

        {/* VALUE INPUT */}
        <div>
          <label className="block font-semibold mb-2 text-gray-300">Value</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value (0 - 100)"
            className="w-full bg-[#1A1A2E] text-gray-200 border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* RESULT BOX */}
        <div className="border border-dotted border-gray-600 rounded-lg p-8 flex items-center justify-center h-40 text-center text-gray-400">
          {pack && tag && value
            ? `✅ ${pack} | ${tag} | Value: ${value}`
            : "More inputs are required to verify result"}
        </div>
      </div>
    </div>
  );
};

export default CardPool;
