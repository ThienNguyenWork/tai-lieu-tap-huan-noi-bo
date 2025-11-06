
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { MenuItem } from './types';

const App: React.FC = () => {
  const [activeMenuId, setActiveMenuId] = useState<string>('solution');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const menuItems: MenuItem[] = [
    {
      id: 'solution',
      label: 'Hiểu rõ giải pháp',
      icon: (isActive: boolean) => (
        <span className={`w-10 h-10 flex items-center justify-center font-bold text-2xl rounded-full ${
            isActive 
            ? 'bg-white text-blue-600' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
        }`}>1</span>
      ),
    },
    {
      id: 'pricing',
      label: 'Cập nhật bảng giá',
      icon: (isActive: boolean) => (
        <span className={`w-10 h-10 flex items-center justify-center font-bold text-2xl rounded-full ${
            isActive 
            ? 'bg-white text-blue-600' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
        }`}>2</span>
      ),
    },
    {
      id: 'process',
      label: 'Hiểu rõ quy trình triển khai',
      icon: (isActive: boolean) => (
        <span className={`w-10 h-10 flex items-center justify-center font-bold text-2xl rounded-full ${
            isActive 
            ? 'bg-white text-blue-600' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
        }`}>3</span>
      ),
    },
    {
      id: 'practice',
      label: 'Thực hành để nhớ',
      icon: (isActive: boolean) => (
        <span className={`w-10 h-10 flex items-center justify-center font-bold text-2xl rounded-full ${
            isActive 
            ? 'bg-white text-blue-600' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
        }`}>4</span>
      ),
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Sidebar 
        items={menuItems}
        activeItemId={activeMenuId}
        onItemClick={setActiveMenuId}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-4 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg text-white h-[72px]">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="p-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-center flex-1 tracking-wider uppercase">
            TÀI LIỆU TẬP HUẤN NỘI BỘ
          </h1>
          <div className="w-10"></div>
        </header>
        
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 lg:p-8">
            <Content activeItemId={activeMenuId} />
        </div>
      </main>
    </div>
  );
};

export default App;
