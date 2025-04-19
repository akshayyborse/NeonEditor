import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { Trash2, RotateCw, FoldHorizontal as FontSize, Maximize, Sliders, Type } from 'lucide-react';
import { useEditor } from '../contexts/EditorContext';
import { useFonts } from '../contexts/FontContext';

const defaultFonts = [
  { name: 'Inter', family: 'Inter' },
  { name: 'Righteous', family: 'Righteous' },
  { name: 'Rubik Mono', family: 'Rubik Mono One' },
  { name: 'Teko', family: 'Teko' },
];

const TextEditor: React.FC = () => {
  const { 
    neonTexts, 
    updateNeonText, 
    removeNeonText, 
    selectedTextId,
    setSelectedTextId 
  } = useEditor();

  const { customFonts } = useFonts();

  const selectedText = neonTexts.find(text => text.id === selectedTextId);

  if (!selectedTextId || !selectedText) {
    return (
      <div className="p-4 text-center text-white/60 border border-white/10 rounded-lg">
        <p>Select a text element to edit</p>
      </div>
    );
  }

  const allFonts = [
    ...defaultFonts,
    ...customFonts.map(fontName => ({ name: fontName, family: fontName }))
  ];

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <div className="bg-background-dark p-3 border-b border-white/10 flex justify-between items-center">
        <h3 className="font-medium">Edit Text</h3>
        <button 
          onClick={() => removeNeonText(selectedTextId)}
          className="text-white/60 hover:text-red-500 transition-colors"
          title="Delete text"
        >
          <Trash2 size={18} />
        </button>
      </div>
      
      <div className="p-4 space-y-4">
        <div>
          <label className="block text-sm text-white/70 mb-1">Text Content</label>
          <input
            type="text"
            value={selectedText.text}
            onChange={(e) => updateNeonText(selectedTextId, { text: e.target.value })}
            className="w-full px-3 py-2 bg-background-dark border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div>
          <label className="flex items-center gap-1 text-sm text-white/70 mb-1">
            <Type size={14} />
            Font Family
          </label>
          <select
            value={selectedText.font || 'Inter'}
            onChange={(e) => updateNeonText(selectedTextId, { font: e.target.value })}
            className="w-full px-3 py-2 bg-background-dark border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            {allFonts.map((font) => (
              <option 
                key={font.family} 
                value={font.family}
                style={{ fontFamily: font.family }}
              >
                {font.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm text-white/70 mb-1">Color</label>
          <div className="mb-3">
            <HexColorPicker 
              color={selectedText.color} 
              onChange={(color) => updateNeonText(selectedTextId, { color })} 
            />
          </div>
          <div className="flex gap-2">
            {['#00f2ff', '#ff36f7', '#39ff14', '#fffc00', '#ff2d55', '#Bf5Aff'].map((color) => (
              <button
                key={color}
                onClick={() => updateNeonText(selectedTextId, { color })}
                className="w-8 h-8 rounded-full border-2 border-white/20 transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
        
        <div>
          <label className="flex items-center justify-between text-sm text-white/70 mb-1">
            <span className="flex items-center gap-1">
              <FontSize size={14} />
              Font Size
            </span>
            <span>{selectedText.fontSize}px</span>
          </label>
          <input
            type="range"
            min="12"
            max="120"
            value={selectedText.fontSize}
            onChange={(e) => updateNeonText(selectedTextId, { fontSize: Number(e.target.value) })}
            className="w-full"
          />
        </div>
        
        <div>
          <label className="flex items-center justify-between text-sm text-white/70 mb-1">
            <span className="flex items-center gap-1">
              <RotateCw size={14} />
              Rotation
            </span>
            <span>{selectedText.rotation}°</span>
          </label>
          <input
            type="range"
            min="-180"
            max="180"
            value={selectedText.rotation}
            onChange={(e) => updateNeonText(selectedTextId, { rotation: Number(e.target.value) })}
            className="w-full"
          />
        </div>
        
        <div>
          <label className="flex items-center justify-between text-sm text-white/70 mb-1">
            <span className="flex items-center gap-1">
              <Sliders size={14} />
              Glow Intensity
            </span>
            <span>{selectedText.intensity.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="0.2"
            max="1.5"
            step="0.1"
            value={selectedText.intensity}
            onChange={(e) => updateNeonText(selectedTextId, { intensity: Number(e.target.value) })}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;