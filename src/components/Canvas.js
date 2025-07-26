import React from 'react';
import { renderShape } from '../shapes';

function Canvas({ shapes, updateShapes }) {
  const handleShapeDrop = (event) => {
    event.preventDefault();
    const shapeType = event.dataTransfer.getData('shape');

    const canvasRect = event.target.getBoundingClientRect();
    const dropPositionX = event.clientX - canvasRect.left;
    const dropPositionY = event.clientY - canvasRect.top;

    const newShape = {
      id: Date.now(),
      type: shapeType,
      x: dropPositionX,
      y: dropPositionY
    };
    updateShapes([...shapes, newShape]);
  };

  const preventDefaultDrag = (event) => {
    event.preventDefault();
  };

  const removeShape = (shapeId, event) => {
    event.stopPropagation();
    const filteredShapes = shapes.filter((shape) => shape.id !== shapeId);
    updateShapes(filteredShapes);
  };

  return (
    <div 
      className="canvas" 
      onDrop={handleShapeDrop} 
      onDragOver={preventDefaultDrag}
    >
      {shapes.map((shape) => (
        <div
          key={shape.id}
          onDoubleClick={(event) => removeShape(shape.id, event)}
          style={{
            position: 'absolute',
            left: shape.x - 25,
            top: shape.y - 25,
            width: 50,
            height: 50,
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
          className="shape-element"
        >
          {renderShape(shape.type)}
        </div>
      ))}
    </div>
  );
}

export default Canvas;
