import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TechChart from '../../components/TechChart';

const WiteWebsite: React.FC = () => {
  const { t } = useTranslation();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const goBack = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.history.back();
    }
  };

  const goForward = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.history.forward();
    }
  };

  const refresh = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('witeTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('witeSubtitle')}
          </p>
        </div>

        {/* Project Info - Above iframe */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('witeAboutTitle')}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('witeAboutText')}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href="https://www.wite.com.tr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t('witeLiveDemo')}
                  </a>
                </div>
              </div>

              <TechChart
                data={[
                  { name: 'TypeScript', percentage: 93.9, color: '#3178c6' },
                  { name: 'JavaScript', percentage: 3.0, color: '#f7df1e' },
                  { name: 'HTML', percentage: 1.9, color: '#e34f26' },
                  { name: 'CSS', percentage: 1.2, color: '#1572b6' }
                ]}
                title={t('witeLanguagesTitle')}
                className="bg-gradient-to-br from-blue-50 to-purple-50"
              />
            </div>
          </div>
        </div>

        {/* Live Demo - Below project info */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('witeLiveDemoTitle')}</h2>
            <p className="text-lg text-gray-600">{t('witeLiveDemoSubtitle')}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-white font-medium">Wite Website - Canlı Demo</span>
                </div>
                
                {/* Navigation Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={goBack}
                    className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                    title="Geri"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={goForward}
                    className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                    title="İleri"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={refresh}
                    className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                    title="Yenile"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  
                  <div className="w-px h-6 bg-white/30 mx-2"></div>
                  
                  <a 
                    href="https://www.wite.com.tr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                    title="Yeni sekmede aç"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative" style={{ height: '80vh' }}>
              <iframe
                ref={iframeRef}
                src="https://www.wite.com.tr/"
                className="w-full h-full border-0"
                title="Wite Website Demo"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              {t('witeCtaTitle')}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('witeCtaText')}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('witeAboutMore')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WiteWebsite;