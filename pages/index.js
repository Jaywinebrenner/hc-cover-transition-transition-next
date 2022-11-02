
import Profiles from '../components/Profiles'
import React, { } from 'react'


export default function Home({handleClick, animationActive, reverseAnimationActive}) {

  return (
    <div>
      <Profiles handleClick={handleClick} animationActive={animationActive} reverseAnimationActive={reverseAnimationActive}></Profiles>
    </div>
  )
}
