import { Shield, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='border' className="bg-black text-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-primary">CDMS</span>
            </div>
            <p className="text-white text-sm leading-6">
              Community Disaster Management System - Real-time disaster response, together.
            </p>
          </div>

        <div className='flex justify-between items-center'>
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Disaster Map', 'Alerts', 'Help Request', 'Volunteer Portal'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white hover:text-primary text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white hover:text-primary text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={{marginTop:"-20px"}}>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-white text-sm">Emergency: 112</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-white text-sm">help@cdms.org</span>
              </div>
              <div style={{marginTop:"40px"}} className="flex space-x-4 mt-4">
                <Facebook className="h-5 w-5 text-white hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-white hover:text-primary cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-white hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

   </div>

        <div style={{border:'0px solid black', marginTop:'30px'}} className="mt-8 pt-8"><hr style={{marginBottom:"25px",border:"1px solid rgba(35, 35, 35, 1)"}}/>
          <p className="text-center white text-sm">
            © 2025 Community Disaster Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;