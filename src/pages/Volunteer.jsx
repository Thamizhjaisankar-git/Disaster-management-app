import { useState } from 'react';
import { 
  Users, 
  Award, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Heart,
  UserPlus,
  Calendar,
  Star
} from 'lucide-react';

const Volunteer = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    skills: [],
    availability: 'flexible',
    experience: 'beginner'
  });

  const [tasks] = useState([
    {
      id: 1,
      title: 'Food Distribution',
      location: 'Anna Nagar Relief Center',
      urgency: 'High',
      volunteers: '5/10',
      timeCommitment: '4 hours',
      description: 'Help distribute food packets to flood victims',
      skills: ['logistics', 'communication'],
      status: 'open'
    },
    {
      id: 2,
      title: 'Medical Support',
      location: 'Emergency Medical Camp, Chennai',
      urgency: 'Critical',
      volunteers: '8/12',
      timeCommitment: '6 hours',
      description: 'Assist medical professionals in treating patients',
      skills: ['medical', 'first-aid'],
      status: 'open'
    },
    {
      id: 3,
      title: 'Shelter Setup',
      location: 'Community Hall, T. Nagar',
      urgency: 'Medium',
      volunteers: '12/15',
      timeCommitment: '3 hours',
      description: 'Set up temporary shelters for displaced families',
      skills: ['manual-labor', 'organization'],
      status: 'in-progress'
    }
  ]);

  const [leaderboard] = useState([
    { rank: 1, name: 'Arjun Mehta', tasks: 47, hours: 156, points: 2340 },
    { rank: 2, name: 'Priya Singh', tasks: 42, hours: 143, points: 2120 },
    { rank: 3, name: 'Ravi Kumar', tasks: 38, hours: 128, points: 1890 },
    { rank: 4, name: 'Sneha Patel', tasks: 35, hours: 117, points: 1750 },
    { rank: 5, name: 'Vikash Gupta', tasks: 31, hours: 104, points: 1560 }
  ]);

  const skillOptions = [
    { id: 'medical', name: 'Medical/First Aid', icon: '🏥' },
    { id: 'logistics', name: 'Logistics & Supply Chain', icon: '📦' },
    { id: 'communication', name: 'Communication', icon: '📢' },
    { id: 'rescue', name: 'Rescue Operations', icon: '🚑' },
    { id: 'tech', name: 'Technology Support', icon: '💻' },
    { id: 'manual-labor', name: 'Manual Labor', icon: '💪' },
    { id: 'counseling', name: 'Counseling/Support', icon: '🤝' },
    { id: 'organization', name: 'Event Organization', icon: '📋' }
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleSkillToggle = (skillId) => {
    setRegistrationData(prev => ({
      ...prev,
      skills: prev.skills.includes(skillId)
        ? prev.skills.filter(id => id !== skillId)
        : [...prev.skills, skillId]
    }));
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  const handleTaskAccept = (taskId) => {
    alert(`Task ${taskId} accepted! You will receive further instructions via SMS/Email.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text mb-4">Volunteer Coordination Portal</h1>
          <p className="text-textSecondary">
            Join our community of volunteers and make a difference during disasters.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-text">2,543</div>
            <div className="text-textSecondary text-sm">Active Volunteers</div>
          </div>
          
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-text">1,847</div>
            <div className="text-textSecondary text-sm">Tasks Completed</div>
          </div>
          
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border text-center">
            <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-text">12,456</div>
            <div className="text-textSecondary text-sm">Hours Volunteered</div>
          </div>
          
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border text-center">
            <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-text">856</div>
            <div className="text-textSecondary text-sm">Lives Impacted</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Registration Form */}
            {!isRegistered ? (
              <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
                <div className="flex items-center space-x-2 mb-6">
                  <UserPlus className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold text-text">Volunteer Registration</h2>
                </div>

                <form onSubmit={handleRegistration} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Full Name *</label>
                      <input id='border'
                        type="text"
                        value={registrationData.name}
                        onChange={(e) => setRegistrationData({...registrationData, name: e.target.value})}
                        required
                        className="w-full p-3 border rounded-md bg-background text-text"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Email *</label>
                      <input id='border'
                        type="email"
                        value={registrationData.email}
                        onChange={(e) => setRegistrationData({...registrationData, email: e.target.value})}
                        required
                        className="w-full p-3 border rounded-md bg-background text-text"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Phone Number *</label>
                      <input id='border'
                        type="tel"
                        value={registrationData.phone}
                        onChange={(e) => setRegistrationData({...registrationData, phone: e.target.value})}
                        required
                        className="w-full p-3 border rounded-md bg-background text-text"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Location *</label>
                      <input id='border'
                        type="text"
                        value={registrationData.location}
                        onChange={(e) => setRegistrationData({...registrationData, location: e.target.value})}
                        required
                        className="w-full p-3 border rounded-md bg-background text-text"
                        placeholder="Your city/area"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-3">Skills & Expertise</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {skillOptions.map((skill) => (
                        <label id='border'
                          key={skill.id}
                          className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer transition-all ${
                            registrationData.skills.includes(skill.id)
                              ? 'border-primary bg-blue-500'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={registrationData.skills.includes(skill.id)}
                            onChange={() => handleSkillToggle(skill.id)}
                            className="sr-only"
                          />
                          <span className="text-lg mb-1">{skill.icon}</span>
                          <span className="text-xs text-center text-text">{skill.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Availability</label>
                      <select id='border'
                        value={registrationData.availability}
                        onChange={(e) => setRegistrationData({...registrationData, availability: e.target.value})}
                        className="w-full p-3 border rounded-md bg-background text-text"
                      >
                        <option value="flexible">Flexible</option>
                        <option value="weekends">Weekends Only</option>
                        <option value="weekdays">Weekdays Only</option>
                        <option value="emergency">Emergency Only</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Experience Level</label>
                      <select id='border'
                        value={registrationData.experience}
                        onChange={(e) => setRegistrationData({...registrationData, experience: e.target.value})}
                        className="w-full p-3 border rounded-md bg-background text-text"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="experienced">Experienced</option>
                        <option value="expert">Expert</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Register as Volunteer
                  </button>
                </form>
              </div>
            ) : (
              /* Task Board */
              <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-text">Available Tasks</h2>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-textSecondary">Registered Volunteer</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {tasks.map((task) => (
                    <div id='border' key={task.id} className="border rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-text mb-2">{task.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-textSecondary mb-2">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{task.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{task.timeCommitment}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{task.volunteers}</span>
                            </div>
                          </div>
                          <p className="text-textSecondary mb-3">{task.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {task.skills.map((skill) => {
                              const skillData = skillOptions.find(s => s.id === skill);
                              return (
                                <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                  {skillData?.icon} {skillData?.name}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end space-y-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(task.urgency)}`}>
                            {task.urgency}
                          </span>
                          <button
                            onClick={() => handleTaskAccept(task.id)}
                            className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                          >
                            Accept Task
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Volunteer Leaderboard */}
            <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-5 w-5 text-yellow-500" />
                <h3 className="text-lg font-semibold text-text">Volunteer Leaderboard</h3>
              </div>
              
              <div className="space-y-3">
                {leaderboard.map((volunteer) => (
                  <div key={volunteer.rank} className="flex items-center space-x-3 p-3 rounded-lg bg-background">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      volunteer.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                      volunteer.rank === 2 ? 'bg-gray-100 text-gray-800' :
                      volunteer.rank === 3 ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {volunteer.rank}
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-medium text-text text-sm">{volunteer.name}</p>
                      <div className="flex items-center space-x-4 text-xs text-textSecondary">
                        <span>{volunteer.tasks} tasks</span>
                        <span>{volunteer.hours}h</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>{volunteer.points}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
              <h3 className="text-lg font-semibold text-text mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full bg-primary text-white p-3 rounded-md text-sm hover:bg-blue-700 transition-colors">
                  View My Tasks
                </button>
                <button className="w-full bg-green-600 text-white p-3 rounded-md text-sm hover:bg-green-700 transition-colors">
                  Emergency Deployment
                </button>
                <button className="w-full border border-primary text-primary p-3 rounded-md text-sm hover:bg-blue-50 transition-colors">
                  Training Programs
                </button>
                <button className="w-full border border-gray-300 text-primary p-3 rounded-md text-sm hover:bg-gray-50 transition-colors">
                  Volunteer Guidelines
                </button>
              </div>
            </div>

            {/* Volunteer Resources */}
            <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
              <h3 className="text-lg font-semibold text-text mb-4">Resources</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-text text-sm">Training Schedule</p>
                    <p className="text-textSecondary text-xs">Next session: Dec 15, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-4 w-4 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-text text-sm">Community Groups</p>
                    <p className="text-textSecondary text-xs">Join local volunteer groups</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="h-4 w-4 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-medium text-text text-sm">Certifications</p>
                    <p className="text-textSecondary text-xs">Earn volunteer badges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;