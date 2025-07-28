import React from 'react';
import { FileText, Clock, User, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

interface TreatmentPlanProps {
  data: {
    condition: string;
    severity: string;
    riskLevel: string;
    recommendations: string[];
  };
}

const TreatmentPlan: React.FC<TreatmentPlanProps> = ({ data }) => {
  const treatmentSteps = [
    {
      phase: 'Immediate (0-7 days)',
      status: 'pending',
      tasks: [
        'Schedule urgent dermatological consultation',
        'Order dermatoscopy examination',
        'Prepare patient for possible biopsy'
      ]
    },
    {
      phase: 'Short-term (1-2 weeks)',
      status: 'pending',
      tasks: [
        'Perform excisional biopsy',
        'Histopathological analysis',
        'Staging workup if malignant'
      ]
    },
    {
      phase: 'Treatment (2-8 weeks)',
      status: 'pending',
      tasks: [
        'Wide local excision',
        'Sentinel lymph node biopsy',
        'Consider adjuvant therapy'
      ]
    },
    {
      phase: 'Follow-up (ongoing)',
      status: 'pending',
      tasks: [
        'Regular clinical examinations',
        'Imaging surveillance',
        'Patient education on self-examination'
      ]
    }
  ];

  const adherenceMetrics = {
    currentAdherence: 92,
    targetAdherence: 95,
    improvementTrend: '+8%'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <FileText className="w-4 h-4 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Treatment Plan</h3>
        </div>
        <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-lg">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-800">Plan Generated</span>
        </div>
      </div>

      {/* Treatment Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          {data.condition} - {data.severity}
        </h4>
        <p className="text-gray-700 text-sm">
          Comprehensive treatment plan based on current staging and risk assessment. 
          Plan designed to optimize outcomes while maintaining patient quality of life.
        </p>
      </div>

      {/* Adherence Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {adherenceMetrics.currentAdherence}%
          </div>
          <div className="text-sm text-gray-600">Current Adherence</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {adherenceMetrics.targetAdherence}%
          </div>
          <div className="text-sm text-gray-600">Target Adherence</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-600 mb-1">
            {adherenceMetrics.improvementTrend}
          </div>
          <div className="text-sm text-gray-600">30-day Improvement</div>
        </div>
      </div>

      {/* Treatment Timeline */}
      <div className="space-y-4 mb-6">
        <h5 className="text-sm font-semibold text-gray-700 flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          Treatment Timeline
        </h5>
        {treatmentSteps.map((step, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  step.status === 'completed' ? 'bg-green-100 text-green-800' :
                  step.status === 'active' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {index + 1}
                </div>
                <h6 className="font-semibold text-gray-900">{step.phase}</h6>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {step.status === 'pending' ? 'Scheduled' : 'In Progress'}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              {step.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Specialist Referrals */}
      <div className="border-t border-gray-200 pt-6">
        <h5 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
          <User className="w-4 h-4 mr-2" />
          Recommended Specialists
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <h6 className="font-semibold text-blue-900">Dermatological Oncologist</h6>
            <p className="text-sm text-blue-700">Specialized melanoma treatment</p>
            <div className="text-xs text-blue-600 mt-1">Priority: Urgent</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-3">
            <h6 className="font-semibold text-purple-900">Surgical Oncologist</h6>
            <p className="text-sm text-purple-700">Excision and lymph node evaluation</p>
            <div className="text-xs text-purple-600 mt-1">Priority: High</div>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <h6 className="font-semibold text-green-900">Medical Oncologist</h6>
            <p className="text-sm text-green-700">Systemic therapy consultation</p>
            <div className="text-xs text-green-600 mt-1">Priority: Moderate</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-3">
            <h6 className="font-semibold text-yellow-900">Plastic Surgeon</h6>
            <p className="text-sm text-yellow-700">Reconstruction if needed</p>
            <div className="text-xs text-yellow-600 mt-1">Priority: As needed</div>
          </div>
        </div>
      </div>

      {/* Clinical Note */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-amber-800">Clinical Note</h4>
            <p className="text-sm text-amber-700 mt-1">
              This treatment plan is AI-generated based on current best practices and should be reviewed and customized by the treating physician based on individual patient factors and institutional protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentPlan;
