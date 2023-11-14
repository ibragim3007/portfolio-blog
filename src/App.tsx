import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            cursor: 'pointer',
            padding: 30,
            borderRadius: 18,
            width: 160,
            height: 160,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#4f1849c5',
            boxShadow: '0px 0px 100px 5px rgba(162, 41, 130, 0.84)',
          }}
        >
          <div style={{ textTransform: 'uppercase', color: '#e3e3e3', fontSize: 24 }}>Typescript eslint prettier</div>
        </div>
      </header>
    </div>
  );
}

export default App;
