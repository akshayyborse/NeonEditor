import React, { createContext, useContext, useState, useCallback } from 'react';

interface FontContextType {
  customFonts: string[];
  addCustomFont: (fontFile: File) => Promise<void>;
  removeCustomFont: (fontName: string) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customFonts, setCustomFonts] = useState<string[]>([]);

  const addCustomFont = useCallback(async (fontFile: File) => {
    try {
      const fontName = fontFile.name.replace(/\.[^/.]+$/, '');
      const fontUrl = URL.createObjectURL(fontFile);
      
      // Create a style element to define the font face
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: '${fontName}';
          src: url('${fontUrl}') format('${fontFile.type.split('/')[1]}');
        }
      `;
      document.head.appendChild(style);

      setCustomFonts(prev => [...prev, fontName]);
    } catch (error) {
      console.error('Error loading custom font:', error);
    }
  }, []);

  const removeCustomFont = useCallback((fontName: string) => {
    setCustomFonts(prev => prev.filter(font => font !== fontName));
    // Remove the font-face style element
    const styleElements = document.querySelectorAll('style');
    styleElements.forEach(style => {
      if (style.textContent?.includes(`font-family: '${fontName}'`)) {
        style.remove();
      }
    });
  }, []);

  return (
    <FontContext.Provider value={{ customFonts, addCustomFont, removeCustomFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFonts = () => {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error('useFonts must be used within a FontProvider');
  }
  return context;
}; 