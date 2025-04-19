import React, { useState } from 'react';
import { GalleryVertical as Gallery, Image, Sparkles } from 'lucide-react';
import Header from './components/Header';
import Editor from './components/Editor';
import TemplateGallery from './components/TemplateGallery';
import { EditorProvider } from './contexts/EditorContext';
import { FontProvider } from './contexts/FontContext';

function App() {
  const [activeTab, setActiveTab] = useState<'editor' | 'templates'>('editor');

  return (
    <FontProvider>
      <EditorProvider>
        <div className="min-h-screen flex flex-col bg-background-dark text-white">
          <Header />
          
          <main className="flex-1 container mx-auto px-4 py-6 md:px-8 max-w-7xl">
            <div className="flex justify-center mb-6">
              <div className="flex rounded-lg bg-background-light bg-opacity-50 p-1">
                <button
                  onClick={() => setActiveTab('editor')}
                  className={`btn flex items-center gap-2 ${
                    activeTab === 'editor' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Sparkles size={18} />
                  <span>Editor</span>
                </button>
                <button
                  onClick={() => setActiveTab('templates')}
                  className={`btn flex items-center gap-2 ${
                    activeTab === 'templates' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Gallery size={18} />
                  <span>Templates</span>
                </button>
              </div>
            </div>

            {activeTab === 'editor' ? <Editor /> : <TemplateGallery />}
          </main>
          
          <footer className="py-6 border-t border-white/10 text-center text-sm text-white/60">
            <div className="container mx-auto">
              <p>© {new Date().getFullYear()} Neonphoto Editor - Create stunning photo effects</p>
            </div>
          </footer>
        </div>
      </EditorProvider>
    </FontProvider>
  );
}

export default App;