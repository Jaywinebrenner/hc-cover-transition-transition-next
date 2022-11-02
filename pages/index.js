import NoRouting from '../components/NoRouting'
import Routing from '../components/Routing'
import React, { } from 'react'


export default function Home({handleClick, animationActive, reverseAnimationActive}) {

  return (
    <div>
      <Routing handleClick={handleClick} animationActive={animationActive} reverseAnimationActive={reverseAnimationActive}></Routing>
    </div>
  )
}
