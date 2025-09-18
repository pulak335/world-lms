'use client';

import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPhone, FaEnvelope, FaShoppingCart, FaUser, FaUserPlus, FaChevronDown, FaTh, FaThLarge, FaGraduationCap, FaTimes, FaTrash, FaCreditCard, FaChevronUp } from 'react-icons/fa';
import { Home, BookOpen, Users, FileText } from 'lucide-react';
import Link from 'next/link';
import { toggleCategoriesDropdown, closeCategoriesDropdown } from '../store/slices/ui-slice';
import { closeCart } from '../store/slices/cart-slice';
import { selectIsCategoriesDropdownOpen } from '../store/slices/ui-slice';
import { selectCartItemCount, selectCartItems, selectCartTotal, selectIsCartOpen, toggleCart, removeFromCart, clearCart } from '../store/slices/cart-slice';
import { selectIsAuthenticated, selectUser, selectUserRole, logout } from '../store/slices/auth-slice';

export default function Header() {
  const dispatch = useDispatch();
  const isCategoriesOpen = useSelector(selectIsCategoriesDropdownOpen);
  const cartItemCount = useSelector(selectCartItemCount);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const isCartOpen = useSelector(selectIsCartOpen);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const userRole = useSelector(selectUserRole);
  const dropdownRef = useRef(null);
  const cartDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  
  // Local state for profile dropdown
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Toggle profile dropdown
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(closeCategoriesDropdown());
      }
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
        dispatch(closeCart());
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsProfileDropdownOpen(false);
        dispatch(closeCart());
        dispatch(closeCategoriesDropdown());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
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
                  <span>Courses</span>
                </Link>
                <Link href="/university" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                  <span>University</span>
                </Link>
                <Link href="/university/semester-courses" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                  <span>Semester Courses</span>
                </Link>
                <Link href="/instructors" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                  <span>Instructors</span>
                </Link>
                <Link href="/blog" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                  <span>Blog</span>
                </Link>
              </div>
            </nav>

            {/* Right side - Cart and Auth */}
            <div className="flex items-center space-x-4">
              {/* Shopping Cart */}
              <div className="relative" ref={cartDropdownRef}>
                <button 
                  onClick={() => dispatch(toggleCart())}
                  className="relative p-2 text-gray-700 hover:text-violet-600 transition-colors"
                >
                  <FaShoppingCart className="w-5 h-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-violet-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>

                {/* Cart Dropdown */}
                {isCartOpen && cartItems.length > 0 && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                    {/* Cart Header */}
                    <div className="px-4 pb-3 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Shopping Cart</h3>
                        <span className="text-sm text-gray-500">{cartItemCount} item{cartItemCount !== 1 ? 's' : ''}</span>
                      </div>
                    </div>

                    {/* Cart Items */}
                    <div className="max-h-64 overflow-y-auto">
                      {cartItems.map((item) => (
                        <div key={item.id} className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">
                          <div className="flex items-start space-x-3">
                            {/* Course Image */}
                            <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover rounded-lg"
                                onError={(e) => {
                                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjgiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTIwIDI0TDI0IDI4TDI4IDIwIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg==';
                                }}
                              />
                            </div>
                            
                            {/* Course Info */}
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{item.title}</h4>
                              <p className="text-xs text-gray-500 mt-1">by {item.instructor}</p>
                              <div className="flex items-center justify-between mt-2">
                                <span className={`text-sm font-semibold ${item.isFree ? 'text-green-600' : 'text-gray-900'}`}>
                                  {item.isFree ? 'FREE' : `${item.currency}${item.price.toFixed(2)}`}
                                </span>
                                <button
                                  onClick={() => dispatch(removeFromCart(item.id))}
                                  className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <FaTimes className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Cart Footer */}
                    <div className="px-4 pt-3">
                      {/* Total */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-semibold text-gray-900">Total:</span>
                        <span className="text-lg font-bold text-violet-600">
                          ${cartTotal.toFixed(2)}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <button className="w-full py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium flex items-center justify-center space-x-2">
                          <FaCreditCard className="w-4 h-4" />
                          <span>Checkout</span>
                        </button>
                        <div className="flex space-x-2">
                          <button className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                            View Cart
                          </button>
                          <button 
                            onClick={() => dispatch(clearCart())}
                            className="flex-1 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm flex items-center justify-center space-x-1"
                          >
                            <FaTrash className="w-3 h-3" />
                            <span>Clear</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Empty Cart Message */}
                {isCartOpen && cartItems.length === 0 && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                    <div className="px-4 text-center">
                      <FaShoppingCart className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">Your cart is empty</p>
                      <Link href="/courses" className="inline-block mt-3 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm">
                        Browse Courses
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Auth Section */}
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                      <span className="text-violet-600 font-semibold text-sm">
                        {user?.firstName?.[0]}{user?.lastName?.[0] || 'U'}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-700 font-medium text-sm">{user?.firstName} {user?.lastName}</span>
                      <span className="text-gray-500 text-xs capitalize">{userRole}</span>
                    </div>
                  </div>
                  <div className="relative" ref={profileDropdownRef}>
                    <button 
                      onClick={toggleProfileDropdown}
                      className={`relative p-1 text-gray-700 hover:text-violet-600 transition-colors flex items-center space-x-1 rounded-md ${
                        isProfileDropdownOpen ? 'bg-violet-50 text-violet-600' : ''
                      }`}
                      aria-expanded={isProfileDropdownOpen}
                      aria-haspopup="true"
                      aria-label="User menu"
                    >
                      <FaUser className="w-4 h-4" />
                      {/* Notification dot */}
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                      {isProfileDropdownOpen ? (
                        <FaChevronUp className="w-3 h-3" />
                      ) : (
                        <FaChevronDown className="w-3 h-3" />
                      )}
                    </button>
                    
                    {/* User Dropdown */}
                    {isProfileDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                        <div className="px-4 py-2 border-b border-gray-200">
                          <p className="text-sm font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
                          <p className="text-xs text-gray-500 capitalize">{userRole}</p>
                        </div>
                        <Link 
                          href={userRole === 'instructor' ? '/instructor/dashboard' : '/student/dashboard'}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <Link 
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          Profile
                        </Link>
                        <Link 
                          href="/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          Settings
                        </Link>
                        <button 
                          onClick={() => {
                            dispatch(logout());
                            setIsProfileDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {/* Login */}
                  <Link href="/login" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                    <FaUser className="w-4 h-4" />
                    <span>Login</span>
                  </Link>

                  {/* Register */}
                  <Link href="/signup" className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors">
                    <FaUserPlus className="w-4 h-4" />
                    <span>Register</span>
                  </Link>
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
