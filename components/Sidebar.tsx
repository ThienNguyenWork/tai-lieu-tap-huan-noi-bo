import React from 'react';
import { MenuItem } from '../types';

interface SidebarProps {
  items: MenuItem[];
  activeItemId: string;
  onItemClick: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeItemId, onItemClick, isOpen, setIsOpen }) => {
  const baseItemClass = 'grid grid-cols-[auto_1fr] items-center gap-x-3 p-3 my-1 rounded-lg cursor-pointer transition-all duration-200 ease-in-out';
  const activeItemClass = 'bg-blue-600 text-white shadow-md';
  const inactiveItemClass = 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700';

  return (
    <>
      <aside className={`flex flex-col bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'w-80' : 'w-0'} overflow-hidden`}>
        <div className="flex items-center justify-center h-[72px] px-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
            Mục tiêu
          </h2>
        </div>
        <nav className="flex-1 p-2">
          <ul>
            {items.map((item) => (
              <li key={item.id} onClick={() => onItemClick(item.id)}>
                <a className={`${baseItemClass} ${activeItemId === item.id ? activeItemClass : inactiveItemClass}`}>
                  {item.icon(activeItemId === item.id)}
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;