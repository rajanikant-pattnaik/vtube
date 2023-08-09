import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-black shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-10`}>
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Drawer</h1>
        <button onClick={onClose} className="text-gray-500">
          Close
        </button>
      </div>
      <div className="p-4"></div>
    </div>
  );
};

export default Drawer;
