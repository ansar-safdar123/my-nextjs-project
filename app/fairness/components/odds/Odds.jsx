
import React, { useState } from 'react'
import AllCards from './components/AllCards';
import { cardsData } from './components/cardData'

const tabs = [
  { id: 'all', label: 'ALL' },
  { id: 'pokemon', label: 'POKEMON' },
  { id: 'lorcana', label: 'LORCANA' },
  { id: 'magic', label: 'MAGIC' },
];

const Odds = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Filter cards based on active tab
  const filteredCards = activeTab === 'all' 
    ? cardsData 
    : cardsData.filter(card => card.series.toUpperCase() === activeTab.toUpperCase());

  return (
    <div className="relative text-white">
      {/* Tabs Header */}
      <div className="flex font-teko font-light text-[14px] md:text-[20px] flex-wrap justify-center gap-3 mb-6 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 pt-1 mt-2 text-white rounded-full transition-all duration-200 ${activeTab === tab.id
                ? 'bg-[#000000800] border border-gray-500'
                : 'hover:text-white border border-transparent hover:bg-gray-700'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Display Pokemon component with filtered data */}
      <AllCards data={filteredCards} />
    </div>
  )
}

export default Odds
