import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface MenuItem {
  name: string;
  subItems?: string[];
}

export default function Sidebar() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { name: "Shift Start" },
    { 
      name: "Safety Checks ...",
      subItems: ["Chair Check", "Electrical Safety"]
    },
    { name: "Check point Occupancy" },
    { 
      name: "S/O SAR ...",
      subItems: ["Incidents", "Items Accounted For", "Officer At Checkpoint", "Turn away"]
    },
    { name: "Visitor Log" },
    { name: "Patrols" },
    { name: "Search DCAT" },
    { name: "View Documents" },
    { name: "Shift End" }
  ];

  const handleMenuItemClick = (itemName: string) => {
    if (itemName === expandedSubMenu) {
      setExpandedSubMenu(null);
    } else if (menuItems.find(item => item.name === itemName)?.subItems) {
      setExpandedSubMenu(itemName);
    }
  };

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 h-screen">
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-red-600"></div>
            <div className="w-6 h-6 rounded-full bg-red-600"></div>
            <div className="w-6 h-6 rounded-full bg-red-600"></div>
          </div>
          <span className="font-medium text-gray-700 text-lg [text-shadow:_0_6px_12px_rgb(156_163_175_/_0.6)]">Securitas</span>
          <span className="text-xs text-gray-500 self-start pl-1">Version: 1.0</span>
        </div>
      </div>
      
      <div className="p-4">
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setIsMenuExpanded(!isMenuExpanded)}
        >
          <Bars3Icon className="w-6 h-6 text-gray-600" />
          <span className="font-medium text-gray-700">Menu</span>
        </div>

        {isMenuExpanded && (
          <div className="mt-3 space-y-2 pl-9">
            {menuItems.map((item, index) => (
              <div key={index}>
                <div
                  className="p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-150 text-gray-600 hover:text-gray-900"
                  onClick={() => handleMenuItemClick(item.name)}
                >
                  {item.name}
                </div>
                {item.subItems && expandedSubMenu === item.name && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-150 text-gray-600 hover:text-gray-900 text-sm"
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}