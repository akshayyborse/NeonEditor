# Neonphoto Editor

A modern web application for creating stunning photo effects with neon text overlays. Upload your images, add custom text with neon effects, and customize your creations with a variety of fonts and effects.

![Neonphoto Editor Screenshot](public/screenshot.svg)

## Features

- **Image Upload**: Drag and drop or select images to use as backgrounds
- **Neon Text Effects**: Add text with customizable neon glow effects
- **Custom Fonts**: Upload and use your own fonts (.ttf, .otf, .woff, .woff2)
- **Text Customization**: 
  - Change font family, size, and color
  - Adjust glow intensity
  - Rotate text elements
- **Preview Mode**: Toggle between editing and preview modes
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/neonphoto-editor.git
   cd neonphoto-editor
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Upload an Image**: Drag and drop an image or click to select one from your device
2. **Add Text**: Enter text in the input field and click "Add"
3. **Customize Text**: Select a text element to edit its properties:
   - Change the text content
   - Select a font (including custom uploaded fonts)
   - Adjust color and glow intensity
   - Change font size and rotation
4. **Upload Custom Fonts**: Click the "Upload Font" button to add your own fonts
5. **Preview**: Toggle between editing and preview modes to see your final result

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Dropzone
- React Colorful

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Fonts provided by Google Fonts
- Icons by Lucide React 
