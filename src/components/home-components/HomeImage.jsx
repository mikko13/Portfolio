import React, { useEffect, useState } from 'react';
import HomeImageUI from './HomeImageUI';

const HomeImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <HomeImageUI isVisible={isVisible} />;
};

export default HomeImage;
