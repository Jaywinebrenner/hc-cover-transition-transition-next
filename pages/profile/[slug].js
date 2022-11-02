import {fakeData} from '../../utils/fakeData.js'
import { useRouter } from 'next/router'
import React, {useEffect, useState, useRef} from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Profile = () => {

  const profileBottomRef = useRef();

  const router = useRouter();
  const profileName = router.query.slug;
  console.log("profileName",profileName);
  console.log("fakeData",fakeData);

  useEffect(() => {
    
  }, []);

  return (
    <div className='profile-single'>
      <Link href="/">
        <FontAwesomeIcon className="back-arrow" icon={faCircleXmark} />
      </Link>
      
      {
        fakeData.map((profile, i) => {
          if(profile.itemTitle === profileName){
            console.log("profile", profile)
            return(
              <div className='profile-single__wrapper'>
                <h1 className='profile-single__title'>{profile.itemTitle}</h1>
                <div ref={profileBottomRef} key={`profile-single-key=${i}`}>
                <div className="profile-single__top">
                  <div className="profile-single__img-wrapper">
                    <img className='profile-single__img' src={`/${profile.url}`}/>
                  </div>
                  <div className="profile-single__img" style={{backgroundImage: `url(${profile.urlBig})`}}>
                    </div>
                </div>
  
                <div className="profile-single__bottom">
                  <div className="profile-single__column">
                    <span className="profile-single__column-title profile-single__column-title--main">{profile.profileName}</span>
                  </div>
                  <div className="profile-single__column">
                    <h3 className="profile-single__column-title">Favorite Food</h3>
                    <p>{profile.questionOneAnswer}</p>
                  </div>
                  <div className="profile-single__column">
                    <h3 className="profile-single__column-title">Favorite Color</h3>
                    <p>{profile.questionTwoAnswer}</p>
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