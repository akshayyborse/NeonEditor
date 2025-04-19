import React, { createContext, useState, useContext, ReactNode } from 'react';

interface NeonText {
  id: string;
  text: string;
  color: string;
  fontSize: number;
  position: { x: number; y: number };
  rotation: number;
  intensity: number;
}

interface Template {
  id: string;
  name: string;
  thumbnail: string;
  texts: NeonText[];
  background?: string;
}

interface EditorContextType {
  backgroundImage: string | null;
  setBackgroundImage: (image: string | null) => void;
  neonTexts: NeonText[];
  addNeonText: (text: string) => void;
  updateNeonText: (id: string, updates: Partial<NeonText>) => void;
  removeNeonText: (id: string) => void;
  selectedTextId: string | null;
  setSelectedTextId: (id: string | null) => void;
  applyTemplate: (template: Template) => void;
  previewMode: boolean;
  setPreviewMode: (mode: boolean) => void;
}

const defaultNeonColors = [
  '#00f2ff', // blue
  '#ff36f7', // pink
  '#39ff14', // green
  '#fffc00', // yellow
  '#ff2d55', // red
];

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [neonTexts, setNeonTexts] = useState<NeonText[]>([]);
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);

  const addNeonText = (text: string) => {
    const randomColor = defaultNeonColors[Math.floor(Math.random() * defaultNeonColors.length)];
    const newText: NeonText = {
      id: `text-${Date.now()}`,
      text: text || 'NEON TEXT',
      color: randomColor,
      fontSize: 42,
      position: { x: 50, y: 50 }, // Center of canvas by default
      rotation: 0,
      intensity: 1,
    };
    
    setNeonTexts((prev) => [...prev, newText]);
    setSelectedTextId(newText.id);
  };

  const updateNeonText = (id: string, updates: Partial<NeonText>) => {
    setNeonTexts((prev) => 
      prev.map((text) => (text.id === id ? { ...text, ...updates } : text))
    );
  };

  const removeNeonText = (id: string) => {
    setNeonTexts((prev) => prev.filter((text) => text.id !== id));
    if (selectedTextId === id) {
      setSelectedTextId(null);
    }
  };

  const applyTemplate = (template: Template) => {
    setNeonTexts(template.texts);
    if (template.background) {
      setBackgroundImage(template.background);
    }
  };

  return (
    <EditorContext.Provider
      value={{
        backgroundImage,
        setBackgroundImage,
        neonTexts,
        addNeonText,
        updateNeonText,
        removeNeonText,
        selectedTextId,
        setSelectedTextId,
        applyTemplate,
        previewMode,
        setPreviewMode,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};