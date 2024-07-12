"use client";

import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

interface LottieAnimationProps {
  animationPath: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationPath }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let anim: any;
    if (animationContainer.current) {
      try {
        anim = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: animationPath,
        });
      } catch (err) {
        console.error("Error loading animation:", err);
        setError("Failed to load animation");
      }
    }

    return () => {
      if (anim) anim.destroy();
    };
  }, [animationPath]);

  if (error) return <div>Error: {error}</div>;

  return <div ref={animationContainer} className="max-w-[60%] mx-auto" />;
};

export default LottieAnimation;
