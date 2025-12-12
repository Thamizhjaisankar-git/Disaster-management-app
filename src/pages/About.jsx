import { 
  Shield, 
  Users, 
  Heart, 
  Target, 
  Award,
  Mail,
  Phone,
  MapPin,
  Globe,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Anjali Sharma',
      role: 'Disaster Management Expert',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: '15+ years in disaster response coordination'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Technology Lead',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert in crisis management technology'
    },
    {
      name: 'Priya Mehta',
      role: 'Community Outreach Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Specializes in community engagement'
    },
    {
      name: 'Vikash Singh',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: '10+ years in emergency operations'
    }
  ];

  const partners = [
    { name: 'National Disaster Management Authority (NDMA)', type: 'Government' },
    { name: 'Indian Meteorological Department (IMD)', type: 'Government' },
    { name: 'Red Cross India', type: 'NGO' },
    { name: 'Goonj', type: 'NGO' },
    { name: 'HelpAge India', type: 'NGO' },
    { name: 'Tata Group', type: 'Corporate' },
    { name: 'Reliance Foundation', type: 'Corporate' },
    { name: 'Infosys Foundation', type: 'Corporate' }
  ];

  const achievements = [
    { number: '2.5M+', label: 'People Reached' },
    { number: '50+', label: 'Partner Organizations' },
    { number: '15', label: 'States Covered' },
    { number: '24/7', label: 'Emergency Response' }
  ];

  const features = [
    'Real-time disaster mapping and tracking',
    'Emergency SOS request system',
    'Volunteer coordination platform',
    'Resource management dashboard',
    'Multi-language support',
    'Mobile-responsive design',
    'Integration with government agencies',
    'Community-driven approach'
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-text mb-6">About CDMS</h1>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
            The Community Disaster Management System is a comprehensive platform designed to enhance 
            disaster preparedness, response, and recovery through community collaboration and technology.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div id='border' className="bg-surface rounded-lg shadow-md p-8 border">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-text">Our Mission</h2>
            </div>
            <p className="text-textSecondary leading-relaxed">
              To create a resilient and well-prepared community ecosystem that can effectively respond 
              to disasters through technology-enabled coordination, real-time information sharing, and 
              collaborative resource management.
            </p>
          </div>

          <div className="bg-surface rounded-lg shadow-md p-8 border">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-text">Our Vision</h2>
            </div>
            <p className="text-textSecondary leading-relaxed">
              To build disaster-resilient communities where every citizen is prepared, every response 
              is coordinated, and every recovery effort leads to stronger, more sustainable communities.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Platform Features</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              Comprehensive tools and services designed to support every phase of disaster management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-surface rounded-lg p-4 shadow-sm border">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="bg-surface rounded-lg shadow-md p-8 border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text mb-4">Our Impact</h2>
            <p className="text-textSecondary">Making a difference in disaster management across India</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-textSecondary">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Our Leadership Team</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              Experienced professionals dedicated to building resilient communities through technology and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-surface rounded-lg shadow-md p-6 border text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-text mb-2">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-textSecondary text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Our Partners</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              Collaborating with government agencies, NGOs, and corporate partners to create comprehensive disaster response networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-surface rounded-lg p-4 shadow-sm border text-center">
                <h4 className="font-semibold text-text text-sm mb-2">{partner.name}</h4>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  partner.type === 'Government' ? 'bg-blue-100 text-blue-800' :
                  partner.type === 'NGO' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {partner.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-surface rounded-lg shadow-md p-8 border">
            <h2 className="text-2xl font-semibold text-text mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-text">Headquarters</h3>
                  <p className="text-textSecondary">
                    123 Disaster Management Complex<br />
                    New Delhi, India - 110001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-text">Emergency Helpline</h3>
                  <p className="text-textSecondary">
                    24/7: 1800-XXX-CDMS<br />
                    Emergency: 112
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-text">Email</h3>
                  <p className="text-textSecondary">
                    General: info@cdms.org<br />
                    Emergency: emergency@cdms.org
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-surface rounded-lg shadow-md p-8 border">
            <h2 className="text-2xl font-semibold text-text mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text mb-2">How do I report a disaster?</h3>
                <p className="text-textSecondary text-sm">
                  Use our Help Request portal to submit emergency SOS requests with your location and type of assistance needed.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text mb-2">How can I become a volunteer?</h3>
                <p className="text-textSecondary text-sm">
                  Register through our Volunteer Portal by providing your skills, availability, and location preferences.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text mb-2">Is the platform available in multiple languages?</h3>
                <p className="text-textSecondary text-sm">
                  Yes, CDMS supports multiple regional languages to ensure accessibility across diverse communities.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text mb-2">How is my data protected?</h3>
                <p className="text-textSecondary text-sm">
                  We follow strict data protection protocols and only use information for emergency response coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;