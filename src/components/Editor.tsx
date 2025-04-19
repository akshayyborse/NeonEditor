import React, { useState, useRef } from 'react';
import { Upload, PlusCircle, XCircle, Eye, ImageIcon, Type, Font } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { useEditor } from '../contexts/EditorContext';
import { useFonts } from '../contexts/FontContext';
import CanvasArea from './CanvasArea';
import TextEditor from './TextEditor';

const Editor: React.FC = () => {
  const { 
    backgroundImage, 
    setBackgroundImage, 
    addNeonText, 
    neonTexts,
    previewMode,
    setPreviewMode
  } = useEditor();
  
  const { customFonts, addCustomFont } = useFonts();
  const [newTextValue, setNewTextValue] = useState('');
  
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setBackgroundImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
    },
    maxFiles: 1,
  });

  const handleAddText = () => {
    addNeonText(newTextValue);
    setNewTextValue('');
  };

  const handleFontUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('font/')) {
      await addCustomFont(file);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="relative aspect-[9/16] sm:aspect-video w-full overflow-hidden rounded-lg mb-4 bg-background-light">
          {!backgroundImage ? (
            <div 
              {...getRootProps()} 
              className={`absolute inset-0 flex flex-col items-center justify-center border-2 border-dashed ${
                isDragActive ? 'border-primary-500' : 'border-white/30'
              } rounded-lg transition-colors`}
            >
              <input {...getInputProps()} />
              <ImageIcon size={48} className="text-white/50 mb-4" />
              <p className="text-white/70 text-center px-4">
                {isDragActive
                  ? "Drop your image here"
                  : "Drag & drop an image, or click to select"}
              </p>
            </div>
          ) : (
            <CanvasArea />
          )}
        </div>

        <div className="flex justify-between items-center">
          {backgroundImage && (
            <button 
              onClick={() => setBackgroundImage(null)}
              className="btn-outline text-sm flex items-center gap-2"
            >
              <XCircle size={16} />
              <span>Remove Background</span>
            </button>
          )}
          
          <button 
            onClick={() => setPreviewMode(!previewMode)}
            className={`btn ${previewMode ? 'btn-primary' : 'btn-outline'} text-sm flex items-center gap-2`}
          >
            <Eye size={16} />
            <span>{previewMode ? 'Editing Mode' : 'Preview Mode'}</span>
          </button>
        </div>
      </div>

      <div className="glass-panel p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <Type size={20} />
            Text Elements
          </h2>
          
          <div className="relative">
            <input
              type="file"
              accept=".ttf,.otf,.woff,.woff2"
              onChange={handleFontUpload}
              className="hidden"
              id="font-upload"
            />
            <label
              htmlFor="font-upload"
              className="btn-outline text-sm flex items-center gap-2 cursor-pointer"
            >
              <Font size={16} />
              <span>Upload Font</span>
            </label>
          </div>
        </div>
        
        {backgroundImage ? (
          <>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTextValue}
                onChange={(e) => setNewTextValue(e.target.value)}
                placeholder="Enter text"
                className="flex-1 px-3 py-2 bg-background-dark border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button
                onClick={handleAddText}
                className="btn-primary flex items-center gap-1"
              >
                <PlusCircle size={16} />
                <span>Add</span>
              </button>
            </div>

            {neonTexts.length > 0 ? (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                <TextEditor />
              </div>
            ) : (
              <div className="text-center py-8 text-white/60">
                <Type size={32} className="mx-auto mb-2 opacity-50" />
                <p>Add text elements to begin creating your neon effect</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 text-white/60 flex flex-col items-center">
            <Upload size={32} className="mb-3" />
            <p className="mb-2">Upload a background image first</p>
            <p className="text-sm text-white/40">You can add text elements after uploading an image</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;