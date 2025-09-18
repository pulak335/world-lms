'use client';

import { useState, useRef, useEffect } from 'react';
import { FaUser, FaChevronDown, FaChevronUp, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function ProfileToggleDemo() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Profile Toggle Demo</h2>
      
      <div className="flex justify-center">
        <div className="relative" ref={profileDropdownRef}>
          <button 
            onClick={toggleProfileDropdown}
            className={`relative p-3 text-gray-700 hover:text-violet-600 transition-colors flex items-center space-x-2 rounded-lg border ${
              isProfileDropdownOpen ? 'bg-violet-50 text-violet-600 border-violet-200' : 'border-gray-200'
            }`}
            aria-expanded={isProfileDropdownOpen}
            aria-haspopup="true"
            aria-label="User menu"
          >
            <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
              <FaUser className="w-4 h-4 text-violet-600" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">3</span>
            </span>
            {isProfileDropdownOpen ? (
              <FaChevronUp className="w-4 h-4" />
            ) : (
              <FaChevronDown className="w-4 h-4" />
            )}
          </button>
          
          {/* User Dropdown */}
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">student@demo.com</p>
              </div>
              
              <div className="py-2">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center space-x-2">
                  <FaBell className="w-4 h-4" />
                  <span>Notifications</span>
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                </button>
                
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center space-x-2">
                  <FaCog className="w-4 h-4" />
                  <span>Settings</span>
                </button>
                
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center space-x-2">
                  <FaUser className="w-4 h-4" />
                  <span>Profile</span>
                </button>
              </div>
              
              <div className="border-t border-gray-200 pt-2">
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center space-x-2">
                  <FaSignOutAlt className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Click the profile button to toggle the dropdown menu
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Press ESC to close or click outside
        </p>
      </div>
    </div>
  );
}
