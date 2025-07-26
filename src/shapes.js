import React from 'react';

export function renderShape(type, size = 100) {
  const shapeStyle = {
    width: size,
    height: size,
    boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
    transition: 'transform 0.2s ease'
  };

  if (type === 'circle') {
    return (
      <div style={{ 
        ...shapeStyle, 
        borderRadius: '50%', 
        backgroundColor: '#FF6B6B',  // Coral red
      }}></div>
    );
  } else if (type === 'square') {
    return (
      <div style={{ 
        ...shapeStyle, 
        backgroundColor: '#4ECDC4',  // Mint green
        transform: 'rotate(5deg)'
      }}></div>
    );
  } else if (type === 'triangle') {
    return (
      <div style={{ width: size, height: size, position: 'relative' }}>
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid #FFD166`,  // Yellow
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>
    );
  }
}
