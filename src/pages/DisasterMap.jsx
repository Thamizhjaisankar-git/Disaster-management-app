import { useState, useEffect } from 'react';
import { 
  MapPin, 
  Layers, 
  Filter, 
  AlertCircle, 
  Shield, 
  Heart, 
  Truck,
  Users,
  Phone
} from 'lucide-react';

const DisasterMap = () => {
  const [selectedLayer, setSelectedLayer] = useState('all');
  const [selectedDisaster, setSelectedDisaster] = useState(null);
  const [filters, setFilters] = useState({
    severity: 'all',
    type: 'all',
    timeRange: 'all'
  });

  const layers = [
    { id: 'all', name: 'All Layers', color: 'text-gray-600' },
    { id: 'affected', name: 'Affected Zones', color: 'text-red-600' },
    { id: 'safe', name: 'Safe Zones', color: 'text-green-600' },
    { id: 'shelters', name: 'Shelters', color: 'text-blue-600' },
    { id: 'rescue', name: 'Rescue Teams', color: 'text-orange-600' },
    { id: 'sos', name: 'SOS Requests', color: 'text-purple-600' }
  ];

  const mockDisasters = [
    {
      id: 1,
      type: 'flood',
      location: 'Chennai Central',
      severity: 'High',
      coordinates: [80.2707, 13.0827],
      status: 'Active',
      description: 'Heavy flooding in residential areas',
      shelterCapacity: '500/800',
      rescueTeams: 5,
      sosRequests: 23
    },
    {
      id: 2,
      type: 'earthquake',
      location: 'Delhi NCR',
      severity: 'Medium',
      coordinates: [77.1025, 28.7041],
      status: 'Monitoring',
      description: 'Earthquake aftershocks reported',
      shelterCapacity: '200/400',
      rescueTeams: 3,
      sosRequests: 8
    },
    {
      id: 3,
      type: 'fire',
      location: 'Bangalore East',
      severity: 'Low',
      coordinates: [77.7500, 12.9716],
      status: 'Contained',
      description: 'Forest fire under control',
      shelterCapacity: '50/200',
      rescueTeams: 2,
      sosRequests: 2
    }
  ];

  const liveUpdates = [
    { time: '2 mins ago', message: 'New shelter opened in Chennai Zone A' },
    { time: '5 mins ago', message: 'Rescue team deployed to Delhi NCR' },
    { time: '10 mins ago', message: '15 people evacuated from Bangalore East' },
    { time: '15 mins ago', message: 'Emergency supplies distributed in Chennai' }
  ];

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      case 'low': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text mb-4">Live Disaster Map</h1>
          <p className="text-textSecondary">
            Real-time visualization of disaster zones, safe areas, shelters, and emergency resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Layer Controls */}
            <div id='border' className="bg-surface rounded-lg p-6 shadow-md border">
              <h3 className="font-semibold text-text mb-4 flex items-center">
                <Layers className="h-5 w-5 mr-2" />
                Map Layers
              </h3>
              <div className="space-y-2">
                {layers.map((layer) => (
                  <label key={layer.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="layer"
                      value={layer.id}
                      checked={selectedLayer === layer.id}
                      onChange={(e) => setSelectedLayer(e.target.value)}
                      className="text-primary"
                    />
                    <span className={`text-sm ${layer.color}`}>{layer.name}</span>
                  </label>
                ))}
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
                  <label className="block text-sm font-medium text-text mb-2">Disaster Type</label>
                  <select id='border'
                    className="w-full p-2 border rounded-md bg-background text-text"
                    value={filters.type}
                    onChange={(e) => setFilters({...filters, type: e.target.value})}
                  >
                    <option value="all">All Types</option>
                    <option value="flood">Flood</option>
                    <option value="earthquake">Earthquake</option>
                    <option value="fire">Fire</option>
                    <option value="cyclone">Cyclone</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Time Range</label>
                  <select id='border'
                    className="w-full p-2 border rounded-md bg-background text-text"
                    value={filters.timeRange}
                    onChange={(e) => setFilters({...filters, timeRange: e.target.value})}
                  >
                    <option value="all">All Time</option>
                    <option value="24h">Last 24 Hours</option>
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Live Feed */}
            <div id='border' className="bg-surface rounded-lg p-6 shadow-md border">
              <h3 className="font-semibold text-text mb-4">Live Updates</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {liveUpdates.map((update, index) => (
                  <div key={index} className="text-sm">
                    <span className="text-textSecondary">{update.time}</span>
                    <p className="text-text mt-1">{update.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3">
            <div id='border' className="bg-surface rounded-lg shadow-md border overflow-hidden">
              {/* Map Container */}
              <div  className="h-96 md:h-[600px] bg-gradient-to-br from-blue-50 to-green-50 relative">
                {/* Mock Map Interface */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-text mb-2">Interactive Map</h3>
                    <p className="text-textSecondary">
                      This would be integrated with OpenStreetMap or Mapbox
                    </p>
                  </div>
                </div>

                {/* Mock Disaster Markers */}
                {mockDisasters.map((disaster, index) => (
                  <button
                    key={disaster.id}
                    onClick={() => setSelectedDisaster(disaster)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-all hover:scale-110 ${
                      disaster.severity === 'High' ? 'bg-red-500 text-white' :
                      disaster.severity === 'Medium' ? 'bg-orange-500 text-white' :
                      'bg-yellow-500 text-white'
                    }`}
                    style={{
                      top: `${30 + index * 20}%`,
                      left: `${40 + index * 15}%`
                    }}
                  >
                    <AlertCircle className="h-4 w-4" />
                  </button>
                ))}
              </div>

              {/* Selected Disaster Details */}
              {selectedDisaster && (
                <div className="p-6 border-t bg-background">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text">{selectedDisaster.location}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(selectedDisaster.severity)}`}>
                        {selectedDisaster.severity} Severity
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedDisaster(null)}
                      className="text-textSecondary hover:text-text"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <p className="text-textSecondary mb-4">{selectedDisaster.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-textSecondary">Shelter Capacity</p>
                        <p className="font-semibold text-text">{selectedDisaster.shelterCapacity}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Truck className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm text-textSecondary">Rescue Teams</p>
                        <p className="font-semibold text-text">{selectedDisaster.rescueTeams} Active</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-sm text-textSecondary">SOS Requests</p>
                        <p className="font-semibold text-text">{selectedDisaster.sosRequests} Pending</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisasterMap;