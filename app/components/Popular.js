import { useState } from 'react';
import LanguagesNav from './LanguagesNav';

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  return (
    <LanguagesNav
      selected={selectedLanguage}
      onUpdateLanguage={setSelectedLanguage}
    />
  );
}

export default Popular;
