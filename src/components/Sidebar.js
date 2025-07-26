import React from 'react';
import { renderShape } from '../shapes';

function Sidebar() {
  const availableShapes = ['circle', 'square', 'triangle'];

  const handleDragStart = (event, shapeType) => {
    event.dataTransfer.setData('shape', shapeType);
  };

  return (
    <div className="sidebar">
      <h3 className="shapes-title">Available Shapes</h3>
      <div className="shapes-container">
        {availableShapes.map((shapeType) => (
          <div
            key={shapeType}
            className="shape-item"
            draggable
            onDragStart={(e) => handleDragStart(e, shapeType)}
            style={{
              width: '70px',
              height: '70px',
              margin: '12px auto',
              cursor: 'grab',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #dee2e6',
              borderRadius: '10px',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
            }}
          >
            {renderShape(shapeType, 35)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
