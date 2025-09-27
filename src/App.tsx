import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import WiteWebsite from './pages/projects/WiteWebsite';
import KargoYonetim from './pages/projects/KargoYonetim';
import NamiLanding from './pages/projects/NamiLanding';
import NamiAI from './pages/projects/NamiAI';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/wite-website" element={<WiteWebsite />} />
          <Route path="/kargo-yonetim" element={<KargoYonetim />} />
          <Route path="/nami-landing" element={<NamiLanding />} />
          <Route path="/nami-ai" element={<NamiAI />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
