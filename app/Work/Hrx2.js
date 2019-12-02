import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import WorkPageNavigation from '../Common/Utill/navigation'

import ScrollMagic from 'scrollmagic';
import { TweenMax, CSSPlugin, TweenLite, TimelineLite, Linear, Power4 } from 'gsap/all';
import 'imports-loader?define=>false!debug.addIndicators';
import 'imports-loader?define=>false!animation.gsap';

import Header from '../Header'
import Footer from '../Footer'
import HrxSlider from '../Common/Utill/HrxSlider'


import HrxHeaderBg from '../Public/images/hrx/hrx-banner-bg.jpg'
import HrxImgOne from '../Public/images/hrx/hrx-img-1.jpg'
import HrxImgTwo from '../Public/images/hrx/hrx-img-2.jpg'
import HrxImgThree from '../Public/images/hrx/hrx-img-3.jpg'
import HrxImgFour from '../Public/images/hrx/hrx-img-4.jpg'
import HrxImgFive from '../Public/images/hrx/book-cover.jpg'
import HrxImgSix from '../Public/images/hrx/book-inside.jpg'
import HrxGraphicBg from '../Public/images/hrx/hrx-graphic-bg.png'
import HrxChar from '../Public/images/hrx/hrx-char.png'

import HrxGraphicRowOneImgOne from '../Public/images/hrx/row1-img-1.jpg'
import HrxGraphicRowOneImgTwo from '../Public/images/hrx/row1-img-2.jpg'

import HrxGraphicRowTwoImgOne from '../Public/images/hrx/row2-img-1.jpg'
import HrxGraphicRowTwoImgTwo from '../Public/images/hrx/row2-img-2.jpg'
import HrxGraphicRowTwoImgThree from '../Public/images/hrx/row2-img-3.jpg'

import HrxGraphicRowThreeImgOne from '../Public/images/hrx/row3-img-1.jpg'
import HrxGraphicRowThreeImgTwo from '../Public/images/hrx/row3-img-2.jpg'
import HrxGraphicRowThreeImgThree from '../Public/images/hrx/row3-img-3.jpg'

import HrxGraphicRowFourImgOne from '../Public/images/hrx/row4-img-1.jpg'
import HrxGraphicRowFourImgTwo from '../Public/images/hrx/row4-img-2.jpg'
import HrxGraphicRowFourImgThree from '../Public/images/hrx/row4-img-3.jpg'

import SbbSlide1 from '../Public/images/hrx/strip-1/1.jpg'
import SbbSlide2 from '../Public/images/hrx/strip-1/2.jpg'
import SbbSlide3 from '../Public/images/hrx/strip-1/3.jpg'
import SbbSlide4 from '../Public/images/hrx/strip-1/4.jpg'
import SbbSlide5 from '../Public/images/hrx/strip-1/5.jpg'
import SbbSlide6 from '../Public/images/hrx/strip-1/6.jpg'

import SbbSlide7 from '../Public/images/hrx/strip-2/1.jpg'
import SbbSlide8 from '../Public/images/hrx/strip-2/2.jpg'
import SbbSlide9 from '../Public/images/hrx/strip-2/3.jpg'
import SbbSlide10 from '../Public/images/hrx/strip-2/4.jpg'
import SbbSlide11 from '../Public/images/hrx/strip-2/5.jpg'
import SbbSlide12 from '../Public/images/hrx/strip-2/6.jpg'

import SbbSlide13 from '../Public/images/hrx/strip-3/1.jpg'
import SbbSlide14 from '../Public/images/hrx/strip-3/2.jpg'
import SbbSlide15 from '../Public/images/hrx/strip-3/3.jpg'
import SbbSlide16 from '../Public/images/hrx/strip-3/4.jpg'
import SbbSlide17 from '../Public/images/hrx/strip-3/5.jpg'
import SbbSlide18 from '../Public/images/hrx/strip-3/6.jpg'

import SbbSlide19 from '../Public/images/hrx/strip-4/1.jpg'
import SbbSlide20 from '../Public/images/hrx/strip-4/2.jpg'
import SbbSlide21 from '../Public/images/hrx/strip-4/3.jpg'
import SbbSlide22 from '../Public/images/hrx/strip-4/4.jpg'
import SbbSlide23 from '../Public/images/hrx/strip-4/5.jpg'
import SbbSlide24 from '../Public/images/hrx/strip-4/6.jpg'


// import style from './work.less'

class WorkDetails extends Component { 
	constructor(props) {
		super(props)
		this.state = {
			dimensions: null,
			foldSolicColorSec : null,
			colorUpdate: true,
			logoColorUpdate: true,
			footerColor: ''
		}
		this.handleScroll = this.handleScroll.bind(this)
		this.cssToMatrix = this.cssToMatrix.bind(this)
		this.controller = new ScrollMagic.Controller()
		this.pageAmimation = this.pageAmimation.bind(this)
		//this.updateBox = this.updateBox.bind(this)

	}

	componentDidMount() {
		const scrollArea = document.querySelector('.page-wrapper')
        const Scroll = Scrollbar.init(scrollArea)
        Scroll.addListener(this.handleScroll);
		const heroFold2Height = document.querySelector('.fold-2').offsetHeight,
			foldSolicColorSecHeight = heroFold2Height + 200
			console.log('foldSolicColorSecHeight', foldSolicColorSecHeight)
			this.setState({
			// dimensions: {
			// 	width: this.container.offsetWidth,
			// 	height: this.container.offsetHeight,
			//   },
			  foldSolicColorSec : foldSolicColorSecHeight
		})
		const classArray = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const random = classArray[Math.floor(Math.random() * classArray.length)];

        this.setState({
            footerColor: random
		})
		
		this.pageAmimation()
	}
	
	pageAmimation() {
		
		TweenMax.from('.char-img', 1.5, {autoAlpha: 0.1, scale: 1.5, y: 0, ease:Power2.easeOut}),
		TweenMax.fromTo('.char-img', 2.8, {y: 0}, {y: 20, repeat:-1, yoyo:true, ease:Linear.easeNone})
		
		 const animation = new TimelineLite()
		 animation
		 .fromTo('.work-title', 2, {opacity: 0, y:100}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		 .fromTo('.text-1', 1.1, {opacity: 0}, { opacity: 1, ease: Power4.easeOut}, '-=.95')
		 .fromTo('.text--1', 1.1, {opacity: 0 }, { opacity: 1, ease: Power4.easeOut}, '-=.95')

		 .fromTo('.text-2', 1.1, {opacity: 0}, { opacity: 1, ease: Power4.easeOut}, '-=.95')
		 .fromTo('.text--2', 1.1, {opacity: 0}, { opacity: 1, ease: Power4.easeOut}, '-=.95')

		 .fromTo('.text-3', 1.1, {opacity: 0}, { opacity: 1, ease: Power4.easeOut}, '-=.95')
		 .fromTo('.text--3', 1.1, {opacity: 0}, { opacity: 1, ease: Power4.easeOut}, '-=.95')

		 .fromTo('.project-summary p:first-child', 1.3, {opacity: 0, y: 100}, { opacity: 1, y:0, ease: Power4.easeOut}, '-=.95')
		 .fromTo('.project-summary p:last-child', 1.3, {opacity: 0, y: 100}, { opacity: 1, y:0, ease: Power4.easeOut}, '-=.95')
		
		 const animation2 = new TimelineLite()
		 .fromTo('.fold-2-bg', 3, {opacity:0, filter: 'blur(20px)'}, {opacity:1, filter: 'blur(0px)', ease: Power4.easeOut}, '-=.95')
		 .fromTo('.fold-2-content', 1, {opacity: 0, y: 100}, { opacity: 1, y:0, ease: Power4.easeOut}, '-=.95')
		
		 new ScrollMagic.Scene({triggerElement: "#fold-1", reverse: false})
      	.setTween(animation)
      	
	  .addTo(this.controller);

	  new ScrollMagic.Scene({triggerElement: "#fold-2", reverse: false})
	  .setTween(animation2)
	  .addTo(this.controller)

	//   const animation3 = new TimelineLite()
	//   .fromTo('.fold-5-bg', 3, {opacity:0, backgroundColor : '#f1ff1f2'}, {opacity:1, backgroundColor: '#f9d54a', ease: Power4.easeOut}, '-=.70')

	//   new ScrollMagic.Scene({triggerElement: "#fold-5", reverse: false})
	//   .setTween(animation3)
	//   .addTo(this.controller)

	  const animation6 = new TimelineLite()
	  .fromTo('.fold-4-bg', 3, {opacity:0, backgroundColor : '#f1ff1f2'}, {opacity:1, backgroundColor: '#4fb8eb', ease: Power4.easeOut}, '-=.70')

	  new ScrollMagic.Scene({triggerElement: "#fold-4", reverse: false})
	  .setTween(animation6)
	  .addTo(this.controller)

	  const outers = document.querySelectorAll('.fold-2-img'),
		  controller2 = this.controller,
		  novelSlides = document.querySelectorAll('.masonry-brick--h'),
		  outers2 = document.querySelectorAll('.fold-4-img')
		  for (let i = 0; i < outers.length; i++) {
			const child = outers[i].childNodes[0].childNodes
			const animation4 = new TimelineLite()
			
				animation4
					.fromTo(child, 1.5, {y: 20,  scale: 1.2, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'}, {y: 50, scale:1, clipPath : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  ease: Power4.easeOut},'-=.95' )

				new ScrollMagic.Scene({triggerElement: outers[i], reverse: false})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(animation4)
					.addTo(controller2)	
		}
		
		for (let i = 0; i < novelSlides.length; i++) {
			const child = novelSlides[i].childNodes,
			 animation4 = new TimelineLite()
				if(i % 2 == 0) {
					animation4
					.fromTo(child, 1.5, { y: -50, opacity:0, filter:'blur(20px)' }, { y: 0, opacity: 1, filter:'blur(0px)', ease: Power4.easeOut},'-=.95' )
				} else {
					animation4
					.fromTo(child, 1.5, {y: 50, opacity:0, filter:'blur(20px)' }, { y: 0, opacity: 1, filter:'blur(0px)', ease: Power4.easeOut},'-=.50' )
				}

				new ScrollMagic.Scene({triggerElement: novelSlides[i], reverse: false})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(animation4)
					.addTo(controller2)	
		 }

		//  for (let i = 0; i < outers2.length; i++) {
		// 	const child = outers2[i].childNodes[0].childNodes
		// 	const animation5 = new TimelineLite()
				
		// 	animation5
		// 	.fromTo(child, 1.5, {y: 20,  scale: 1.2, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'}, {y: 50, scale:1, clipPath : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  ease: Power4.easeOut},'-=.95' )


		// 		new ScrollMagic.Scene({triggerElement: outers2[i], reverse: false})
		// 			//.addIndicators() // add indicators (requires plugin)
		// 			.setTween(animation5)
		// 			.addTo(controller2)	
		//  }
	 }

	renderContent() {
		const { dimensions } = this.state;
		console.log(dimensions.height)
	  }
	  handleScroll (e) { 
		const d = document.getElementById('footer'),
		f = document.getElementById('wrapper'),
		g = document.getElementsByClassName('scroll-content')
		g[0].setAttribute('id', 'scroll')

		const getScrollPos = this.cssToMatrix('scroll').split(',').slice(-1)[0].toString().replace(/[^\w\s]/gi, ''),
            getFinalScrollPos = parseInt(getScrollPos),
			elementPos = d.offsetTop
			
        if(getFinalScrollPos > (f.offsetHeight - 50) ) {
			this.setState({
				logoColorUpdate: false
			}) 
		} else {
			this.setState({
				logoColorUpdate: true
			}) 
		}
        if (getFinalScrollPos === elementPos) {
            this.setState({
                logoColorUpdate: true
            })
		} 
		//else {
        //     this.setState({
        //         logoColorUpdate: true
        //     })
		// }
		
	  }
	  /** To get css transalate  */
	  cssToMatrix(elementId) {
        const element = document.getElementById(elementId),
            style = window.getComputedStyle(element)

    return style.getPropertyValue("-webkit-transform") ||
         style.getPropertyValue("-moz-transform") ||
         style.getPropertyValue("-ms-transform") ||
         style.getPropertyValue("-o-transform") ||
         style.getPropertyValue("transform");

	  }

	render() {
		const { dimensions, foldSolicColorSec } = this.state;
		return(
				<React.Fragment>
					
					<Header colorUpdate={this.state.logoColorUpdate}/>
					<div className='page-wrapper work-details-page hrx' id='wrapper'>
						<div id='banner' className='full-page-wrapper page-header bg hrx-bg' style={{backgroundImage: `url(${HrxHeaderBg})`}}>
						<div className="bg-bdr"></div>
							<div className='container'>
								<div className='row justify-content-center no-gutters'>
									<div className='col-md-10'>
										<div className='banner-text'>
											{/* Hrithik Roshan */}
											{/* <img src={HrxBannerTxt}/> */}
										</div>
										<div className='char-img'><img src={HrxChar}/></div>
									</div>
								</div>
							</div>
							<WorkPageNavigation prevLink='/socranos-gravity' nextLink='/nihar-gold' />
						</div>
						
						<div className='full-page-wrapper work-content'>
							<div className='fold-1' id='fold-1'>
								<div className='container stage-1' id='stage-1'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-8'>
											<div className='work-title'>
												<h1>Hrithik Roshan</h1>
											</div>

											<div className="work-description">
										<div className="row no-gutters">
											<div className="col-md-5 no-gutters project-initial">
											<ul>
												<li>
												<label className='text-1'>Client</label>
												<span className="client-name text--1">Hrithik Roshan</span>
												</li>
												<li>
												<label className='text-2'>Project</label>
												<span className="client-name text--2">Graphic Novel Design</span>
												</li>
												<li>
												<label className='text-3'>Brief</label>
												<span className="client-name text--3">
												Design a graphic novel for kids inspired from real life stories of Hrithik Roshan
												</span>
												</li>

												
											</ul>
											</div>
											<div className="col-md-1"></div>
											<div className="col-md-6 project-summary">
											<p>Hrithik Roshan is extensively involved in charitable initiatives for children. We partnered with him <br />in one such event where he wanted to help <br/> under-confident kids. </p>
											<p>So, we created and designed a graphic novel that <br/>he would hand out to the kids. The story is inspired by <br/>Hrithik’s own struggles as a child and how <br />he overcame hurdle after hurdle, <br/>to become the star he is today. </p>
											{/* <a href="" className="launch-project">Launch Project</a> */}
											</div>
										</div>
									</div>

										</div>
									</div>
								</div>
							</div>

							<div className='fold-2' id='fold-2' style={{'height' : foldSolicColorSec + 'px'}}>
								<div className='container' id='stage-2'>
									<div className='row justify-content-center no-gutters'>
										<div className='fold-2-bg' style={{'height' : foldSolicColorSec + 'px', backgroundImage: `url(${HrxGraphicBg})`}}></div>
										<div className='col-md-11'>
											<div className='row'>
												<div className='col-md-7'></div>
												<div className='col-md-5'>
													<div className='project-content fold-2-content justify-content-right'>
															<p>
																My name is Hrithik Roshan and I would like <br />
																to share my story with you. Here are some lessons <br />
																I’ve learnt along the way that have helped me <br />
																become who I am today.
															</p>
													</div>
												</div>
											</div>
											
											

										</div>
									</div>
								</div>
							</div>

							<div className='fold-5 fold-5-bg' id='fold-5' style={{ backgroundImage: `url(${HrxImgFive})`}}>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-4'>
											<div className='project-image-container fold-5-img'>
												<div className='col-md-12 no-gutters'>
													{/* <img src={HrxImgFive}/> */}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='fold-6' id='fold-6'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-10'>

										<div id='project-image-wrapper'>
												<div className='project-image-container fold-2-img img-1 justify-content-left' ref={el => (this.container = el)}>
													<div className='col-md-6 no-gutters'>
														<img src={HrxImgOne} className='img'/>
													</div>
												</div>
												<div className='project-image-container img-2 fold-2-img justify-content-right' ref={el => (this.container = el)}>
													
													<div className='col-md-6 no-gutters'>
														<img src={HrxImgTwo} className='img'/>
													</div>
												</div>
												<div className='project-image-container img-3 fold-2-img  justify-content-left' ref={el => (this.container = el)}>
													<div className='col-md-6 no-gutters'>
														<img src={HrxImgThree} className='img'/>
													</div>
												</div>

												<div className='project-image-container img-4 fold-2-img justify-content-right' ref={el => (this.container = el)}>
													<div className='col-md-6 no-gutters'>
														<img src={HrxImgFour} className='img'/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className='fold-3' id='fold-3'>
								<div className='container row no-gutters'>
									<div className='row no-gutters'>
										<div className='view slider-2'>
										<HrxSlider
											dots={false} 
											infinite={true} 
											speed={3000}
											slidesToShow={3}
											slidesToScroll={1}
											fade={false}
											autoplay={true}
											autoplaySpeed={3000}
											pauseOnHover={false}
											centerMode={false}
											variableWidth={true}
											slide1={SbbSlide1}
											slide2={SbbSlide2}
											slide3={SbbSlide3}
											slide4={SbbSlide4}
											slide5={SbbSlide5}
											slide6={SbbSlide6}

											slide7={SbbSlide7}
											slide8={SbbSlide8}
											slide9={SbbSlide9}
											slide10={SbbSlide10}
											slide11={SbbSlide11}
											slide12={SbbSlide12}

											slide13={SbbSlide13}
											slide14={SbbSlide14}
											slide15={SbbSlide15}
											slide16={SbbSlide16}
											slide17={SbbSlide17}
											slide18={SbbSlide18}

											slide19={SbbSlide19}
											slide20={SbbSlide20}
											slide21={SbbSlide21}
											slide22={SbbSlide22}
											slide23={SbbSlide23}
											slide24={SbbSlide24}
											/>

										</div>
									</div>
								</div>
							</div>

							<div className='fold-3' id='fold-3'>
								<div className='container row no-gutters'>
									<div className='row no-gutters'>
										<div className='view slider-2'>
										<HrxSlider
											dots={false} 
											infinite={true} 
											speed={2000}
											slidesToShow={3}
											slidesToScroll={-1}
											fade={false}
											autoplay={true}
											autoplaySpeed={3000}
											pauseOnHover={false}
											centerMode={false}
											variableWidth={true}
											slide1={SbbSlide1}
											slide2={SbbSlide2}
											slide3={SbbSlide3}
											slide4={SbbSlide4}
											slide5={SbbSlide5}
											slide6={SbbSlide6}

											slide7={SbbSlide7}
											slide8={SbbSlide8}
											slide9={SbbSlide9}
											slide10={SbbSlide10}
											slide11={SbbSlide11}
											slide12={SbbSlide12}

											slide13={SbbSlide13}
											slide14={SbbSlide14}
											slide15={SbbSlide15}
											slide16={SbbSlide16}
											slide17={SbbSlide17}
											slide18={SbbSlide18}

											slide19={SbbSlide19}
											slide20={SbbSlide20}
											slide21={SbbSlide21}
											slide22={SbbSlide22}
											slide23={SbbSlide23}
											slide24={SbbSlide24}
											/>

										</div>
									</div>
								</div>
							</div>

							<div className='fold-4 fold-5-bg' id='fold-4' style={{ backgroundImage: `url(${HrxImgSix})`}}>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-6'>
											<div className='project-image-container fold-4-img'>
												<div className='col-md-12 no-gutters'>
													{/* <img src={HrxImgSix}/> */}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>

						<Footer bgColor='black'>
							<small className='subtitle'>Next project</small>
				        	<Link to='/nihar-gold' className={`title ${this.state.footerColor}`} data-text="Nihar Gold">Nihar Gold
                          <div className='footer-arrow'>
                              <div className='chevron'></div>
                              <div className='chevron'></div>
                              <div className='chevron'></div>
                          </div>
                      </Link>
				        </Footer>
					</div>
				</React.Fragment>
			)
	}
}

export default WorkDetails