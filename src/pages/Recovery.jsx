import { useState } from 'react';
import { 
  TrendingUp, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Users, 
  Home,
  Heart,
  Award,
  ArrowRight
} from 'lucide-react';

const Recovery = () => {
  const [activeTab, setActiveTab] = useState('timeline');

  const recoveryProjects = [
    {
      id: 1,
      title: 'Housing Reconstruction Program',
      location: 'Chennai Flood Zone',
      progress: 75,
      status: 'In Progress',
      completed: 150,
      total: 200,
      budget: '₹5 Crore',
      startDate: 'Jan 2024',
      expectedCompletion: 'Mar 2025'
    },
    {
      id: 2,
      title: 'School Infrastructure Repair',
      location: 'Affected Districts',
      progress: 90,
      status: 'Near Completion',
      completed: 18,
      total: 20,
      budget: '₹2.5 Crore',
      startDate: 'Dec 2023',
      expectedCompletion: 'Jan 2025'
    },
    {
      id: 3,
      title: 'Healthcare Facility Restoration',
      location: 'Rural Areas',
      progress: 60,
      status: 'In Progress',
      completed: 12,
      total: 20,
      budget: '₹3 Crore',
      startDate: 'Feb 2024',
      expectedCompletion: 'Aug 2025'
    }
  ];

  const timelineData = [
    {
      phase: 'Immediate Response',
      duration: '0-72 hours',
      status: 'Completed',
      activities: [
        'Emergency evacuation completed',
        'Temporary shelters established',
        'Medical aid provided to 2,500+ people',
        'Food and water distribution initiated'
      ]
    },
    {
      phase: 'Relief & Recovery',
      duration: '3 days - 3 months',
      status: 'Completed',
      activities: [
        'Damage assessment conducted',
        'Temporary housing for 850 families',
        'Livelihood support programs launched',
        'Psychological support services initiated'
      ]
    },
    {
      phase: 'Rehabilitation',
      duration: '3 months - 2 years',
      status: 'In Progress',
      activities: [
        'Permanent housing construction (75% complete)',
        'Infrastructure rebuilding ongoing',
        'Livelihood restoration programs',
        'Community preparedness training'
      ]
    },
    {
      phase: 'Risk Reduction',
      duration: '2+ years',
      status: 'Planning',
      activities: [
        'Early warning systems installation',
        'Community resilience building',
        'Long-term preparedness planning',
        'Sustainable development initiatives'
      ]
    }
  ];

  const impactStories = [
    {
      id: 1,
      name: 'Priya Malhotra',
      role: 'Flood Survivor',
      story: "The CDMS team helped evacuate my family within 30 minutes. Today, we've moved into our new home built through the reconstruction program.",
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      category: 'survivor'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Kumar',
      role: 'Volunteer Coordinator',
      story: "Coordinating 200+ volunteers during the Chennai floods was challenging, but the platform made resource allocation seamless and efficient.",
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      category: 'volunteer'
    },
    {
      id: 3,
      name: 'Maya Sharma',
      role: 'Local NGO Leader',
      story: "The transparent tracking system helped us coordinate with 15 other organizations, ensuring no duplication of efforts and maximum impact.",
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      category: 'partner'
    }
  ];

  const governmentAid = [
    {
      scheme: 'Chief Minister Relief Fund',
      amount: '₹25 Crore',
      beneficiaries: 5000,
      status: 'Distributed',
      type: 'Financial'
    },
    {
      scheme: 'Housing Reconstruction Grant',
      amount: '₹15 Crore',
      beneficiaries: 750,
      status: 'Ongoing',
      type: 'Housing'
    },
    {
      scheme: 'Livelihood Support Program',
      amount: '₹8 Crore',
      beneficiaries: 2500,
      status: 'Ongoing',
      type: 'Economic'
    },
    {
      scheme: 'Medical Assistance Fund',
      amount: '₹5 Crore',
      beneficiaries: 3500,
      status: 'Distributed',
      type: 'Medical'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in progress': return 'bg-blue-100 text-blue-800';
      case 'near completion': return 'bg-yellow-100 text-yellow-800';
      case 'planning': return 'bg-gray-100 text-gray-800';
      case 'distributed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text mb-4">Post-Disaster Recovery Tracker</h1>
          <p className="text-textSecondary">
            Monitor rehabilitation efforts, track project progress, and measure community recovery impact.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-text">87%</div>
            <div className="text-textSecondary text-sm">Recovery Progress</div>
          </div>
          
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border text-center">
            <Home className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-text">1,247</div>
            <div className="text-textSecondary text-sm">Homes Rebuilt</div>
          </div>
          
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-text">8,500</div>
            <div className="text-textSecondary text-sm">People Rehabilitated</div>
          </div>
          
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border text-center">
            <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-text">₹53Cr</div>
            <div className="text-textSecondary text-sm">Aid Distributed</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div id='border' className="bg-surface rounded-lg shadow-md border mb-8">
          <div id='border' className="flex border-b">
            {[
              { id: 'timeline', label: 'Recovery Timeline' },
              { id: 'projects', label: 'Active Projects' },
              { id: 'stories', label: 'Impact Stories' },
              { id: 'aid', label: 'Government Aid' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 bg-gray-800 py-4 font-medium ${
                  activeTab === tab.id
                    ? 'border-b-2 border-primary text-primary bg-blue-50'
                    : 'text-black-50 hover:text-text'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Recovery Timeline */}
            {activeTab === 'timeline' && (
              <div className="space-y-8">
                <h2 className="text-xl font-semibold text-text">Disaster Recovery Phases</h2>
                
                <div className="space-y-6">
                  {timelineData.map((phase, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start space-x-6">
                        {/* Timeline dot */}
                        <div className="flex flex-col items-center">
                          <div className={`w-4 h-4 rounded-full ${
                            phase.status === 'Completed' ? 'bg-green-500' :
                            phase.status === 'In Progress' ? 'bg-blue-500' :
                            'bg-gray-400'
                          }`}></div>
                          {index < timelineData.length - 1 && (
                            <div className="w-0.5 h-20 bg-gray-300 mt-2"></div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-text">{phase.phase}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(phase.status)}`}>
                              {phase.status}
                            </span>
                          </div>
                          <p className="text-textSecondary text-sm mb-4">{phase.duration}</p>
                          
                          <ul className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-textSecondary text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Active Projects */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-text">Ongoing Recovery Projects</h2>
                
                {recoveryProjects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-text">{project.title}</h3>
                        <p className="text-textSecondary">{project.location}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-text">Progress</span>
                        <span className="text-sm text-textSecondary">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-primary h-3 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-textSecondary">Completed</span>
                        <div className="font-semibold text-text">{project.completed}/{project.total}</div>
                      </div>
                      <div>
                        <span className="text-textSecondary">Budget</span>
                        <div className="font-semibold text-text">{project.budget}</div>
                      </div>
                      <div>
                        <span className="text-textSecondary">Started</span>
                        <div className="font-semibold text-text">{project.startDate}</div>
                      </div>
                      <div>
                        <span className="text-textSecondary">Expected Completion</span>
                        <div className="font-semibold text-text">{project.expectedCompletion}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Impact Stories */}
            {activeTab === 'stories' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-text">Community Impact Stories</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {impactStories.map((story) => (
                    <div key={story.id} className="border rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-text">{story.name}</h3>
                          <p className="text-sm text-textSecondary">{story.role}</p>
                        </div>
                      </div>
                      <p className="text-textSecondary text-sm leading-relaxed">
                        "{story.story}"
                      </p>
                      <div className={`mt-4 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        story.category === 'survivor' ? 'bg-blue-100 text-blue-800' :
                        story.category === 'volunteer' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {story.category}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Government Aid */}
            {activeTab === 'aid' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-text">Government Aid Distribution</h2>
                
                <div className="space-y-4">
                  {governmentAid.map((aid, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-text">{aid.scheme}</h3>
                          <p className="text-textSecondary text-sm">{aid.type} Support</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(aid.status)}`}>
                          {aid.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center justify-between">
                          <span className="text-textSecondary">Total Amount</span>
                          <span className="font-semibold text-text text-lg">{aid.amount}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-textSecondary">Beneficiaries</span>
                          <span className="font-semibold text-text text-lg">{aid.beneficiaries.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;