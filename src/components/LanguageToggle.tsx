import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ro' ? 'en' : 'ro';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label="Toggle language"
    >
      <span className="flag-icon">
        {i18n.language === 'ro' ? '🇬🇧' : '🇷🇴'}
      </span>
      <span className="lang-text">
        {i18n.language === 'ro' ? 'EN' : 'RO'}
      </span>
    </button>
  );
};

export default LanguageToggle;