import React, { memo, useLayoutEffect, useState } from "react";

const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        autoDisplay: false,
      },
      'google_translate_element'
    );
  };
  
  const Translate = () => {
    const [rendered, setRendered] = useState(false);
  
    useLayoutEffect(() => {
      if (!rendered) {
        const addScript = document.createElement('script');
        addScript.setAttribute(
          'src',
          '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
  
        setRendered(true);
        return () => {
          document.body.removeChild(document.querySelector('script[src*="translate.google.com"]'));
        };
      }
  
      // Cleanup function to remove the script when the component is unmounted
    }, [rendered]);
  
    return <div  id="google_translate_element"></div>;
  };
  
  export default Translate;
