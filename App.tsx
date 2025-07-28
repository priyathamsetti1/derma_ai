import React, { useState } from 'react';
import { Camera, Upload, Brain, Activity, Users, BarChart3, FileText, Settings, ChevronRight, AlertCircle, CheckCircle } from 'lucide-react';
import ImageUpload from './components/ImageUpload';
import DiagnosisResults from './components/DiagnosisResults';
import ExplainableAI from './components/ExplainableAI';
import SeverityStaging from './components/SeverityStaging';
import TreatmentPlan from './components/TreatmentPlan';
import PatientDashboard from './components/PatientDashboard';
import Analytics from './components/Analytics';

function App() {
  const [activeTab, setActiveTab] = useState('diagnosis');
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [diagnosisData, setDiagnosisData] = useState(null);

  const navigation = [
    { id: 'diagnosis', label: 'Diagnosis', icon: Camera },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleImageUpload = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    // Simulate AI analysis
    setTimeout(() => {
      setDiagnosisData({
        condition: 'Melanoma',
        confidence: 0.87,
        severity: 'Stage IIA',
        riskLevel: 'High',
        recommendations: [
          'Immediate dermatological consultation',
          'Biopsy recommended',
          'Follow-up in 2 weeks'
        ]
      });
    }, 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'diagnosis':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Brain className="mr-3 text-blue-600" />
                AI Skin Lesion Analysis
              </h2>
              <ImageUpload onImageUpload={handleImageUpload} />
            </div>

            {currentImage && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ExplainableAI imageUrl={currentImage} />
                <div className="space-y-6">
                  <DiagnosisResults data={diagnosisData} />
                  {diagnosisData && <SeverityStaging data={diagnosisData} />}
                </div>
              </div>
            )}

            {diagnosisData && <TreatmentPlan data={diagnosisData} />}
          </div>
        );
      case 'patients':
        return <PatientDashboard />;
      case 'analytics':
        return <Analytics />;
      default:
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {navigation.find(nav => nav.id === activeTab)?.label}
            </h2>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">DermaAI</h1>
                <p className="text-sm text-gray-600">AI-Powered Skin Disease Diagnosis</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">System Active</span>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="px-6 py-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Today's Overview</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Diagnoses</span>
                <span className="font-semibold text-gray-900">23</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Accuracy</span>
                <span className="font-semibold text-green-600">94.2%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Avg Response</span>
                <span className="font-semibold text-blue-600">1.2s</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
