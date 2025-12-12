import { useState } from 'react';
import { 
  Package, 
  MapPin, 
  Truck, 
  Heart, 
  Users, 
  AlertCircle,
  TrendingUp,
  ArrowRight,
  Building,
  DollarSign
} from 'lucide-react';

const Resources = () => {
  const [shelters] = useState([
    {
      id: 1,
      name: 'Anna Nagar Community Center',
      location: 'Anna Nagar, Chennai',
      capacity: 500,
      occupied: 387,
      supplies: {
        food: { current: 800, needed: 1200 },
        water: { current: 500, needed: 600 },
        blankets: { current: 150, needed: 400 },
        medicines: { current: 80, needed: 120 }
      },
      status: 'operational',
      lastUpdated: '5 mins ago'
    },
    {
      id: 2,
      name: 'T. Nagar Relief Camp',
      location: 'T. Nagar, Chennai',
      capacity: 300,
      occupied: 245,
      supplies: {
        food: { current: 600, needed: 700 },
        water: { current: 400, needed: 500 },
        blankets: { current: 200, needed: 250 },
        medicines: { current: 90, needed: 100 }
      },
      status: 'operational',
      lastUpdated: '12 mins ago'
    },
    {
      id: 3,
      name: 'Egmore Emergency Shelter',
      location: 'Egmore, Chennai',
      capacity: 400,
      occupied: 156,
      supplies: {
        food: { current: 200, needed: 800 },
        water: { current: 100, needed: 600 },
        blankets: { current: 50, needed: 350 },
        medicines: { current: 30, needed: 150 }
      },
      status: 'needs-supplies',
      lastUpdated: '18 mins ago'
    }
  ]);

  const [donations] = useState([
    { donor: 'Tata Group', type: 'Financial', amount: '₹50,00,000', time: '2 hours ago' },
    { donor: 'Reliance Foundation', type: 'Medical Supplies', amount: '500 units', time: '4 hours ago' },
    { donor: 'Infosys Foundation', type: 'Food & Water', amount: '2000 packets', time: '6 hours ago' },
    { donor: 'Local Community', type: 'Blankets', amount: '150 units', time: '8 hours ago' },
    { donor: 'Red Cross India', type: 'Emergency Kit', amount: '300 kits', time: '12 hours ago' }
  ]);

  const [supplyMovements] = useState([
    { from: 'Central Warehouse', to: 'Anna Nagar Center', items: 'Food packets (500)', status: 'in-transit', eta: '30 mins' },
    { from: 'Medical Depot', to: 'T. Nagar Camp', items: 'Medical supplies', status: 'delivered', eta: 'Completed' },
    { from: 'NGO Warehouse', to: 'Egmore Shelter', items: 'Blankets (200)', status: 'dispatched', eta: '1 hour' }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational': return 'bg-green-100 text-green-800';
      case 'needs-supplies': return 'bg-red-100 text-red-800';
      case 'at-capacity': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSupplyLevel = (current, needed) => {
    const percentage = (current / needed) * 100;
    if (percentage >= 80) return { color: 'bg-green-500', status: 'Good' };
    if (percentage >= 50) return { color: 'bg-yellow-500', status: 'Fair' };
    return { color: 'bg-red-500', status: 'Critical' };
  };

  const getMovementStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'in-transit': return 'bg-blue-100 text-blue-800';
      case 'dispatched': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text mb-4">Resource Management</h1>
          <p className="text-textSecondary">
            Monitor shelter capacity, track supplies, and manage resource distribution in real-time.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-text">
                  {shelters.reduce((acc, shelter) => acc + shelter.occupied, 0)}
                </div>
                <div className="text-textSecondary text-sm">People Sheltered</div>
              </div>
            </div>
          </div>
          
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border">
            <div className="flex items-center space-x-3">
              <Package className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-text">2,847</div>
                <div className="text-textSecondary text-sm">Supply Items</div>
              </div>
            </div>
          </div>
          
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border">
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-red-600" />
              <div>
                <div className="text-2xl font-bold text-text">₹2.3Cr</div>
                <div className="text-textSecondary text-sm">Total Donations</div>
              </div>
            </div>
          </div>
          
          <div id='border' className="bg-surface rounded-lg p-6 shadow-md border">
            <div className="flex items-center space-x-3">
              <Truck className="h-8 w-8 text-orange-600" />
              <div>
                <div className="text-2xl font-bold text-text">15</div>
                <div className="text-textSecondary text-sm">Active Deliveries</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shelter Inventory Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
              <h2 className="text-xl font-semibold text-text mb-6">Shelter Inventory Dashboard</h2>
              
              <div className="space-y-6">
                {shelters.map((shelter) => (
                  <div id='border' key={shelter.id} className="border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-text">{shelter.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-textSecondary">
                          <MapPin className="h-4 w-4" />
                          <span>{shelter.location}</span>
                          <span>•</span>
                          <span>Updated {shelter.lastUpdated}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(shelter.status)}`}>
                        {shelter.status.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Capacity */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-text">Occupancy</span>
                        <span className="text-sm text-textSecondary">
                          {shelter.occupied}/{shelter.capacity}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(shelter.occupied / shelter.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Supplies Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(shelter.supplies).map(([item, data]) => {
                        const supplyLevel = getSupplyLevel(data.current, data.needed);
                        return (
                          <div key={item} className="text-center">
                            <div className="text-sm font-medium text-text capitalize mb-1">{item}</div>
                            <div className="text-lg font-bold text-text">{data.current}</div>
                            <div className="text-xs text-textSecondary">of {data.needed} needed</div>
                            <div className={`text-xs font-medium mt-1 ${
                              supplyLevel.color === 'bg-green-500' ? 'text-green-600' :
                              supplyLevel.color === 'bg-yellow-500' ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {supplyLevel.status}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {shelter.status === 'needs-supplies' && (
                      <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="h-4 w-4 text-red-600" />
                          <span className="text-sm text-red-800 font-medium">Critical Supply Shortage</span>
                        </div>
                        <p className="text-sm text-red-700 mt-1">
                          This shelter urgently needs supplies. Priority dispatch recommended.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Supply Chain Map */}
            <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
              <h2 className="text-xl font-semibold text-text mb-6">Supply Chain Movement</h2>
              
              <div className="space-y-4">
                {supplyMovements.map((movement, index) => (
                  <div id='border' key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Truck className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-medium text-text">{movement.items}</p>
                        <p className="text-sm text-textSecondary">
                          {movement.from} → {movement.to}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMovementStatusColor(movement.status)}`}>
                        {movement.status.replace('-', ' ')}
                      </span>
                      <p className="text-sm text-textSecondary mt-1">
                        ETA: {movement.eta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Donations */}
            <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
              <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-600" />
                Recent Donations
              </h3>
              
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {donations.map((donation, index) => (
                  <div key={index} className="border-l-4 p-4 border-l-primary pl-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-medium text-text text-sm">{donation.donor}</p>
                        <p className="text-textSecondary text-xs">{donation.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-text text-sm">{donation.amount}</p>
                        <p className="text-textSecondary text-xs">{donation.time}</p>
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
                <button className="w-full bg-red-600 text-white p-3 rounded-md text-sm hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>Request Emergency Supplies</span>
                </button>
                
                <button className="w-full bg-primary text-white p-3 rounded-md text-sm hover:bg-blue-700 transition-colors">
                  Schedule Delivery
                </button>
                
                <button className="w-full bg-green-600 text-white p-3 rounded-md text-sm hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <DollarSign className="h-4 w-4" />
                  <span>Make Donation</span>
                </button>
                
                <button className="w-full border border-primary text-primary p-3 rounded-md text-sm hover:bg-blue-50 transition-colors">
                  Generate Report
                </button>
              </div>
            </div>

            {/* Resource Trends */}
            <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
              <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Resource Trends
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-textSecondary">Food Distribution</span>
                  <span className="text-sm text-green-600 font-medium">↑ 15%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-textSecondary">Medical Supplies</span>
                  <span className="text-sm text-red-600 font-medium">↓ 8%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-textSecondary">Blanket Usage</span>
                  <span className="text-sm text-green-600 font-medium">↑ 22%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-textSecondary">Water Supply</span>
                  <span className="text-sm text-textSecondary font-medium">→ Stable</span>
                </div>
              </div>
            </div>

            {/* NGO Partners */}
            <div id='border' className="bg-surface rounded-lg shadow-md p-6 border">
              <h3 className="text-lg font-semibold text-text mb-4">Partner Organizations</h3>
              
              <div className="space-y-3">
                {['Red Cross India', 'Goonj NGO', 'HelpAge India', 'Akshaya Patra', 'Smile Foundation'].map((ngo, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-text">{ngo}</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;