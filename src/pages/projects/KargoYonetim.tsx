import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TechChart from '../../components/TechChart';

const KargoYonetim: React.FC = () => {
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
      const currentSrc = iframeRef.current.src;
      iframeRef.current.src = currentSrc;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('kargoTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('kargoSubtitle')}
          </p>
        </div>

        {/* Project Info - Above iframe */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('kargoAboutTitle')}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('kargoAboutText')}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {['React', 'Node.js', '.NET', 'MySQL'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href="https://kargo-yonetim-app.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t('kargoLiveDemo')}
                  </a>
                  <a
                    href="https://github.com/EnesFarukGelik/Kargo-Yonetim-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {t('kargoGitHub')}
                  </a>
                </div>
              </div>

              <TechChart
                data={[
                  { name: 'JavaScript', percentage: 58.8, color: '#f59e0b' },
                  { name: 'CSS', percentage: 40.7, color: '#3b82f6' },
                  { name: 'HTML', percentage: 0.5, color: '#f97316' }
                ]}
                title={t('kargoLanguagesTitle')}
                className="bg-gradient-to-br from-green-50 to-blue-50"
              />
            </div>
          </div>
        </div>

        {/* Live Demo - Below project info */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('kargoLiveDemoTitle')}</h2>
            <p className="text-lg text-gray-600">{t('kargoLiveDemoSubtitle')}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-white font-medium">Kargo Yönetim App - Canlı Demo</span>
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
                    href="https://kargo-yonetim-app.pages.dev/" 
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
                src="https://kargo-yonetim-app.pages.dev/"
                className="w-full h-full border-0"
                title="Kargo Yönetim App Demo"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                loading="lazy"
              />
            </div>
          </div>
        </div>


        {/* Application Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('kargoFeaturesTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Müşteri */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('kargoCustomerTitle')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• {t('kargoCustomerFeature1')}</li>
                <li>• {t('kargoCustomerFeature2')}</li>
              </ul>
            </div>

            {/* Personel */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('kargoPersonnelTitle')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• {t('kargoPersonnelFeature1')}</li>
                <li>• {t('kargoPersonnelFeature2')}</li>
                <li>• {t('kargoPersonnelFeature3')}</li>
                <li>• {t('kargoPersonnelFeature4')}</li>
                <li>• {t('kargoPersonnelFeature5')}</li>
              </ul>
            </div>

            {/* Yönetici */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('kargoManagerTitle')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• {t('kargoManagerFeature1')}</li>
                <li>• {t('kargoManagerFeature2')}</li>
                <li>• {t('kargoManagerFeature3')}</li>
                <li>• {t('kargoManagerFeature4')}</li>
                <li>• {t('kargoManagerFeature5')}</li>
              </ul>
            </div>

            {/* Admin */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('kargoAdminTitle')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• {t('kargoAdminFeature1')}</li>
                <li>• {t('kargoAdminFeature2')}</li>
                <li>• {t('kargoAdminFeature3')}</li>
              </ul>
            </div>
          </div>

          {/* Test Bilgileri */}
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('kargoTestTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('kargoTestManager')}</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium text-gray-600">{t('kargoTestEmail')}</span> <span className="text-gray-800">{t('kargoTestManagerEmail')}</span></div>
                  <div><span className="font-medium text-gray-600">{t('kargoTestPassword')}</span> <span className="text-gray-800">{t('kargoTestManagerPassword')}</span></div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('kargoTestPersonnel')}</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium text-gray-600">{t('kargoTestEmail')}</span> <span className="text-gray-800">{t('kargoTestPersonnelEmail')}</span></div>
                  <div><span className="font-medium text-gray-600">{t('kargoTestPassword')}</span> <span className="text-gray-800">{t('kargoTestPersonnelPassword')}</span></div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('kargoTestCustomer')}</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium text-gray-600">{t('kargoTestEmail')}</span> <span className="text-gray-800">{t('kargoTestCustomerEmail')}</span></div>
                  <div><span className="font-medium text-gray-600">{t('kargoTestPassword')}</span> <span className="text-gray-800">{t('kargoTestCustomerPassword')}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              {t('kargoCtaTitle')}
            </h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              {t('kargoCtaText')}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('kargoAboutMore')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KargoYonetim;