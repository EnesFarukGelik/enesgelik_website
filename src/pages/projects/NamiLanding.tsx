import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import VideoPlayer from '../../components/VideoPlayer';
import TechChart from '../../components/TechChart';

const NamiLanding: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('namiLandingTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('namiLandingSubtitle')}
          </p>
        </div>

        {/* Project Info - Above video */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('namiLandingAboutTitle')}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('namiLandingAboutText')}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button
                    disabled
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold rounded-lg cursor-not-allowed opacity-60 transition-all duration-300"
                    title="Uygulama şu anda aktif değil"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
{t('namiLandingVideoDemo')}
                  </button>
                  <button
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </button>
                </div>
              </div>

              <TechChart
                data={[
                  { name: 'TypeScript', percentage: 97.2, color: '#3178c6' },
                  { name: 'CSS', percentage: 2.6, color: '#1572b6' },
                  { name: 'JavaScript', percentage: 0.2, color: '#f7df1e' }
                ]}
                title={t('namiLandingTechTitle')}
              />
            </div>
          </div>
        </div>

        {/* Video Demo - Below project info */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('namiLandingVideoDemoTitle')}</h2>
            <p className="text-lg text-gray-600">{t('namiLandingVideoDemoSubtitle')}</p>
          </div>
          
          <VideoPlayer
            src="/nami_landing/2025-09-24 17-19-19.mp4"
            poster="/nami_landing/poster.jpg"
            title="Nami Landing Page - Video Demo"
            height="70vh"
          />
        </div>

        {/* Project Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('namiLandingFastLoading')}</h3>
            <p className="text-gray-600">
              {t('namiLandingFastLoadingText')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('namiLandingAnimations')}</h3>
            <p className="text-gray-600">
              {t('namiLandingAnimationsText')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('namiLandingSEO')}</h3>
            <p className="text-gray-600">
              {t('namiLandingSEOText')}
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('namiLandingTechDetails')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('namiLandingTechUsed')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiLandingReact')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiLandingTypeScript')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiLandingTailwind')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiLandingRouter')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiLandingI18n')}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('namiLandingFeatures')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiLandingResponsive')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiLandingCSSAnimations')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiLandingMultiLang')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiLandingReactOpt')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiLandingModernUI')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              {t('namiLandingCtaTitle')}
            </h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              {t('namiLandingCtaText')}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
{t('namiLandingAboutMore')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamiLanding;
