import React, { useState } from 'react';
import { Eye, Layers, Zap, Info } from 'lucide-react';

interface ExplainableAIProps {
  imageUrl: string;
}

const ExplainableAI: React.FC<ExplainableAIProps> = ({ imageUrl }) => {
  const [activeView, setActiveView] = useState('heatmap');

  const views = [
    { id: 'heatmap', label: 'Attention Heatmap', icon: Eye },
    { id: 'features', label: 'Feature Maps', icon: Layers },
    { id: 'gradients', label: 'Grad-CAM', icon: Zap }
  ];

  const renderVisualization = () => {
    switch (activeView) {
      case 'heatmap':
        return (
          <div className="relative">
            <img src={imageUrl} alt="Skin lesion" className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-radial from-red-500/30 via-yellow-500/20 to-transparent rounded-lg opacity-70"></div>
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
              High Attention Area
            </div>
          </div>
        );
      case 'features':
        return (
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative">
                <img src={imageUrl} alt={`Feature map ${i}`} className="w-full h-28 object-cover rounded-lg grayscale" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"></div>
                <div className="absolute bottom-1 left-1 bg-black/70 text-white px-1 py-0.5 rounded text-xs">
                  Layer {i}
                </div>
              </div>
            ))}
          </div>
        );
      case 'gradients':
        return (
          <div className="relative">
            <img src={imageUrl} alt="Gradient analysis" className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-blue-500/30 to-purple-500/20 rounded-lg"></div>
            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
              Gradient Flow Analysis
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <Eye className="w-4 h-4 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Explainable AI</h3>
        </div>
        <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded-lg">
          <Info className="w-3 h-3 text-blue-600" />
          <span className="text-xs text-blue-700 font-medium">Model Transparency</span>
        </div>
      </div>

      {/* View Selector */}
      <div className="flex space-x-1 mb-4 bg-gray-100 p-1 rounded-lg">
        {views.map((view) => {
          const Icon = view.icon;
          return (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeView === view.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{view.label}</span>
            </button>
          );
        })}
      </div>

      {/* Visualization */}
      <div className="mb-4">
        {renderVisualization()}
      </div>

      {/* Explanation */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">
          {activeView === 'heatmap' && 'Attention Analysis'}
          {activeView === 'features' && 'Feature Detection'}
          {activeView === 'gradients' && 'Gradient-weighted Analysis'}
        </h4>
        <p className="text-sm text-gray-600">
          {activeView === 'heatmap' && 'Red areas indicate regions where the AI model focuses most attention during classification. The model identified irregular borders and color variations as key diagnostic features.'}
          {activeView === 'features' && 'Different layers of the neural network detect various features: edges, textures, patterns, and complex structures that contribute to the final diagnosis.'}
          {activeView === 'gradients' && 'Gradient-weighted Class Activation Mapping shows how different parts of the image influence the model\'s decision, with warmer colors indicating higher influence.'}
        </p>
      </div>

      {/* Key Findings */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">Key AI Findings</h5>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Asymmetry Detection</span>
            <span className="font-medium text-red-600">High</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Border Irregularity</span>
            <span className="font-medium text-yellow-600">Moderate</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Color Variation</span>
            <span className="font-medium text-red-600">High</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Diameter Analysis</span>
            <span className="font-medium text-green-600">Normal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplainableAI;
