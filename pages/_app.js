import "./styles/app.scss";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {

  // ANIMATION PROPS
  let animationSpeed = 1000;
  let blackOverlayBezier = 'linear'

  const [animationActive, setAnimationActive] = useState(false);
  const [reverseAnimationActive, setReverseAnimationActive] = useState(false);
  const [singleTitleActive, setSingleTitleActive] = useState(false);

  const [windowHeight, setWindowHeight] = useState();
  const router = useRouter();

  const handleClick = (item) => {
    setAnimationActive(true);
    setTimeout(() => {
      router.push(`/profile/${item.itemTitle}`)
    }, animationSpeed )
    setTimeout(() => {
      setReverseAnimationActive(true);
      setSingleTitleActive(true);
    }, animationSpeed)
  }
  const handleRevClick = () => {
    setAnimationActive(false);
    setReverseAnimationActive(false);
  }


  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setAnimationActive(false);
    setReverseAnimationActive(false)
  }, []);


  const styleObjectTop = {
    top: `-${windowHeight}px`,
    animationDuration: `${animationSpeed}ms`,
    animationTimingFunction: {blackOverlayBezier}
  }

  const styleObjectBottom = {
    top: `${windowHeight}px`,
    animationDuration: `${animationSpeed}ms`,
    animationTimingFunction: {blackOverlayBezier}
  }

  return (
    <>
      <div 
        style={styleObjectTop} 
        className={
          `top-black ${animationActive ? "top-black-animate" : ""} 
          ${reverseAnimationActive ? "top-black-animate-rev" : ""}`}>
      </div>
      <div 
        style={styleObjectBottom} 
        className={
          `bottom-black ${animationActive ? "bottom-black-animate" : ""} 
          ${reverseAnimationActive ? "bottom-black-animate-rev" : ""}`}>
      </div>

      <Component {...pageProps } handleClick={handleClick} handleRevClick={handleRevClick} singleTitleActive={singleTitleActive}/>

    </>
    )
}

export default MyApp
