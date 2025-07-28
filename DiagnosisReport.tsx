import React from 'react';
import { Brain, AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react';

interface DiagnosisData {
  condition: string;
  confidence: number;
  severity: string;
  riskLevel: string;
  recommendations: string[];
}

interface DiagnosisResultsProps {
  data: DiagnosisData | null;
}

const DiagnosisResults: React.FC<DiagnosisResultsProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Brain className="w-4 h-4 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">AI Analysis</h3>
        </div>
        <div className="text-center py-8">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Analyzing image with AI models...</p>
        </div>
      </div>
    );
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-600 bg-green-50';
    if (confidence >= 0.6) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Brain className="w-4 h-4 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Diagnosis Results</h3>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>1.2s analysis time</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Primary Diagnosis */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-semibold text-gray-900">{data.condition}</h4>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getConfidenceColor(data.confidence)}`}>
              {Math.round(data.confidence * 100)}% confidence
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">Severity: {data.severity}</span>
            </div>
            <div className={`px-2 py-1 rounded border text-sm font-medium ${getRiskColor(data.riskLevel)}`}>
              {data.riskLevel} Risk
            </div>
          </div>
        </div>

        {/* Confidence Breakdown */}
        <div>
          <h5 className="text-sm font-semibold text-gray-700 mb-3">Model Confidence Breakdown</h5>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">CNN Classification</span>
              <span className="font-medium">87%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '87%' }}></div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Feature Analysis</span>
              <span className="font-medium">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Pattern Recognition</span>
              <span className="font-medium">84%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '84%' }}></div>
            </div>
          </div>
        </div>

        {/* Key Recommendations */}
        <div>
          <h5 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
            Immediate Recommendations
          </h5>
          <div className="space-y-2">
            {data.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-sm text-blue-900">{rec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResults;
