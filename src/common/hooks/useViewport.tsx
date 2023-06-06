import React, { useState, useEffect, useContext, ReactNode } from 'react';

const ViewportContext = React.createContext(window.innerWidth);

const ViewportProvider = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [handleResize]);

  return (
    <ViewportContext.Provider value={width}>
      {children}
    </ViewportContext.Provider>
  );
};

function useViewport() {
  const width = useContext(ViewportContext);

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 768,
    width
  };
}

export { ViewportProvider, useViewport };
