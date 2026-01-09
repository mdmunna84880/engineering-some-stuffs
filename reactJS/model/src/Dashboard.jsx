import { useState } from 'react';
import SiteModal from './components/SiteModel';

const Dashboard = () => {
  const [modalData, setModalData] = useState({ isOpen: false, url: '', title: '' });

  const openModal = (url, title) => {
    setModalData({ isOpen: true, url, title });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10 flex flex-col items-center gap-6">
      
      <h1 className="text-3xl font-bold text-gray-900">Resource Hub</h1>
      
      <div className="flex gap-4">
        <button 
          onClick={() => openModal('https://www.wikipedia.org', 'Wikipedia')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
        >
          Open Wikipedia
        </button>

        <button 
          onClick={() => openModal('https://react.dev', 'React Documentation')}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition shadow-lg"
        >
          Read Docs
        </button>
      </div>

      {/* The Modal Component */}
      <SiteModal 
        isOpen={modalData.isOpen} 
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        url={modalData.url}
        title={modalData.title}
      />

    </div>
  );
};

export default Dashboard;