import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'kargo-yonetim',
      name: 'Kargo Yönetim App',
      image: '/homepage/ss1.png',
      description: 'Kargo takip ve yönetim sistemi',
      isActive: true,
      route: '/kargo-yonetim',
      liveUrl: 'https://kargo-yonetim-app.pages.dev/'
    },
    {
      id: 'wite-website',
      name: 'Wite Website',
      image: '/homepage/ss2.png',
      description: 'Modern web tasarım projesi',
      isActive: true,
      route: '/wite-website',
      liveUrl: 'https://www.wite.com.tr/'
    },
    {
      id: 'nami-landing',
      name: 'Nami Landing',
      image: '/homepage/ss3.png',
      description: 'AI Chat landing page',
      isActive: false,
      route: '/nami-landing'
    },
    {
      id: 'nami-ai',
      name: 'Nami AI',
      image: '/homepage/ss4.png',
      description: 'AI Chat uygulaması',
      isActive: false,
      route: '/nami-ai'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('projectsPageTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('projectsPageSubtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center p-6">
                {/* Project Image - Sol taraf */}
                <div className="w-full lg:w-48 h-30 flex-shrink-0 mb-4 lg:mb-0 lg:mr-8">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>

                {/* Project Info - Orta */}
                <div className="flex-1 mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>

                {/* Action Buttons - Alt satır (mobilde) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
                  {/* View Project Button */}
                  <Link
                    to={project.route}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {t('viewProjectBtn')}
                  </Link>

                  {/* Go to Project Button */}
                  {project.isActive ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {t('goToProjectBtn')}
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="group relative inline-flex items-center px-6 py-3 bg-gray-400 text-white font-semibold rounded-xl cursor-not-allowed opacity-60"
                      title="Proje henüz canlıda mevcut değil"
                    >
                      {t('goToProjectBtn')}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Proje henüz canlıda mevcut değil
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
