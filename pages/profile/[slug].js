import {fakeData} from '../../utils/fakeData.js'
import { useRouter } from 'next/router'
import React, {useEffect, useState, useRef} from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Profile = ({handleRevClick, singleTitleActive}) => {

  const profileBottomRef = useRef();

  const router = useRouter();
  const profileName = router.query.slug;
  console.log("profileName",profileName);
  console.log("fakeData",fakeData);

  useEffect(() => {
    
  }, []);

  return (
    <div className='profile-single'>
      <div className={`profile-single__nav ${singleTitleActive ? "single-nav-animate" : ""}`}>
        <div className='left'><p>Ullamcorper velit sed ullamcorper</p></div>
        <div className='middle'><p>Iaculis urna id volutpat lacus laoreet</p></div>
        <div className='right'><p>Tincidunt vitae semper quis lectus nulla</p></div>
      </div>
      <Link onClick={()=> handleRevClick()} href="/">
        <FontAwesomeIcon className="back-arrow" icon={faCircleXmark} />
      </Link>
      
      {
        fakeData.map((profile, i) => {
          if(profile.itemTitle === profileName){
            return(

              <div key={`profile-key=${i}`} className='profile-single__wrapper'>
                <h1 className={`profile-single__title ${singleTitleActive ? "single-title-animate" : ""}`}>{profile.itemTitle}</h1>
                <div ref={profileBottomRef} key={`profile-single-key=${i}`}>
                <div className="profile-single__top">
                  <div className="profile-single__img-wrapper">
                    <img className='profile-single__img' src={`/${profile.url}`}/>
                  </div>
                </div>
  
                <div className={`profile-single__bottom ${singleTitleActive ? "single-bottom-animate" : ""}`}>
                  <div className="profile-single__column">
                    <span className="profile-single__column-title profile-single__column-title--main">{profile.profileName}</span>
                  </div>
                  <div className="profile-single__column">
                    <h3 className="profile-single__column-title">Favorite Food</h3>

                    <p>{profile.questionTwoAnswer}</p>
                  </div>
                  <div className="profile-single__column">
                    <h3 className="profile-single__column-title">Favorite Color</h3>
                    <p>{profile.questionOneAnswer}</p>
                  </div>         
                </div>
              </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default Profile; 