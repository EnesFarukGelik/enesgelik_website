import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Dropdown dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false);
      }
    };

    if (isProjectsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProjectsDropdownOpen]);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { 
      name: t('projects'), 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Wite Website', href: '/wite-website' },
        { name: 'Kargo Yönetim App', href: '/kargo-yonetim' },
        { name: 'Nami Landing Page', href: '/nami-landing' },
        { name: 'Nami AI Chat', href: '/nami-ai' },
      ]
    },
  ];

  return (
    <nav className="sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 hover:border-indigo-300/60 transition-all duration-700 hover:shadow-3xl">
          <div className="flex items-center h-20 px-8">
            {/* Desktop Navigation - Left */}
            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                        className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-500 flex items-center space-x-2 hover:scale-105 ${
                          location.pathname.startsWith('/projects') || location.pathname.startsWith('/wite') || location.pathname.startsWith('/kargo') || location.pathname.startsWith('/nami')
                            ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
                            : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg'
                        }`}
                      >
                        <span>{item.name}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isProjectsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-3xl border border-white/30 py-3 z-50">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300 rounded-2xl mx-3 hover:scale-105"
                              onClick={() => setIsProjectsDropdownOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-500 hover:scale-105 ${
                        location.pathname === item.href
                          ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
                          : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button - Left */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-2xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition-all duration-500 hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Language Switcher - Right */}
            <div className="flex items-center space-x-6 ml-auto">
              <div className="flex items-center space-x-1 bg-gradient-to-r from-gray-100 to-gray-200/80 rounded-2xl p-1.5 shadow-lg">
                <button
                  onClick={() => changeLanguage('tr')}
                  className={`px-4 py-2 text-sm font-bold rounded-xl transition-all duration-500 hover:scale-105 ${
                    i18n.language === 'tr'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-white hover:text-indigo-600 hover:shadow-md'
                  }`}
                >
                  TR
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-4 py-2 text-sm font-bold rounded-xl transition-all duration-500 hover:scale-105 ${
                    i18n.language === 'en'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-white hover:text-indigo-600 hover:shadow-md'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden relative z-50">
              <div className="px-6 pt-6 pb-6 space-y-3 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-3xl border border-white/30">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      // Mobile: Show all projects directly
                      <div className="space-y-1">
                        <div className="px-4 py-2 text-base font-semibold text-gray-700">Projelerim</div>
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                            onClick={() => {
                              setIsMenuOpen(false);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-500 hover:scale-105 ${
                          location.pathname === item.href
                            ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
                            : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;