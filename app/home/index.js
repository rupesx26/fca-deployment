/** Import modules*/
import React, { Component, lazy, useRef } from 'react'
import { Link } from 'react-router-dom';

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
//const plugins = [ CSSPlugin, AttrPlugin ];
/** Import files*/
import Banner from './Banner'
import Carousel from './Carousel'
import Header from '../Header'
import Footer from '../Footer'
import LinkCta from '../Common/Utill/LinkCta'
import Icon from '../Common/Utill/Icon'


class Home extends Component {
    constructor(props) {
        super(props)
        this.wheel = this.wheel.bind(this);
        this.bannerMethod = this.bannerMethod.bind(this)
        this.footerMethod = this.footerMethod.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        

        let isAnimating = false;
        let homeContainer;
        let pageHeight;
        
        this.state = {
          colorUpdate: false,
          scrollClass : 'scroll',
          footerColor: ''
        }
        
    }

  componentDidMount() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousewheel', this.wheel);
    this.pageHeight = window.innerHeight;
    this.homeContainer = document.getElementsByClassName("home-wrapper")[0];
    const classArray = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
    const random = classArray[Math.floor(Math.random() * classArray.length)]
        this.setState({
            footerColor: random
        })
  }

  componentWillUnmount() {
    window.scrollTo(0,0);
    window.removeEventListener('scroll', this.handleScroll);
    console.log(document.body.classList)
    
  }

      handleScroll (e) {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
          this.setState({
            colorUpdate: true
          })
        }else {
          this.setState({
            colorUpdate: false
          })
        }
      }

    wheel(e) {
        var eventDelta = e.deltaY || -e.wheelDelta || e.detail;
        var delta = eventDelta && (eventDelta >> 10 || 1) || 0;
       if(delta > 0 && e.target.nextElementSibling)
        {
          this.goToCarousel();
          this.refs.child.activateFirstSlide();
        }
        else if(delta < 0 && !e.target.nextElementSibling)
        {
          const slide = document.getElementsByClassName('slide')
          slide[0].classList.value = 'slide'
          
          //this.refs.child.goToLastSlide();
          this.goToCarousel();
          this.refs.child.activateLastSlideAnimation();
        }
    }

    goToCarousel() {
      if(!this.isAnimating)
      {
        this.isAnimating = true;
        
        TweenMax.to(
            window, 0.8, {scrollTo: {y: this.pageHeight}, ease: Power1.easeInOut,
            onComplete: this.onSlideChangeEnd,
            onCompleteScope: this}
            );
      }
    }

    onSlideChangeEnd() {
      this.isAnimating = false
    }

    bannerMethod(){
      if(!this.isAnimating) {
        
        this.isAnimating = true;
        TweenLite.to(
            window, 1, {scrollTo: {y: 0 }, 
            onComplete: this.onSlideChangeEnd,
            onCompleteScope: this}
            );
      }

      console.log(document.getElementsByClassName('_is-active').length)
    }

    footerMethod(){  
      const slide = document.getElementsByClassName('slide')
      //console.log(slide)
          slide[2].classList.value = 'slide'
      if(!this.isAnimating) {
        // console.log('footer-')
        // this.setState({
        //   colorUpdate: true
        // })

       this.isAnimating = true;
        TweenLite.to(
            window, 1, {scrollTo: {y: window.pageYOffset+this.pageHeight }, 
            onComplete: this.onSlideChangeEnd,
            onCompleteScope: this}
            );
      }    
    }



    render() { 
      //console.log('home', this.state.footerColor)
        return ( 
            <div className='home-wrapper page-wrapper'>
                  {/* <div className='bg-blog-wrapper'>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" preserveAspectRatio="xMidYMid meet"  viewBox="0 0 2134.000000 1940.000000">
                    <g transform="translate(0.000000,1940.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M10700 18424 c-25 -2 -110 -8 -190 -14 -752 -54 -1604 -224 -2325 -464 -2431 -811 -4335 -2535 -5180 -4691 -337 -859 -536 -1813 -595 -2849 -13 -230 -13 -907 0 -1129 130 -2204 888 -4120 2130 -5390 617 -631 1155 -978 2313 -1491 1436 -637 2994 -1096 4392 -1296 583 -83 942 -110 1523 -117 719 -8 1201 31 1761 143 824 165 1532 486 2133 966 329 264 884 823 1211 1223 642 785 983 1534 1058 2328 15 168 7 623 -15 782 -77 551 -237 1030 -508 1515 -170 304 -321 524 -761 1109 -435 580 -563 761 -731 1040 -339 563 -536 1144 -660 1941 -42 265 -82 653 -136 1305 -81 974 -131 1369 -230 1798 -158 682 -406 1214 -794 1702 -112 141 -406 431 -564 557 -646 515 -1432 837 -2372 972 -352 51 -477 59 -960 61 -250 1 -475 1 -500 -1z m1105 -48 c849 -84 1550 -292 2165 -641 144 -82 388 -248 530 -361 162 -129 474 -439 589 -584 494 -625 767 -1359 900 -2425 32 -252 58 -522 101 -1050 22 -269 49 -580 60 -690 127 -1267 361 -2001 893 -2800 134 -201 250 -361 598 -825 514 -684 673 -928 868 -1330 156 -322 256 -619 326 -965 60 -299 70 -405 70 -745 0 -333 -10 -436 -66 -704 -171 -815 -649 -1612 -1478 -2460 -372 -381 -605 -595 -836 -766 -728 -543 -1567 -852 -2630 -969 -372 -42 -470 -46 -1000 -46 -526 0 -632 5 -1055 45 -1784 173 -3832 782 -5630 1676 -343 170 -511 264 -715 399 -1161 767 -2049 1997 -2571 3562 -247 739 -400 1512 -470 2373 -21 264 -30 1013 -15 1292 59 1074 262 2043 613 2922 469 1176 1283 2261 2328 3102 1460 1175 3294 1873 5265 2004 209 13 973 4 1160 -14z"/>
                    </g>
                    </svg>
                  </div> */}
                  <Header colorUpdate = {this.state.colorUpdate} />
                  <LinkCta router='/connect' position='_fixed _left' linkText='Say Hello' linkClass={`say-hello test ${this.state.colorUpdate ? 'invert' : ''}`} />
                  {/* <Blob /> */}
                  <Banner />
                  <Carousel ref="child" 
                    scrollToBanner={this.bannerMethod} 
                    scrollToFooter={this.footerMethod}
                  />
                  <Footer bgColor='black'>
                      <small className='subtitle'>Interested in more?</small>
                      <Link to='/work' className={`title ${this.state.footerColor}`} data-text='view work'>View Work
                          <div className='footer-arrow'>
                              <div className='chevron'></div>
                              <div className='chevron'></div>
                              <div className='chevron'></div>
                          </div>
                      </Link>
                  </Footer>
            </div>
         );
    }

  
}
 
export default Home;