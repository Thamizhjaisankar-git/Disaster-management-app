import { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  Bell, 
  MapPin, 
  Clock, 
  Volume2, 
  Settings,
  Filter,
  Search
} from 'lucide-react';

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'flood',
      title: 'Severe Flood Warning',
      location: 'Chennai, Tamil Nadu',
      severity: 'High',
      time: '2 minutes ago',
      description: 'Heavy rainfall causing severe flooding in low-lying areas. Immediate evacuation recommended for Zone A residents.',
      source: 'IMD Weather Service',
      instructions: [
        'Move to higher ground immediately',
        'Avoid driving through flooded roads',
        'Keep emergency supplies ready',
        'Follow evacuation orders from local authorities'
      ],
      isActive: true
    },
    {
      id: 2,
      type: 'earthquake',
      title: 'Earthquake Alert',
      location: 'Delhi NCR',
      severity: 'Medium',
      time: '15 minutes ago',
      description: 'Moderate earthquake detected. Aftershocks possible in the next 24-48 hours.',
      source: 'National Seismological Centre',
      instructions: [
        'Stay away from damaged buildings',
        'Be prepared for aftershocks',
        'Check for gas leaks and electrical damage',
        'Keep emergency kit accessible'
      ],
      isActive: true
    },
    {
      id: 3,
      type: 'cyclone',
      title: 'Cyclone Warning',
      location: 'Visakhapatnam, Andhra Pradesh',
      severity: 'High',
      time: '1 hour ago',
      description: 'Cyclone approaching coastal areas. Wind speeds expected to reach 120+ kmph.',
      source: 'Cyclone Warning Division',
      instructions: [
        'Secure loose outdoor items',
        'Stock up on food and water',
        'Charge all electronic devices',
        'Avoid going near windows during storm'
      ],
      isActive: false
    }
  ]);

  const [subscriptions, setSubscriptions] = useState({
    pushNotifications: true,
    smsAlerts: false,
    emailAlerts: true,
    regions: ['Chennai', 'Delhi NCR']
  });

  const [filters, setFilters] = useState({
    severity: 'all',
    type: 'all',
    status: 'all'
  });

  const [searchTerm, setSearchTerm] = useState('');

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'flood': return '🌊';
      case 'earthquake': return '🌍';
      case 'cyclone': return '🌀';
      case 'fire': return '🔥';
      default: return '⚠️';
    }
  };

  const filteredAlerts = alerts.filter(alert => {
    const matchesSeverity = filters.severity === 'all' || alert.severity.toLowerCase() === filters.severity;
    const matchesType = filters.type === 'all' || alert.type === filters.type;
    const matchesStatus = filters.status === 'all' || (filters.status === 'active' ? alert.isActive : !alert.isActive);
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         alert.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSeverity && matchesType && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text mb-4">Emergency Alerts & Broadcasts</h1>
          <p className="text-textSecondary">
            Real-time disaster warnings and emergency instructions from official sources.
          </p>
        </div>

        {/* Active Alerts Banner */}
        <div className="mb-8">
          <div className="bg-red-600 text-white p-4 rounded-lg shadow-md flex items-center space-x-4">
            <Volume2 className="h-6 w-6 animate-pulse" />
            <div className="flex-1">
              <p className="font-semibold">Active Emergency Alert</p>
              <p className="text-sm opacity-90">
                {alerts.filter(alert => alert.isActive).length} active alerts in your region
              </p>
            </div>
            <Bell className="h-6 w-6" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div id='border' className="bg-surface rounded-lg p-6 shadow-md border">
              <div className="relative">
                <Search id='search' className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary h-4 w-4 pt-5" />
                <input id='search-input'
                  type="text"
                  placeholder="Search alerts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border rounded-md bg-background text-text"
                />
              </div>
            </div>

            {/* Filters */}
            <div id='border' className="bg-surface rounded-lg p-6 shadow-md border">
              <h3 className="font-semibold text-text mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Severity</label>
                  <select id='border' 
                    className="w-full p-2 border rounded-md bg-background text-text"
                    value={filters.severity}
                    onChange={(e) => setFilters({...filters, severity: e.target.value})}
                  >
                    <option value="all">All Severities</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Type</label>
                  <select id='border'
                    className="w-full p-2 border rounded-md bg-background text-text"
                    value={filters.type}
                    onChange={(e) => setFilters({...filters, type: e.target.value})}
                  >
                    <option value="all">All Types</option>
                    <option value="flood">Flood</option>
                    <option value="earthquake">Earthquake</option>
                    <option value="cyclone">Cyclone</option>
                    <option value="fire">Fire</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Status</label>
                  <select id='border'
                    className="w-full p-2 border rounded-md bg-background text-text"
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div id='border' className="bg-surface rounded-lg p-6 shadow-md border">
              <h3 className="font-semibold text-text mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Alert Settings
              </h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={subscriptions.pushNotifications}
                    onChange={(e) => setSubscriptions({
                      ...subscriptions,
                      pushNotifications: e.target.checked
                    })}
                    className="rounded text-primary"
                  />
                  <span className="text-sm text-text">Push Notifications</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={subscriptions.smsAlerts}
                    onChange={(e) => setSubscriptions({
                      ...subscriptions,
                      smsAlerts: e.target.checked
                    })}
                    className="rounded text-primary"
                  />
                  <span className="text-sm text-text">SMS Alerts</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={subscriptions.emailAlerts}
                    onChange={(e) => setSubscriptions({
                      ...subscriptions,
                      emailAlerts: e.target.checked
                    })}
                    className="rounded text-primary"
                  />
                  <span className="text-sm text-text">Email Alerts</span>
                </label>
              </div>
            </div>
          </div>

          {/* Alerts List */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredAlerts.map((alert) => (
                <div key={alert.id} className={`bg-surface rounded-lg shadow-md border-l-4 overflow-hidden ${
                  alert.isActive ? 'border-l-red-500' : 'border-l-gray-300'
                }`}>
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{getTypeIcon(alert.type)}</span>
                        <div>
                          <h3 className="text-xl font-semibold text-text">{alert.title}</h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4 text-textSecondary" />
                              <span className="text-sm text-textSecondary">{alert.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-textSecondary" />
                              <span className="text-sm text-textSecondary">{alert.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                        {alert.isActive && (
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-textSecondary mb-4">{alert.description}</p>
                    
                    {/* Source */}
                    <p className="text-sm text-textSecondary mb-4">
                      <strong>Source:</strong> {alert.source}
                    </p>

                    {/* Instructions */}
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-semibold text-text mb-3 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Safety Instructions
                      </h4>
                      <ul className="space-y-2">
                        {alert.instructions.map((instruction, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-primary font-semibold mt-1">•</span>
                            <span className="text-textSecondary text-sm">{instruction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredAlerts.length === 0 && (
              <div className="text-center py-12">
                <AlertTriangle className="h-12 w-12 text-textSecondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text mb-2">No Alerts Found</h3>
                <p className="text-textSecondary">
                  {searchTerm || filters.severity !== 'all' || filters.type !== 'all' || filters.status !== 'all'
                    ? 'No alerts match your current filters.'
                    : 'No active alerts at this time.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;