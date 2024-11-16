import { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header
          datacenter="DC-001"
          colo="USEAST"
          date={formatDate(currentTime)}
          time={formatTime(currentTime)}
          userName="Admin"
        />
        <main className="flex-1 p-6 bg-gray-50">
          {/* Main content area */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">
            {/* Add your main content here */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;