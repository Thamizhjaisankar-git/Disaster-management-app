import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const location = useLocation();
  const { theme, themes, switchTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Disaster Map', path: '/disaster-map' },
    { name: 'Alerts', path: '/alerts' },
    { name: 'Help Request', path: '/help-request' },
    { name: 'Volunteer Portal', path: '/volunteer' },
    { name: 'Resources', path: '/resources' },
    { name: 'Recovery', path: '/recovery' },
    { name: 'About', path: '/about' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-surface shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
             
                <span className="font-bold text-xl text-primary">CDMS</span>
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-4">

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-white'
                    : 'text-text hover:bg-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>


           {/* Theme Selector */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-2 rounded-md text-text hover:bg-secondary dark:bg-black dark:text-primary dark:hover:bg-gray-800" style={{backgroundColor:'transparent' }} 
              >
                <Palette className="h-5 w-5" 
                />
              </button>
              
              {showThemeMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-surface dark:bg-black rounded-md shadow-lg py-1 z-50">
                  {Object.entries(themes).map(([key, themeData]) => (
                    <button
                      key={key}
                      onClick={() => {
                        switchTheme(key);
                        setShowThemeMenu(false);
                      }}
                      className={`nav-btn block w-full text-left px-4 py-2 text-sm hover:bg-secondary ${
                        theme === key ? 'bg-primary text-white' : 'text-black hover:bg-gray-700 dark:hover:bg-gray-600'
                      }`}
                    >
                      {themeData.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:bg-secondary p-2 rounded-md no-underline" style={{ backgroundColor: 'transparent'}} 
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-primary text-white'
                    : 'text-text hover:bg-secondary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Theme Selector */}
            <div className="px-3 py-2">
              <p className="text-sm font-medium text-textSecondary mb-2">Theme</p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(themes).map(([key, themeData]) => (
                  <button
                    key={key}
                    onClick={() => switchTheme(key)}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      theme === key ? 'bg-primary text-white' : 'bg-secondary text-text'
                    }`}
                  >
                    {themeData.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;