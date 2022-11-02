import "./styles/app.scss";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'
// import useWindowDimensions from "../utils/useWindowDimensions";


function MyApp({ Component, pageProps }) {
  const [animationActive, setAnimationActive] = useState(false);
  const [reverseAnimationActive, setReverseAnimationActive] = useState(false);
  const [windowHeight, setWindowHeight] = useState();
  const router = useRouter();
  // console.log("reverseAnimationActive", reverseAnimationActive);


  const handleClick = (item) => {
    setAnimationActive(true);
    setTimeout(() => {
      router.push(`/profile/${item.itemTitle}`)
    }, 1000)
    setTimeout(() => {
      setReverseAnimationActive(true)
    }, 1200)
  }
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    // const topBlack = document.querySelector(".top-black");
    // console.log("topBlack", topBlack)
    setAnimationActive(false);
    setReverseAnimationActive(false)
  }, []);



  return (
    <>
      <div style={{ top: `-${windowHeight}px`}} className={`top-black ${animationActive ? "top-black-animate" : ""} ${reverseAnimationActive ? "top-black-animate-rev" : ""}`}>
      </div>
      <div style={{ top: `${windowHeight}px`}} className={`bottom-black ${animationActive ? "bottom-black-animate" : ""} ${reverseAnimationActive ? "bottom-black-animate-rev" : ""}`}></div>
      <Component {...pageProps } handleClick={handleClick} animationActive={animationActive} reverseAnimationActive={reverseAnimationActive}/>
    </>
    )
}

export default MyApp
