import './App.css';
import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

const Welcome = lazy(() => import('./components/welcome/Welcome'));
const About = lazy(() => import('./components/about/About'));
const Work = lazy(() => import('./components/work/work'));
const Faq = lazy(() => import('./components/faq/Faq'));
const Reviews = lazy(() => import('./components/reviews/Reviews'));
const Contacts = lazy(() => import('./components/contacts/Contacts'));
const Services = lazy(() => import('./components/services/Services'));
const Top = lazy(() => import('./components/top/Top'));
const Call = lazy(() => import('./components/call/call'));

function App() {
  return (
    <div className="App">
<Helmet>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="preload" as="image" href="/assets/image-Jez0xn52.webp" imagesrcset="/assets/image-Jez0xn52.webp" imagesizes="(max-width: 600px) 100vw, 600px" />

  <link
    rel="preload"
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
    as="style"
    onLoad={e => { e.target.rel = 'stylesheet'; }}
  />
  <noscript>{'<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />'}</noscript>
</Helmet>



      <Suspense fallback={<div>Загрузка...</div>}>
        <Welcome />
        <About />
        <Services />
        <Work />
        <Faq />
        <Reviews />
        <Contacts />
        <Call />
        <Top />
      </Suspense>
    </div>
  );
}

export default App;
