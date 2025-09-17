'use client';

import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPhone, FaEnvelope, FaShoppingCart, FaUser, FaUserPlus, FaChevronDown, FaTh, FaThLarge, FaGraduationCap } from 'react-icons/fa';
import { Home, BookOpen, Users, FileText } from 'lucide-react';
import Link from 'next/link';
import { toggleCategoriesDropdown, closeCategoriesDropdown } from '../store/slices/ui-slice';
import { selectIsCategoriesDropdownOpen } from '../store/slices/ui-slice';
import { selectCartItemCount } from '../store/slices/cart-slice';
import { selectIsAuthenticated, selectUser } from '../store/slices/auth-slice';

export default function Header() {
  const dispatch = useDispatch();
  const isCategoriesOpen = useSelector(selectIsCategoriesDropdownOpen);
  const cartItemCount = useSelector(selectCartItemCount);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(closeCategoriesDropdown());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            {/* Left side - CFA and Language */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">CFA (CFA)</span>
              <div className="flex items-center space-x-1">
                <span className="text-gray-600">🇺🇸</span>
                <span className="text-gray-600">English</span>
                <FaChevronDown className="text-gray-400 text-xs" />
              </div>
            </div>

            {/* Right side - Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gray-500 text-sm" />
                <span className="text-gray-600">123-456-7890</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-500 text-sm" />
                <span className="text-gray-600">info@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-semibold text-gray-800">My Website</span>
            </Link>

            {/* Center Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Categories Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  className="flex items-center space-x-2 px-4 py-2 bg-violet-50 rounded-lg text-violet-900 hover:bg-violet-100 transition-colors"
                  onClick={() => dispatch(toggleCategoriesDropdown())}
                >
                  <FaTh className="text-sm" />
                  <span>Categories</span>
                  <FaChevronDown className={`text-xs transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isCategoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">AI</span>
                        </div>
                        <span>Artificial Intelligence</span>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600 font-semibold text-sm">DEV</span>
                        </div>
                        <span>Development</span>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600 font-semibold text-sm">BIZ</span>
                        </div>
                        <span>Business</span>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-orange-600 font-semibold text-sm">MKT</span>
                        </div>
                        <span>Marketing</span>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                          <span className="text-pink-600 font-semibold text-sm">HF</span>
                        </div>
                        <span>Health & Fitness</span>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <span className="text-yellow-600 font-semibold text-sm">DES</span>
                        </div>
                        <span>Design</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-6">
                <Link href="/courses" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                  <BookOpen className="w-4 h-4" />
                  <span>Courses</span>
                </Link>
                <Link href="/university" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                  <Home className="w-4 h-4" />
                  <span>University</span>
                </Link>
                <Link href="/university/semester-courses" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                  <FaGraduationCap className="w-4 h-4" />
                  <span>Semester Courses</span>
                </Link>
                <Link href="/instructors" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                  <Users className="w-4 h-4" />
                  <span>Instructors</span>
                </Link>
                <Link href="/blog" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                  <FileText className="w-4 h-4" />
                  <span>Blog</span>
                </Link>
              </div>
            </nav>

            {/* Right side - Cart and Auth */}
            <div className="flex items-center space-x-4">
              {/* Shopping Cart */}
              <div className="relative">
                <button className="relative p-2 text-gray-700 hover:text-violet-600 transition-colors">
                  <FaShoppingCart className="w-5 h-5" />
                          <span className="absolute -top-1 -right-1 bg-violet-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {cartItemCount}
                          </span>
                </button>
              </div>

              {/* Auth Section */}
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                      <span className="text-violet-600 font-semibold text-sm">
                        {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium">{user?.name || 'User'}</span>
                  </div>
                </div>
              ) : (
                <>
                  {/* Login */}
                  <a href="#" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                    <FaUser className="w-4 h-4" />
                    <span>Login</span>
                  </a>

                  {/* Register */}
                  <a href="#" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                    <FaUserPlus className="w-4 h-4" />
                    <span>Register</span>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden px-4 py-2">
        <button className="flex items-center space-x-2 px-4 py-2 bg-violet-50 rounded-lg text-violet-900 w-full justify-center">
          <FaThLarge className="text-sm" />
          <span>Categories</span>
        </button>
      </div>
    </header>
  );
}
