import { fakeData } from "../utils/fakeData";
import { motion } from "framer-motion"
import Link from "next/link";
import React, {useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/router';

const Profiles = ({handleClick}) => {

  useEffect(() => {

  }, []);


  return (
    <div className="profiles-wrapper">
      <h1 className="profiles-wrapper__title">Profiles</h1>
      <div className="profiles">
      {fakeData && fakeData.map((item, i) => 
        <div key={`item-key=${i}`} className="item">
          <div className="item__top">
              <div className="item__img" style={{backgroundImage: `url(${item.url})`}}></div>
          </div>
          <div className="item__bottom">
            <h2 className="item__title">{item.itemTitle}</h2>
            <p className="item__desc">{item.itemContent}</p>
            <div onClick={()=>handleClick(item)} className="item__link">
              <a>VIEW</a>
            </div>
          </div>
      </div>
      )}
      </div>
    </div>
  )
}

export default Profiles; 