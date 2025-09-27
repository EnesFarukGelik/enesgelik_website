import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import VideoCarousel from '../../components/VideoCarousel';
import TechChart from '../../components/TechChart';

const NamiAI: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('namiAITitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('namiAISubtitle')}
          </p>
        </div>

        {/* Project Info - Above video */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('namiAIAboutTitle')}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('namiAIAboutText')}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {['Flutter', 'Next.js', 'Firebase', 'OpenAI', 'Anthropic'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full"
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
                    {t('namiAIVideoDemo')}
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
                  { name: 'TypeScript', percentage: 53.4, color: '#3178c6' },
                  { name: 'Dart', percentage: 42.6, color: '#0175c2' },
                  { name: 'Java', percentage: 1.9, color: '#f89820' },
                  { name: 'CSS', percentage: 1.3, color: '#1572b6' },
                  { name: 'JavaScript', percentage: 0.8, color: '#f7df1e' }
                ]}
                title={t('namiAITechTitle')}
                className="bg-gradient-to-br from-indigo-50 to-cyan-50"
              />
            </div>
          </div>
        </div>

        {/* Video Demo - Below project info */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('namiAIVideoDemoTitle')}</h2>
            <p className="text-lg text-gray-600">{t('namiAIVideoDemoSubtitle')}</p>
          </div>
          
          <VideoCarousel
            videos={[
              {
                src: "/nami_ai/nami1.mp4",
                title: t('namiAIVideo1Title'),
                description: t('namiAIVideo1Desc')
              },
              {
                src: "/nami_ai/nami2.mp4",
                title: t('namiAIVideo2Title'),
                description: t('namiAIVideo2Desc')
              },
              {
                src: "/nami_ai/nami3.mp4",
                title: t('namiAIVideo3Title'),
                description: t('namiAIVideo3Desc')
              },
              {
                src: "/nami_ai/nami5.mp4",
                title: t('namiAIVideo4Title'),
                description: t('namiAIVideo4Desc')
              }
            ]}
            height="70vh"
          />
        </div>

        {/* Project Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('namiAISmartResponses')}</h3>
            <p className="text-gray-600">
              {t('namiAISmartResponsesText')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('namiAIRealTime')}</h3>
            <p className="text-gray-600">
              {t('namiAIRealTimeText')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('namiAIPersonalization')}</h3>
            <p className="text-gray-600">
              {t('namiAIPersonalizationText')}
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('namiAITechDetails')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('namiAITechUsed')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIFlutter')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAINext')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIReact')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAITypeScript')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIFirebase')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIFirestore')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIFunctions')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIOpenAI')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIAnthropic')}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('namiAIFeatures')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIMultiAI')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIRealTimeChat')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIFirebaseAuth')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIResponsive')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIMultiLang')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIFramerMotion')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAIPrisma')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span className="text-gray-600">{t('namiAINextRouter')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              {t('namiAICtaTitle')}
            </h2>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              {t('namiAICtaText')}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('namiAIAboutMore')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamiAI;
