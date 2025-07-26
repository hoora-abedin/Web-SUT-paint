import React from 'react';
import { exportShapes, importShapes } from '../handler';

function Header({ shapes, updateShapes, title, setTitle }) {
  const handleExportDrawing = () => {
    exportShapes({ shapes, title });
  };

  const handleImportDrawing = (event) => {
    const file = event.target.files[0];
    if (file) {
      importShapes(file, updateShapes, setTitle);
    }
  };

  const updateDrawingTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="header">
      <input
        type="text"
        value={title}
        onChange={updateDrawingTitle}
        placeholder="Enter drawing title..."
        style={{
          fontSize: '20px',
          padding: '8px 12px',
          width: '300px',
          borderRadius: '5px',
          border: '1px solid #ddd',
          outline: 'none',
          transition: 'border 0.2s ease'
        }}
        className="title-input"
      />
      <div className="file-actions">
        <button onClick={handleExportDrawing}>Export Drawing</button>
        <label className="import-label">
          Import Drawing
          <input 
            type="file" 
            accept=".json" 
            className="file-input" 
            onChange={handleImportDrawing} 
          />
        </label>
      </div>
    </div>
  );
}

export default Header;
