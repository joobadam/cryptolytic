"use client"


import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';


interface LottieAnimationProps {
  animationPath: string; 
}

const LottieAnimation2: React.FC<LottieAnimationProps> = ({ animationPath }) => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current, 
        renderer: 'svg', 
        loop: true, 
        autoplay: true, 
        path: animationPath 
      });

      return () => anim.destroy(); 
    }
  }, [animationPath]);

  return <div ref={animationContainer} className="mx-auto"/>;
};

export default LottieAnimation2;

