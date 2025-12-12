  import { useState } from 'react';
import { 
  AlertTriangle, 
  MapPin, 
  Phone, 
  Clock, 
  User, 
  Heart,
  Home,
  Utensils,
  Truck,
  Send,
  CheckCircle
} from 'lucide-react';

const HelpRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    coordinates: null,
    helpType: '',
    urgency: 'medium',
    description: '',
    peopleCount: 1
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sosRequests, setSosRequests] = useState([
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Anna Nagar, Chennai',
      helpType: 'medical',
      urgency: 'high',
      time: '5 mins ago',
      status: 'pending',
      peopleCount: 3
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Connaught Place, Delhi',
      helpType: 'food',
      urgency: 'medium',
      time: '15 mins ago',
      status: 'accepted',
      peopleCount: 5
    },
    {
      id: 3,
      name: 'Maya Patel',
      location: 'MG Road, Bangalore',
      helpType: 'shelter',
      urgency: 'high',
      time: '30 mins ago',
      status: 'resolved',
      peopleCount: 2
    }
  ]);

  const helpTypes = [
    { id: 'medical', name: 'Medical Aid', icon: <Heart className="h-5 w-5" />, color: 'text-red-600' },
    { id: 'food', name: 'Food & Water', icon: <Utensils className="h-5 w-5" />, color: 'text-green-600' },
    { id: 'shelter', name: 'Shelter', icon: <Home className="h-5 w-5" />, color: 'text-blue-600' },
    { id: 'rescue', name: 'Rescue', icon: <Truck className="h-5 w-5" />, color: 'text-orange-600' }
  ];

  const urgencyLevels = [
    { id: 'low', name: 'Low', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'medium', name: 'Medium', color: 'bg-orange-100 text-orange-800' },
    { id: 'high', name: 'High', color: 'bg-red-100 text-red-800' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getHelpTypeIcon = (type) => {
    const helpType = helpTypes.find(ht => ht.id === type);
    return helpType ? helpType.icon : <AlertTriangle className="h-5 w-5" />;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            coordinates: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            location: `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`
          }));
        },
        (error) => {
          alert('Unable to get your location. Please enter it manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Add to SOS requests
      const newRequest = {
        id: Date.now(),
        name: formData.name,
        location: formData.location,
        helpType: formData.helpType,
        urgency: formData.urgency,
        time: 'Just now',
        status: 'pending',
        peopleCount: formData.peopleCount
      };
      setSosRequests(prev => [newRequest, ...prev]);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          location: '',
          coordinates: null,
          helpType: '',
          urgency: 'medium',
          description: '',
          peopleCount: 1
        });
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-surface rounded-lg shadow-md p-8 max-w-md w-full mx-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-text mb-4">Help Request Submitted!</h2>
          <p className="text-textSecondary mb-6">
            Your emergency request has been received. Our response team will contact you shortly.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-medium">Request ID: #{Date.now()}</p>
            <p className="text-green-700 text-sm mt-2">
              Keep your phone accessible. Help is on the way.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text mb-4">Emergency Help Request</h1>
          <p className="text-textSecondary">
            Submit an SOS request for immediate assistance during emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Help Request Form */}
          <div className="lg:col-span-2">
            <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
              <div className="flex items-center space-x-2 mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h2 className="text-xl font-semibold text-text">Submit Help Request</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      <User className="h-4 w-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input id='border'
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-md bg-background text-text"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input id='border'
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-md bg-background text-text"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    <MapPin className="h-4 w-4 inline mr-2" />
                    Location *
                  </label>
                  <div className="flex space-x-2">
                    <input id='border'
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="flex-1 p-3 border rounded-md bg-background text-text"
                      placeholder="Enter your exact location"
                    />
                    <button
                      type="button"
                      onClick={getCurrentLocation}
                      className="px-4 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                      Get Location
                    </button>
                  </div>
                </div>

                {/* Help Type */}
                <div>
                  <label className="block text-sm font-medium text-text mb-3">
                    Type of Help Needed *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {helpTypes.map((type) => (
                      <label id='border' 
                        key={type.id}
                        className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.helpType === type.id
                            ? 'border-primary text-primary bg-blue-700 hover:text-text'
                            : 'border-gray-200'
                                              
                        }`}
                      >
                        <input id='border'
                          type="radio"
                          name="helpType"
                          value={type.id}
                          checked={formData.helpType === type.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`mb-2 ${type.color}`}>{type.icon}</div>
                        <span className="text-sm text-text text-center">{type.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Urgency and People Count */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Urgency Level *
                    </label>
                    <select id='border'
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-md bg-background text-text"
                    >
                      {urgencyLevels.map((level) => (
                        <option key={level.id} value={level.id}>
                          {level.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Number of People
                    </label>
                    <input id='border'
                      type="number"
                      name="peopleCount"
                      value={formData.peopleCount}
                      onChange={handleInputChange}
                      min="1"
                      max="50"
                      className="w-full p-3 border rounded-md bg-background text-text"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Additional Details
                  </label>
                  <textarea id='border'
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border rounded-md bg-background text-text"
                    placeholder="Describe your emergency situation and any specific needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-md font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Submitting Help Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Submit Emergency Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Active Requests */}
          <div className="lg:col-span-1">
            <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
              <h3 className="text-lg font-semibold text-text mb-4">Recent SOS Requests</h3>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {sosRequests.map((request) => (
                  <div id='border' key={request.id} className="bg-background rounded-lg p-4 border">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-textSecondary">
                          {getHelpTypeIcon(request.helpType)}
                        </div>
                        <span className="font-medium text-text text-sm">{request.name}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-textSecondary mb-2">{request.location}</p>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span className={`px-2 py-1 rounded-full font-medium ${getUrgencyColor(request.urgency)}`}>
                        {request.urgency}
                      </span>
                      <div className="flex items-center space-x-2 text-textSecondary">
                        <Clock className="h-3 w-3" />
                        <span>{request.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-textSecondary mt-2">
                      People affected: {request.peopleCount}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contacts */}
            <div id='border' className="bg-surface rounded-lg shadow-md p-6 border mt-6">
              <h3 className="text-lg font-semibold text-text mb-4">Emergency Contacts</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-red-600" />
                  <div>
                    <p className="font-medium text-text text-sm">Emergency Services</p>
                    <p className="text-textSecondary text-sm">112</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="font-medium text-text text-sm">CDMS Helpline</p>
                    <p className="text-textSecondary text-sm">1800-XXX-CDMS</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="font-medium text-text text-sm">Local Coordinator</p>
                    <p className="text-textSecondary text-sm">+91 98765 43210</p>
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

export default HelpRequest;