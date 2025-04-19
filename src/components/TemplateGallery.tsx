import React from 'react';
import { motion } from 'framer-motion';
import { useEditor } from '../contexts/EditorContext';

interface Template {
  id: string;
  name: string;
  thumbnail: string;
  texts: Array<{
    id: string;
    text: string;
    color: string;
    fontSize: number;
    position: { x: number; y: number };
    rotation: number;
    intensity: number;
  }>;
  background?: string;
}

const templates: Template[] = [
  {
    id: 'template-1',
    name: 'Time Is Precious',
    thumbnail: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    texts: [
      {
        id: 'text-1',
        text: 'TIME',
        color: '#00f2ff',
        fontSize: 60,
        position: { x: 30, y: 40 },
        rotation: 0,
        intensity: 1.2,
      },
      {
        id: 'text-2',
        text: 'IS',
        color: '#00f2ff',
        fontSize: 60,
        position: { x: 30, y: 50 },
        rotation: 0,
        intensity: 1.2,
      },
      {
        id: 'text-3',
        text: 'PRECIOUS.',
        color: '#00f2ff',
        fontSize: 60,
        position: { x: 30, y: 60 },
        rotation: 0,
        intensity: 1.2,
      }
    ]
  },
  {
    id: 'template-2',
    name: 'Good Vibes Only',
    thumbnail: 'https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background: 'https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    texts: [
      {
        id: 'text-1',
        text: 'GOOD',
        color: '#ff36f7',
        fontSize: 70,
        position: { x: 50, y: 40 },
        rotation: 0,
        intensity: 1.5,
      },
      {
        id: 'text-2',
        text: 'VIBES',
        color: '#ff36f7',
        fontSize: 70,
        position: { x: 50, y: 50 },
        rotation: 0,
        intensity: 1.5,
      },
      {
        id: 'text-3',
        text: 'ONLY',
        color: '#ff36f7',
        fontSize: 70,
        position: { x: 50, y: 60 },
        rotation: 0,
        intensity: 1.5,
      }
    ]
  },
  {
    id: 'template-3',
    name: 'Dream Big',
    thumbnail: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    texts: [
      {
        id: 'text-1',
        text: 'DREAM',
        color: '#39ff14',
        fontSize: 80,
        position: { x: 50, y: 45 },
        rotation: 0,
        intensity: 1.3,
      },
      {
        id: 'text-2',
        text: 'BIG',
        color: '#39ff14',
        fontSize: 100,
        position: { x: 50, y: 60 },
        rotation: 0,
        intensity: 1.3,
      }
    ]
  },
  {
    id: 'template-4',
    name: 'Stay Wild',
    thumbnail: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    texts: [
      {
        id: 'text-1',
        text: 'STAY',
        color: '#fffc00',
        fontSize: 80,
        position: { x: 50, y: 40 },
        rotation: 0,
        intensity: 1.2,
      },
      {
        id: 'text-2',
        text: 'WILD',
        color: '#fffc00',
        fontSize: 100,
        position: { x: 50, y: 55 },
        rotation: 0,
        intensity: 1.2,
      }
    ]
  },
  {
    id: 'template-5',
    name: 'Forever Young',
    thumbnail: 'https://images.pexels.com/photos/1738434/pexels-photo-1738434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background: 'https://images.pexels.com/photos/1738434/pexels-photo-1738434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    texts: [
      {
        id: 'text-1',
        text: 'FOREVER',
        color: '#Bf5Aff',
        fontSize: 70,
        position: { x: 50, y: 40 },
        rotation: 0,
        intensity: 1.4,
      },
      {
        id: 'text-2',
        text: 'YOUNG',
        color: '#Bf5Aff',
        fontSize: 70,
        position: { x: 50, y: 55 },
        rotation: 0,
        intensity: 1.4,
      }
    ]
  },
  {
    id: 'template-6',
    name: 'Paradise Found',
    thumbnail: 'https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background: 'https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    texts: [
      {
        id: 'text-1',
        text: 'PARADISE',
        color: '#ff7b00',
        fontSize: 60,
        position: { x: 50, y: 45 },
        rotation: 0,
        intensity: 1.5,
      },
      {
        id: 'text-2',
        text: 'FOUND',
        color: '#ff7b00',
        fontSize: 60,
        position: { x: 50, y: 60 },
        rotation: 0,
        intensity: 1.5,
      }
    ]
  }
];

const TemplateGallery: React.FC = () => {
  const { applyTemplate } = useEditor();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium text-white/90">Ready-to-Use Templates</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <motion.div
            key={template.id}
            className="rounded-lg overflow-hidden border border-white/10 group cursor-pointer relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => applyTemplate(template)}
          >
            <div className="aspect-[9/16] sm:aspect-video relative overflow-hidden">
              <img 
                src={template.thumbnail} 
                alt={template.name}
                className="w-full h-full object-cover absolute inset-0"
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-20" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {template.texts.map((text, index) => (
                  <div 
                    key={index}
                    className="neon-text"
                    style={{
                      color: text.color,
                      textShadow: `0 0 ${5 * text.intensity}px ${text.color}, 
                                  0 0 ${10 * text.intensity}px ${text.color}, 
                                  0 0 ${20 * text.intensity}px ${text.color}`,
                      fontSize: `${text.fontSize * 0.4}px`,
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      lineHeight: 1.2,
                      textTransform: 'uppercase',
                      position: 'absolute',
                      top: `${text.position.y}%`,
                      left: `${text.position.x}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {text.text}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-3 bg-background-light bg-opacity-70 backdrop-blur-md">
              <h3 className="font-medium text-white">{template.name}</h3>
              <p className="text-xs text-white/60">Click to apply this template</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;