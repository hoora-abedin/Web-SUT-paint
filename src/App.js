import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import ShapeCounter from './components/Counter';

function App() {
  const [shapes, updateShapes] = useState([]);
  const [title, setTitle] = useState('نقاشی من');

  return (
    <div className="app">
      <Header shapes={shapes} updateShapes={updateShapes} title={title} setTitle={setTitle} />
      <div className="main">
        <Sidebar />
        <Canvas shapes={shapes} updateShapes={updateShapes} />
        <ShapeCounter shapes={shapes} />
      </div>
    </div>
  );
}

export default App;
