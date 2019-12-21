import React, {Component} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Link } from 'react-router-dom';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { TweenMax, CSSPlugin, TweenLite, TimelineLite } from 'gsap/all';
const plugins = [ ScrollToPlugin ]

import NiharGoldTile from '../Public/images/work/nihar-gold.jpg'
import HrithikRoshanTile from '../Public/images/work/hrx.jpg'
import SussegadoCoffeeTile from '../Public/images/work/sussegado.jpg'
import HeroTalkiesTile from '../Public/images/work/hero-talkies-1.jpg'
import RapidRupeeTile from '../Public/images/work/rapid-rupee-1.jpg'
import KateSpadeTile from '../Public/images/work/kate-spade.jpg'
import GravityTile from '../Public/images/work/gravity.jpg'
import CocoSoulTile from '../Public/images/work/coco-soul.jpg'
import ThambbiTile from '../Public/images/work/thambbi.jpg'


class Carousel extends Component {
    constructor(props) {
        super(props)

        this.handleScroll = this.handleScroll.bind(this);
       // this.goToLastSlide = this.goToLastSlide.bind(this);
        this.activateFirstSlide = this.activateFirstSlide.bind(this);
        this.activateLastSlideAnimation = this.activateLastSlideAnimation.bind(this);
        this.wheel = this.wheel.bind(this);
        this.state = {
          transform: '',
            data : [
              {
                "_id": "01",
                "color": "blue",
                "title": "Hrithik Roshan's",
                "subtitle": "Graphic Novel",
                'route' : 'hrithik-roshan',
                'tile' : HrithikRoshanTile
              },
             
              {
                "_id": "02",
                "color": "green",
                "title": "Nihar Gold",
                "subtitle": "Packaging Design",
                'route' : 'nihar-gold',
                'tile' : NiharGoldTile
              },
             
              // {
              //   "_id": "03",
              //   "color": "pink",
              //   "title": "Kate Spade",
              //   "subtitle": "Digital Audit",
              //   'route' : 'kate-spade',
              //   'tile' : KateSpadeTile
              // },
              // {
              //   "_id": "04",
              //   "color": "green",
              //   "title": "Thambbi",
              //   "subtitle": "Branding & Communication Design",
              //   'route' : 'thambbi',
              //   'tile' : ThambbiTile
              // },
              // {
              //   "_id": "05",
              //   "color": "pink",
              //   "title": "HERO Talkies",
              //   "subtitle": "Brand Design",
              //   'route' : 'hero-talkies',
              //   'tile' : HeroTalkiesTile
              // },
              {
                "_id": "06",
                "color": "pink",
                "title": "Coco Soul",
                "subtitle": "Digital Content",
                'route' : 'cocosoul',
                'tile' : CocoSoulTile
              },
              {
                "_id": "07",
                "color": "pink",
                "title": "Sussegado",
                "subtitle": "Product & Package Design",
                'route' : 'sussegado-coffee',
                'tile' : SussegadoCoffeeTile
              },
              // {
              //   "_id": "08",
              //   "color": "pink",
              //   "title": "Rapid Rupee",
              //   "subtitle": "Brand Strategy & Communication",
              //   'route' : 'rapid-rupee',
              //   'tile' : RapidRupeeTile
              // }
              // {
              //   "_id": "09",
              //   "color": "pink",
              //   "title": "Socranos Gravity",
              //   "subtitle": "Strategy & Packaging Design",
              //   'route' : 'socranos-gravity',
              //   'tile' : GravityTile
              // },
              // {
              //   "_id": "09",
              //   "color": "pink",
              //   "title": "Socranos Gravity",
              //   "subtitle": "Strategy & Packaging Design",
              //   'route' : 'socranos-gravity',
              //   'tile' : GravityTile
              // }
            ]
        }

        let slidesContainer;
        let slides;
        let currentSlide;
        let isAnimating = false;
        let pageHeight;
        let slidesCount;
    }

    componentDidMount() {
      this.pageHeight = window.innerHeight;
      //this.navButtons = document.getElementsByClassName('blist');
      this.slidesContainer = document.getElementsByClassName("slide-container")[0];
      this.slides = document.getElementsByClassName("slide");
      this.currentSlide = this.slides[0];
      this.isAnimating = false;
      this.slidesCount = this.currentSlide.parentElement.childElementCount;
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);

        this.setState({
          transform: itemTranslate
        });
    }
    
    // goToLastSlide() {
    //   this.currentSlide = this.slides[this.slides.length-1];
    //   this.goToSlide(this.currentSlide);
    //   console.log('goToLastSlide-', this.currentSlide )
    // }

     activateFirstSlide(){
      if(this.currentSlide)
      {
        this.currentSlide.className = this.currentSlide.className.replace(' _is-active','');
      }
      if(this.currentSlide.className.indexOf('_is-active') == -1){
        this.currentSlide.className+= ' _is-active';
        TweenLite.fromTo('.slide-left-mask',1.3,
        {
        webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        }, 
        {
        webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: Power3.easeInOut,
        force3D: !1}
      )
      TweenMax.staggerFromTo("._title-anim", 1.1, {y:-80, opacity:0, ease:Power4.easeInOut}, {y:0, opacity:1, ease:Power4.easeInOut});
      TweenMax.staggerFromTo("._subtitle-anim", 1.1, {y:80, opacity:0, ease:Power4.easeInOut}, {y:0, opacity:1, ease:Power4.easeInOut});
      TweenLite.fromTo(".img-box",1.4, {yPercent:-100, xPercent: 0, opacity: 0}, {yPercent:0, xPercent: 0, opacity:1, force3D: !1} );
      TweenMax.fromTo(".blob-outer", 1.6, {y:80, opacity:0, scale:0, ease:Power4.easeInOut}, {y:0, scale:1, opacity:1, ease:Power4.easeInOut}, '=-.9');

    }
    console.log("activateFirstSlide");
    }

    activateLastSlideAnimation(){
      let currentSlideIndex = this.currentSlide.getAttribute('data-slideindex');
      console.log(currentSlideIndex == this.slidesCount-1)
      if(currentSlideIndex == this.slidesCount-1){  
        //console.log(currentSlideIndex)
        const slide = document.getElementsByClassName('slide')
          slide[currentSlideIndex].classList.value = 'slide _is-active'
          TweenLite.fromTo('.slide-left-mask',1.3,
          {
          webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
          }, 
          {
          webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: Power3.easeInOut,
          force3D: !1}
        )
          TweenMax.staggerFromTo("._title-anim", 1.1, {y:-80, opacity:0, ease:Power4.easeInOut}, {y:0, opacity:1, ease:Power4.easeInOut});
          TweenMax.staggerFromTo("._subtitle-anim", 1.1, {y:80, opacity:0, ease:Power4.easeInOut}, {y:0, opacity:1, ease:Power4.easeInOut});
          TweenLite.fromTo(".img-box",1.4, {yPercent:100, xPercent: 0, opacity: 0}, {yPercent:0, xPercent: 0, opacity:1, force3D: !1} );
          TweenMax.fromTo(".blob-outer", 1.6, {y:80, opacity:0, scale:0, ease:Power4.easeInOut}, {y:0, scale:1, opacity:1, ease:Power4.easeInOut}, '=-.9');

      }
    }
    
  	goToSlide(slide,direction,e) {
  		if(!this.isAnimating) {
  			this.isAnimating = true;
  			// this.currentSlide = slide;
     //    console.log('goToSlide-',slide)
     //    //Sliding to current slide
  			// TweenLite.to(
     //      this.slidesContainer, 1, {scrollTo: {y: this.pageHeight * this.currentSlide.getAttribute('data-slideindex') }, 
     //      onComplete: this.onSlideChangeEnd,
     //      onCompleteScope: this}
     //      );


      const previousSlide = this.currentSlide;
        this.currentSlide.className = this.currentSlide.className.replace(' _is-active','');
        this.currentSlide = slide;

        TweenMax.to(previousSlide, 1, {
          className:"-=_is-active",
          ease:Power1.easeInOut
        });
        TweenMax.to(
          this.currentSlide, 1, {className:"+=_is-active",/*ease: Power2.easeIn, */
          onComplete:this.onSlideChangeEnd,
          onCompleteScope: this});
          if(this.currentSlide.className.indexOf('_is-active') == -1){
            //e.stopImmediatePropagation()
            if(direction == 1){
                TweenLite.fromTo(".slide-left-mask",1.3,
                {
                webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
                }, 
                {
                webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: Power3.easeInOut,
                force3D: !1}
              )
              
              TweenMax.staggerFromTo("._title-anim", 1.1, {y:-80, opacity:0, ease:Power4.easeInOut}, {y:0, opacity:1, ease:Power4.easeInOut});
              TweenMax.staggerFromTo("._subtitle-anim", 1.1, {y:80, opacity:0, ease:Power4.easeInOut}, {y:0, opacity:1, ease:Power4.easeInOut});
              TweenLite.fromTo(".img-box", 1.4, {yPercent:-100, xPercent: 0, opacity: 0}, {yPercent:0, xPercent: 0, opacity:1, force3D: !1} );
              TweenMax.fromTo(".blob-outer", 1.6, {y:80, opacity:0, scale:0, ease:Power4.easeInOut}, {y:0, scale:1, opacity:1, ease:Power4.easeInOut}, '=-.9');

            }
            else{
              TweenLite.fromTo('.slide-left-mask',1.3,
              {
              webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
              }, 
              {
              webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: Power3.easeInOut,
              force3D: !1}
            )
            TweenMax.staggerFromTo("._title-anim", 1.1, {y:-80, opacity:0, ease:Power4.easeInOut}, {y:0, opacity:1, ease:Power4.easeInOut});
            TweenMax.staggerFromTo("._subtitle-anim", 1.1, {y:80, opacity:0, ease:Power4.easeInOut}, {y:0, opacity:1, ease:Power4.easeInOut});
            TweenLite.fromTo(".img-box",1.4, {yPercent:100, xPercent: 0, opacity: 0}, {yPercent:0, xPercent: 0, opacity:1, force3D: !1} );
            TweenMax.fromTo(".blob-outer", 1.6, {y:80, opacity:0, scale:0, ease:Power4.easeInOut}, {y:0, scale:1, opacity:1, ease:Power4.easeInOut}, '=-.9');

            }
          }
  		}
    }
 
    onSlideChangeEnd() {
      this.isAnimating = false;
    }
  
    goToPrevSlide() {
  		if(this.currentSlide.previousElementSibling) {
  			this.goToSlide(this.currentSlide.previousElementSibling, 0);
      }
      else if(!this.isAnimating) {
        this.props.scrollToBanner();
      }
    }
  
	 goToNextSlide() {
  		if(this.currentSlide.nextElementSibling)
  		{
        this.goToSlide(this.currentSlide.nextElementSibling, 1);
      }
      else if(!this.isAnimating)
      {
        this.props.scrollToFooter();
      }
  	}

    renderData() {
         return (
             this.state.data.map((item,i)=> {
                return (
                        <div className='slide' data-slideindex={i} key={i}>
                            <a className='slide-link' href={`#/${item.route}`}>
                              <div className='slide-wrapper'>
                                  <div className='slide-left-wrap'>
                                    <div className='slide-left-mask'>
                                      <div className={`image-container __left`} style={{backgroundImage : `url(${item.tile})`}}>
                                      {/* <div className="img-box"><img src={item.tile}/></div> */}
                                      </div>
                                      
                                    </div>
                                  </div>
                                  <div className='content __right'>
                                      <div className='blob-outer'>
                                        <div className='blob-wrapper'>
                                            <div className='blob-layer-1'></div>
                                            <div className='blob-layer-2'></div>
                                            <div className='blob'></div>
                                            <div className='blob-layer-3'></div>
                                        </div>
                                      </div>
                                     
                                      <h5 className='title _title-anim'>{item.title}</h5>
                                      <div className='subtitle _subtitle-anim'>{item.subtitle}</div>
                                  </div>
                              </div>
                            </a>
                        </div>
                    )
                }
             )
         )
      }

    wheel(e) {
      var eventDelta = e.deltaY || -e.wheelDelta || e.detail;
      var delta = eventDelta && (eventDelta >> 10 || 1) || 0;

      if(delta>0)
      {
        this.goToNextSlide();
      }
      else if(delta<0)
      {
        this.goToPrevSlide();
      }
    }
    
    render() { 
        const renderData = this.renderData();
        //const renderButtons = this.renderButtons();
        return ( 
            <section className='portfolio home-carousel-wrapper'>
              <div className='slide-container' onWheel = {(e) => this.wheel(e)}>
                {renderData}
              </div>

              {/* <div className="pagination">
                <div className="pagination__number pagination__number--first">01.</div>
                <div className="pagination__bar-wrapper">
                    <div className="pagination__bar"></div>
                </div>
                <div className="pagination__number pagination__number--last">04.</div>
            </div> */}
            </section>
         );
    }
}
 
export default Carousel;