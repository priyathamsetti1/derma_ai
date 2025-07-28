import React from 'react';
import { AlertTriangle, TrendingUp, Target, Calendar } from 'lucide-react';

interface SeverityStagingProps {
  data: {
    severity: string;
    riskLevel: string;
  };
}

const SeverityStaging: React.FC<SeverityStagingProps> = ({ data }) => {
  const stagingData = {
    'Stage IIA': {
      description: 'T2a N0 M0',
      thickness: '1.01-2.0mm',
      ulceration: 'Absent',
      prognosis: '10-year survival: 85-90%',
      followUp: 'Every 3-6 months'
    }
  };

  const currentStaging = stagingData[data.severity as keyof typeof stagingData];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
          <Target className="w-4 h-4 text-orange-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Severity Staging</h3>
      </div>

      {/* Stage Overview */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xl font-bold text-gray-900">{data.severity}</h4>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            data.riskLevel === 'High' ? 'bg-red-100 text-red-800' :
            data.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {data.riskLevel} Risk
          </div>
        </div>
        {currentStaging && (
          <p className="text-gray-700 font-medium">{currentStaging.description}</p>
        )}
      </div>

      {/* Staging Details */}
      {currentStaging && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-600">Thickness</span>
              <span className="text-sm font-semibold text-gray-900">{currentStaging.thickness}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-600">Ulceration</span>
              <span className="text-sm font-semibold text-gray-900">{currentStaging.ulceration}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Prognosis</span>
              </div>
              <p className="text-sm text-blue-700">{currentStaging.prognosis}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">Follow-up</span>
              </div>
              <p className="text-sm text-purple-700">{currentStaging.followUp}</p>
            </div>
          </div>
        </div>
      )}

      {/* Staging Timeline */}
      <div>
        <h5 className="text-sm font-semibold text-gray-700 mb-3">Melanoma Staging Overview</h5>
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            {['Stage 0', 'Stage I', 'Stage II', 'Stage III', 'Stage IV'].map((stage, index) => (
              <div key={stage} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                  stage === 'Stage II' 
                    ? 'bg-orange-600 border-orange-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-600'
                }`}>
                  {index}
                </div>
                <span className="text-xs text-gray-600 mt-1">{stage}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-200 -z-10"></div>
          <div className="absolute top-4 left-4 h-0.5 bg-orange-600 -z-10" style={{ width: '40%' }}></div>
        </div>
      </div>

      {/* Alert */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-yellow-800">Clinical Staging Required</h4>
            <p className="text-sm text-yellow-700 mt-1">
              AI staging is preliminary. Histopathological examination and clinical assessment are required for definitive staging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeverityStaging;
