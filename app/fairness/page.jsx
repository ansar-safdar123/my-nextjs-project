'use client';
import React from 'react'

import { useState } from 'react';

import Implementation from './components/Implementation';
import Conversation from './components/Conversation';
import Calculation from './components/Calculation';
import CardPool from './components/CardPool';
import Overview from './components/Overview';
import Odds from './components/odds/Odds';
import './style.css'

const tabs = [
  { id: 'odds', label: 'ODDS', component: <Odds /> },
  { id: 'over', label: 'OVERVIEW', component: <Overview /> },
  { id: 'impl', label: 'IMPLEMENTATION', component: <Implementation /> },
  { id: 'conv', label: 'CONVERSATION', component: <Conversation /> },
  { id: 'calc', label: 'CALCULATION', component: <Calculation /> },
  { id: 'pool', label: 'CARD POOL', component: <CardPool /> },
];

const page = () => {

  const [activeTab, setActiveTab] = useState('over');

  const currentTab = tabs.find(tab => tab.id === activeTab);
  return (
    <>
      <div className="relative text-white p-5">
        <h1 className='font-exo italic text-center font-extrabold text-3xl md:text-[40px]'>FAIRNESS</h1>
        {/* Tabs Header */}
        <div className="flex mt-5 font-exo italic font-extrabold text-[14px] md:text-[20px] flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1 text-white rounded-full transition-all duration-200 ${activeTab === tab.id
                  ? 'bg-[#000000800] border border-gray-500'
                  : ' hover:text-white border border-transparent hover:bg-gray-700'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="transition-all duration-300">
          {currentTab?.component}
        </div>
      </div>
    </>
  )
}

export default page
