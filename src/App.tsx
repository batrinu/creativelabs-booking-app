import { useTranslation } from 'react-i18next';
import LanguageToggle from './components/LanguageToggle';
import './App.css';

function App() {
  const { t } = useTranslation();

  const spaces = [
    {
      id: 'photo',
      image: '/images/photo-studio.jpg',
      icon: '📸'
    },
    {
      id: 'video', 
      image: '/images/video-studio.jpg',
      icon: '🎬'
    },
    {
      id: 'art',
      image: '/images/art-workshop.jpg', 
      icon: '🎨'
    },
    {
      id: 'coworking',
      image: '/images/coworking.jpg',
      icon: '💼'
    },
    {
      id: 'music',
      image: '/images/music-studio.jpg',
      icon: '🎵'
    },
    {
      id: 'workshop',
      image: '/images/workshop-room.jpg',
      icon: '🛠️'
    }
  ];

  const features = [
    {
      id: 'professional',
      icon: '⚙️'
    },
    {
      id: 'flexible',
      icon: '⏰'
    },
    {
      id: 'locations',
      icon: '📍'
    },
    {
      id: 'support',
      icon: '🛡️'
    }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <h2>Creative Labs</h2>
            </div>
            <nav className="nav-links">
              <a href="#home">{t('nav.home')}</a>
              <a href="#spaces">{t('nav.spaces')}</a>
              <a href="#about">{t('nav.about')}</a>
              <a href="#contact">{t('nav.contact')}</a>
            </nav>
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">{t('hero.cta.book')}</button>
              <button className="btn btn-secondary">{t('hero.cta.view')}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">{t('features.title')}</h2>
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{t(`features.${feature.id}.title`)}</h3>
                <p>{t(`features.${feature.id}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section id="spaces" className="spaces">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('spaces.title')}</h2>
            <p className="section-subtitle">{t('spaces.subtitle')}</p>
          </div>
          <div className="spaces-grid">
            {spaces.map((space) => (
              <div key={space.id} className="space-card">
                <div className="space-image">
                  <div className="space-icon">{space.icon}</div>
                </div>
                <div className="space-content">
                  <h3>{t(`spaces.${space.id}.title`)}</h3>
                  <p>{t(`spaces.${space.id}.desc`)}</p>
                  <button className="btn btn-outline">Detalii</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.subtitle')}</p>
            <button className="btn btn-primary btn-large">{t('cta.button')}</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Creative Labs</h3>
              <p>{t('footer.copyright')}</p>
            </div>
            <div className="footer-section">
              <h4>{t('footer.contact')}</h4>
              <p>{t('footer.email')}</p>
              <p>{t('footer.phone')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
