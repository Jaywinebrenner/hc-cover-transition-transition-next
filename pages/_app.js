import "./styles/app.scss";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'

function MyApp({ Component, pageProps }) {
  const [animationActive, setAnimationActive] = useState(false);
  const [reverseAnimationActive, setReverseAnimationActive] = useState(false);
  const [singleTitleActive, setSingleTitleActive] = useState(false);

  const [windowHeight, setWindowHeight] = useState();
  const router = useRouter();

  let animationSpeed = 1000;

  const handleClick = (item) => {
    setAnimationActive(true);
    setTimeout(() => {
      router.push(`/profile/${item.itemTitle}`)
    }, animationSpeed <= 1000 ? 700 : animationSpeed - 1000)
    setTimeout(() => {
      setReverseAnimationActive(true);
      setSingleTitleActive(true);
    }, animationSpeed <= 1000 ? 700 : animationSpeed - 1000)
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

  let renderTopStyle = () => {
    if(animationActive){
      console.log("ONE")
      return (
        {
          animation: `moveDown 750ms forwards`,
          top: `-${windowHeight}px`
        }
      )
    }
    if(reverseAnimationActive){
      console.log("TWO") 
      return (
        {animation: `moveDownRev 750ms forwards`}
      )
    }
    if(animationActive === false){
      console.log("THREE")
      return (
        {top: `-${windowHeight}px`}
      )
    }
  }



  return (
    <>
      <div 
        style={{ 
         top: `-${windowHeight}px`
        }} 
        className={
          `top-black ${animationActive ? "top-black-animate" : ""} 
          ${reverseAnimationActive ? "top-black-animate-rev" : ""}`}>
      </div>
      <div 
        style={{ 
          top: `${windowHeight}px`
        }} 
        className={
          `bottom-black ${animationActive ? "bottom-black-animate" : ""} 
          ${reverseAnimationActive ? "bottom-black-animate-rev" : ""}`}>
      </div>

      <Component {...pageProps } handleClick={handleClick} handleRevClick={handleRevClick} singleTitleActive={singleTitleActive}/>

    </>
    )
}

export default MyApp
