import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      {/* rest of the app */}
    </div>
  );
}

export default App;
