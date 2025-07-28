import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Users, Brain, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const diagnosticMetrics = {
    totalDiagnoses: 1247,
    accuracy: 94.2,
    averageTime: 1.3,
    confidenceScore: 89.5
  };

  const performanceData = [
    { month: 'Jan', accuracy: 91.2, diagnoses: 98 },
    { month: 'Feb', accuracy: 92.1, diagnoses: 112 },
    { month: 'Mar', accuracy: 93.5, diagnoses: 125 },
    { month: 'Apr', accuracy: 94.2, diagnoses: 138 },
    { month: 'May', accuracy: 94.8, diagnoses: 142 },
    { month: 'Jun', accuracy: 95.1, diagnoses: 156 }
  ];

  const conditionBreakdown = [
    { condition: 'Melanoma', count: 342, percentage: 27.4, trend: '+5.2%' },
    { condition: 'Basal Cell Carcinoma', count: 423, percentage: 33.9, trend: '+2.1%' },
    { condition: 'Squamous Cell Carcinoma', count: 298, percentage: 23.9, trend: '+1.8%' },
    { condition: 'Atypical Nevus', count: 184, percentage: 14.8, trend: '-0.5%' }
  ];

  const stagingAccuracy = [
    { stage: 'Stage 0', accuracy: 98.5, cases: 156 },
    { stage: 'Stage I', accuracy: 96.2, cases: 342 },
    { stage: 'Stage II', accuracy: 93.8, cases: 289 },
    { stage: 'Stage III', accuracy: 91.5, cases: 167 },
    { stage: 'Stage IV', accuracy: 89.2, cases: 93 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h2>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Diagnoses</p>
              <p className="text-2xl font-bold text-gray-900">{diagnosticMetrics.totalDiagnoses.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600">+15.3% vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">AI Accuracy</p>
              <p className="text-2xl font-bold text-green-600">{diagnosticMetrics.accuracy}%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600">+2.1% improvement</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
              <p className="text-2xl font-bold text-blue-600">{diagnosticMetrics.averageTime}s</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600">15% faster</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Confidence Score</p>
              <p className="text-2xl font-bold text-purple-600">{diagnosticMetrics.confidenceScore}%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600">High reliability</span>
          </div>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Diagnostic Performance Trends</h3>
          <div className="space-y-4">
            {performanceData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">Accuracy</span>
                      <span className="text-sm font-medium text-gray-900">{data.accuracy}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${data.accuracy}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium text-blue-600 ml-4">
                  {data.diagnoses} cases
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Condition Distribution</h3>
          <div className="space-y-4">
            {conditionBreakdown.map((condition, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{condition.condition}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{condition.count} cases</span>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      condition.trend.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {condition.trend}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${condition.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-12">
                    {condition.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Staging Accuracy */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Staging Accuracy by Stage</h3>
          <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-lg">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">Overall: 93.8%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {stagingAccuracy.map((stage, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">{stage.stage}</h4>
              <div className="text-2xl font-bold text-blue-600 mb-1">{stage.accuracy}%</div>
              <div className="text-xs text-gray-600">{stage.cases} cases</div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-600 h-1.5 rounded-full" 
                  style={{ width: `${stage.accuracy}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Performance Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Model Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-green-800">Strengths</h4>
                  <ul className="text-sm text-green-700 mt-1 space-y-1">
                    <li>• Excellent melanoma detection (96.8% accuracy)</li>
                    <li>• Fast processing time (1.3s average)</li>
                    <li>• High confidence in benign cases</li>
                    <li>• Consistent performance across ethnicities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-yellow-800">Areas for Improvement</h4>
                  <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                    <li>• Stage IV classification (89.2% accuracy)</li>
                    <li>• Rare skin condition recognition</li>
                    <li>• Performance on low-quality images</li>
                    <li>• Pediatric case handling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
