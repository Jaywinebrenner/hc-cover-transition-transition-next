
import { gsap } from "gsap";
import React, {useEffect, useState, useRef} from 'react';
import {fakeData} from '../utils/fakeData.js'

export default function Home() {


  const allCards = useRef();
  const overlayTop = useRef();
  const overlayBottom = useRef();
  const overlayBg = useRef();
  const previewTitleRef = useRef();
  const previewBottomRef = useRef();

  const [previewShowing, setPreviewShowing] = useState(false)
  const [indexOfItem, setIndexOfItem] = useState()
  const [bgVisible, setBgVisible] = useState(false)

  useEffect(() => {
  
  }, []);

  const openItem =  (index) => {

    //OVERLAY ANIMATION
    var tlTopOverlay = gsap.timeline();
    tlTopOverlay.to(overlayTop.current, {margin:'0', y: 350, duration: .8 })
  .to(overlayTop.current, {margin:'0', y: 1000, duration: .8 });

  var tlBottomOverlay = gsap.timeline();
  tlBottomOverlay.to(overlayBottom.current, {margin:'0', y: -350, duration: .8 })
.to(overlayBottom.current, {margin:'0', y: -1000, duration: .8 });

    setTimeout(() => {
      setPreviewShowing(!previewShowing);
      setIndexOfItem(index);
      setBgVisible(true);
      previewShowing && console.log("preview", previewShowing);
      console.log("preview showing?", previewShowing)
        var tlBottomText = gsap.timeline();
        tlBottomText.to(previewBottomRef.current, {margin:'0', y: -80, duration: .8 })
    }, 800)
    
  }



  const closePreview = () => {

    //back to All Cards
    var tlAllCards = gsap.timeline();
    tlAllCards.to(allCards.current, {margin:'0', opacity: 0, duration: 1 })
  .to(allCards.current, {margin:'0', opacity: 1, duration: 1 });

    
    var tlTopOverlay = gsap.timeline();
    tlTopOverlay.to(overlayTop.current, {margin:'0', y: -350, duration: 1 })
  .to(overlayTop.current, {margin:'0', y: -1000, duration: 1 });

  var tlBottomOverlay = gsap.timeline();
  tlBottomOverlay.to(overlayBottom.current, {margin:'0', y: 350, duration: 1 })
.to(overlayBottom.current, {margin:'0', y: 1000, duration: 1 });
    setTimeout(() => {

      setPreviewShowing(!previewShowing)
      setBgVisible(false)
    }, 1000)
  }



  return (
    <div className="cover-transition">
        <h1>Hello Cheshire Cover Transition</h1>
        <div ref={allCards} className="content">
        {
          fakeData && fakeData.map((item, i)=> {
            if(!previewShowing) {
              
              return (
                <div key={`item-key=${i}`} className="item">
                  <div className="item__top">
                      <div className="item__img" style={{backgroundImage: `url(${item.url})`}}></div>
                  </div>
                  <div className="item__bottom">
                    <h2 className="item__title">{item.itemTitle}</h2>
                    <p className="item__desc">{item.itemContent}</p>
                    <a onClick={()=> openItem(i)} className="item__link">view</a>
                  </div>
                </div>
              )
            } else {
              return;
            }

          })
        }
      </div>

      <div ref={overlayTop} className="overlay-top">
      </div>
      <div ref={overlayBottom} className="overlay-bottom">
      </div>
      {bgVisible && <div ref={overlayBg} className="overlay-bg">
      </div>}

      <section ref={previewBottomRef} className="previews">

      {
        fakeData.map((preview, i)=> {
          if(previewShowing && indexOfItem === i) {
            return (
              <div ref={previewBottomRef} key={`preview-key=${i}`} className="preview">
        <div><h1 ref={previewBottomRef} style={{color: "red"}}>TEST DIV ANIMATE ME</h1></div>
                <div className="preview__top">
   
                  <div className="preview__img-wrapper">
                    <div className="preview__img" style={{backgroundImage: `url(${preview.url})`}}>
                    <h2 className="preview__title">{preview.previewTitle}</h2>
                    </div>
                    </div>
                  <div className="preview__img" style={{backgroundImage: `url(${preview.urlBig})`}}>
                    </div>
                </div>
  
                <div className="preview__bottom">
                  <div className="preview__column">
                    <span className="preview__column-title preview__column-title--main">{preview.previewName}</span>
                  </div>
                  <div className="preview__column">
                    <h3 className="preview__column-title">Favorite Food</h3>
                    <p>{preview.questionOneAnswer}</p>
                  </div>
                  <div className="preview__column">
                    <h3 className="preview__column-title">Favorite Color</h3>
                    <p>{preview.questionTwoAnswer}</p>
                  </div>         
                </div>
              </div>
            )
          } else {
            return;
          }

        })
      }
      {previewShowing && <button onClick={()=> closePreview()}  className="btn">BACK</button>}
      </section>
    </div>
  )
}
