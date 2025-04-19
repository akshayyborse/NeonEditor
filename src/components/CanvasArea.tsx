import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useEditor } from '../contexts/EditorContext';
import NeonText from './NeonText';

const CanvasArea: React.FC = () => {
  const { 
    backgroundImage, 
    neonTexts, 
    selectedTextId, 
    setSelectedTextId,
    updateNeonText,
    previewMode
  } = useEditor();

  const handleDrag = (id: string, e: any, info: any) => {
    const element = document.getElementById('canvas-container');
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const x = (info.point.x - rect.left) / rect.width * 100;
    const y = (info.point.y - rect.top) / rect.height * 100;
    
    updateNeonText(id, {
      position: { x, y }
    });
  };

  return (
    <div 
      id="canvas-container" 
      className="relative w-full h-full overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Black overlay for dark effect */}
      <div className="absolute inset-0 bg-black opacity-30" />
      
      {neonTexts.map((text) => (
        <motion.div
          key={text.id}
          style={{
            position: 'absolute',
            left: `${text.position.x}%`,
            top: `${text.position.y}%`,
            transformOrigin: 'center',
            rotate: text.rotation,
            x: '-50%',
            y: '-50%',
            cursor: previewMode ? 'default' : 'move',
            zIndex: text.id === selectedTextId ? 10 : 1,
          }}
          drag={!previewMode}
          dragMomentum={false}
          onDragStart={() => !previewMode && setSelectedTextId(text.id)}
          onDrag={(e, info) => !previewMode && handleDrag(text.id, e, info)}
          onClick={() => !previewMode && setSelectedTextId(text.id)}
        >
          <NeonText neonText={text} selected={text.id === selectedTextId && !previewMode} />
        </motion.div>
      ))}
    </div>
  );
};

export default CanvasArea;