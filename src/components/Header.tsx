import React from 'react';

interface HeaderProps {
  datacenter: string;
  colo: string;
  date: string;
  time: string;
  userName: string;
}

export default function Header({ datacenter, colo, date, time, userName }: HeaderProps) {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-2">
      <div className="flex justify-between items-center mb-2">
        <div className="w-32"></div>
        <h1 className="text-xl font-semibold text-gray-800 whitespace-nowrap [text-shadow:_0_6px_12px_rgb(156_163_175_/_0.6)]">
          Datacenter Security - Electronic Document Processing System
        </h1>
        <div className="w-32 flex flex-col items-end">
          <button className="px-4 py-1.5 text-sm bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-md border border-gray-200">
            Log in
          </button>
          <span className="text-sm text-gray-600 mt-0.5">{userName}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Datacenter:</span>
            <span className="text-gray-800">{datacenter}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Colo:</span>
            <span className="text-gray-800">{colo}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 mr-24">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Date:</span>
            <span className="text-gray-800">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Time:</span>
            <span className="text-gray-800">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}