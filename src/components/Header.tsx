import React from 'react';
import { Sparkles, Download, Share2 } from 'lucide-react';
import { useEditor } from '../contexts/EditorContext';
import { toPng } from 'html-to-image';

const Header: React.FC = () => {
  const { previewMode, setPreviewMode } = useEditor();

  const downloadImage = async () => {
    try {
      setPreviewMode(true);
      
      // Small delay to ensure preview mode is applied
      setTimeout(async () => {
        const element = document.getElementById('canvas-container');
        if (element) {
          const dataUrl = await toPng(element, { 
            quality: 0.95,
            backgroundColor: '#000000',
          });
          
          const link = document.createElement('a');
          link.download = `neonfx-${Date.now()}.png`;
          link.href = dataUrl;
          link.click();
        }
        
        setPreviewMode(false);
      }, 100);
    } catch (error) {
      console.error('Error generating image:', error);
      setPreviewMode(false);
    }
  };

  return (
    <header className="border-b border-white/10 bg-background-light bg-opacity-80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="text-neon-blue animate-glow-pulse" size={24} />
          <h1 className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            NeonFX
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={downloadImage}
            className="btn-icon hover:bg-white/10 text-white flex items-center gap-2"
            title="Download creation"
          >
            <Download size={20} />
            <span className="hidden sm:inline">Download</span>
          </button>
          
          <button 
            className="btn-icon hover:bg-white/10 text-white flex items-center gap-2"
            title="Share creation"
          >
            <Share2 size={20} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;