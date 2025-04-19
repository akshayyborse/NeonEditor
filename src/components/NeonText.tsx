import React from 'react';
import { motion } from 'framer-motion';

interface NeonText {
  id: string;
  text: string;
  color: string;
  fontSize: number;
  position: { x: number; y: number };
  rotation: number;
  intensity: number;
  font?: string;
}

interface NeonTextProps {
  neonText: NeonText;
  selected: boolean;
}

const NeonText: React.FC<NeonTextProps> = ({ neonText, selected }) => {
  const { text, color, fontSize, intensity, font = 'Inter' } = neonText;
  
  const textStyle = {
    color: color,
    fontSize: `${fontSize}px`,
    fontWeight: 700,
    textShadow: `0 0 ${2 * intensity}px ${color}, 
                 0 0 ${4 * intensity}px ${color}, 
                 0 0 ${8 * intensity}px ${color}`,
    letterSpacing: '0.05em',
    lineHeight: 1.2,
    fontFamily: font,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap' as const,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.3 }
      }}
      className={`${selected ? 'outline outline-2 outline-white rounded p-1' : ''}`}
    >
      <div 
        className="neon-text" 
        style={textStyle}
      >
        {text}
      </div>
    </motion.div>
  );
};

export default NeonText;