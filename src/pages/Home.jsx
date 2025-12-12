import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  Users, 
  MapPin, 
  Clock, 
  ArrowRight,
  Waves,
  Mountain,
  Flame,
  CloudRain
} from 'lucide-react';

const Home = () => {
  const [liveUpdates, setLiveUpdates] = useState([
    {
      id: 1,
      type: 'flood',
      icon: <Waves className="h-5 w-5" />,
      location: 'Chennai, Tamil Nadu',
      severity: 'High',
      time: '2 mins ago',
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'earthquake',
      icon: <Mountain className="h-5 w-5" />,
      location: 'Delhi NCR',
      severity: 'Medium',
      time: '15 mins ago',
      color: 'text-orange-600'
    },
    {
      id: 3,
      type: 'fire',
      icon: <Flame className="h-5 w-5" />,
      location: 'Bangalore, Karnataka',
      severity: 'Low',
      time: '1 hour ago',
      color: 'text-red-600'
    }
  ]);

  const stats = [
    { label: 'Active Volunteers', value: '2,543', icon: <Users className="h-6 w-6" /> },
    { label: 'Disaster Reports', value: '156', icon: <AlertTriangle className="h-6 w-6" /> },
    { label: 'Safe Zones', value: '89', icon: <MapPin className="h-6 w-6" /> },
    { label: 'Response Time', value: '< 5min', icon: <Clock className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real-time Disaster Response, <span className="text-yellow-300">Together</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
              Connect communities, coordinate resources, and save lives during disasters with our comprehensive management platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
              <Link
                to="/help-request"
                className="bg-accent hover:bg-red-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                <AlertTriangle className=" h-5 w-5 mr-2" />
                Report Disaster
              </Link>

              <Link
                to="/volunteer"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                <Users className="h-5 w-5 mr-2" />
                Join as Volunteer
              </Link>
              <Link
                to="/disaster-map"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                <MapPin className="h-5 w-5 mr-2" />
                View Live Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Updates */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quick Disaster Feed */}
            <div>
              <h2 className="text-3xl font-bold text-text mb-8">Latest Disaster Updates</h2>
              <div className="space-y-4">
                {liveUpdates.map((update) => (
                  <div id='border' key={update.id} className="bg-background rounded-lg p-6 shadow-md border ">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full bg-gray-100 ${update.color}`}>
                          {update.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-text">{update.location}</p>
                          <p className="text-textSecondary text-sm">Severity: {update.severity}</p>
                        </div>
                      </div>
                      <span className="text-sm text-textSecondary">{update.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/alerts"
                className="inline-flex items-center mt-6 text-primary hover:text-accent font-semibold"
              >
                View All Alerts <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Mini Map Preview */}
            <div>
              <h2 className="text-3xl font-bold text-text mb-8">Live Disaster Map</h2>
              <div id='border' className="bg-background rounded-lg p-6 shadow-md border h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-textSecondary mb-4">Interactive disaster map with real-time data</p>
                  <Link
                    to="/disaster-map"
                    className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Open Full Map
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Our Impact</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              Real-time statistics showing how our community is making a difference in disaster response and recovery.
            </p>
          </div>
          
          <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div id='border' key={index} className="bg-surface rounded-lg p-6 text-center shadow-md border">
                <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-text mb-2">{stat.value}</div>
                <div className="text-textSecondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">How It Works</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              Simple three-step process to get help during disasters and coordinate community response.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-text mb-4">Report</h3>
              <p className="text-textSecondary">
                Quickly report disasters or request help using our emergency forms with GPS location tracking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-text mb-4">Coordinate</h3>
              <p className="text-textSecondary">
                Connect with volunteers, emergency services, and resources through our coordination platform.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-text mb-4">Recover</h3>
              <p className="text-textSecondary">
                Track recovery progress and access resources for rebuilding communities stronger than before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">About Our Mission</h2>
              <p className="text-textSecondary mb-6 leading-relaxed">
                The Community Disaster Management System (CDMS) is a comprehensive platform designed to enhance disaster preparedness, response, and recovery through community collaboration and technology.
              </p>
              <p className="text-textSecondary mb-8 leading-relaxed">
                We believe that effective disaster management requires the active participation of communities, government agencies, NGOs, and volunteers working together with real-time information and coordinated response efforts.
              </p>
              <Link
                to="/about"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            
            <div id='border' className="bg-surface rounded-lg p-8 shadow-md border">
              <h3 className="text-xl font-semibold text-text mb-6">Key Features</h3>
              <ul className="space-y-4">
                {[
                  'Real-time disaster mapping and alerts',
                  'Emergency SOS request system',
                  'Volunteer coordination platform',
                  'Resource management dashboard',
                  'Recovery progress tracking',
                  'Multi-agency collaboration tools'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-textSecondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;