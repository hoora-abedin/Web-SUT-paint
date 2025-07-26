import React from 'react';
import { renderShape } from '../shapes';

function ShapeCounter({ shapes }) {
  const countShapesByType = () => {
    return shapes.reduce((counts, shape) => {
      counts[shape.type] = (counts[shape.type] || 0) + 1;
      return counts;
    }, {});
  };

  const shapeCounts = countShapesByType();

  return (
    <div className="shape-counter">
      <h3 className="counter-title">Shape Count</h3>
      <div className="shape-count-list">
        {Object.keys(shapeCounts).map((shapeType) => (
          <div
            key={shapeType}
            className="shape-count-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: '#f8f9fa',
              transition: 'background-color 0.2s ease'
            }}
          >
            <div
              className="shape-preview"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #dee2e6',
                marginRight: '12px',
                borderRadius: '4px',
                backgroundColor: 'white'
              }}
            >
              {renderShape(shapeType, 20)}
            </div>
            <span className="shape-count" style={{ 
              fontSize: '18px',
              fontWeight: '500',
              color: '#495057'
            }}>
              {shapeCounts[shapeType]} {shapeType.toLowerCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShapeCounter;
