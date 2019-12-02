import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import WorkPageNavigation from '../Common/Utill/navigation'

import Header from '../Header'
import Footer from '../Footer'

import ProjectPageSummary from '../Common/Utill/ProjectPageSummary'

import ScrollMagic from 'scrollmagic';
import { TweenMax, CSSPlugin, TweenLite, TimelineLite, Linear, Power4 } from 'gsap/all';
import 'imports-loader?define=>false!debug.addIndicators';
import 'imports-loader?define=>false!animation.gsap';

import Hero from '../Public/images/hero/hero.png'
import HeroImgOne from '../Public/images/hero/hero-img-1.jpg'
import HeroImgTwo from '../Public/images/hero/hero-img-2.jpg'
import HeroImgThree from '../Public/images/hero/hero-img-3.jpg'
import HeroImgFour from '../Public/images/hero/hero-img-4.jpg'
import HeroImgFive from '../Public/images/hero/hero-img-5.jpg'
import HeroImgSix from '../Public/images/hero/hero-img-6.jpg'
import HeroImgSeven from '../Public/images/hero/hero-img-7.jpg'
import HeroBus from '../Public/images/hero/hero-bus.png'
import HeroIdOne from '../Public/images/hero/hero-id-1.png'
import HeroIdTwo from '../Public/images/hero/hero-id-2.png'
import HeroTshirt from '../Public/images/hero/t-shirt.jpg'
import HeroCup from '../Public/images/hero/hero-cup.jpg'
// import style from './work.less'



class WorkDetails extends Component { 
	constructor(props) {
		super(props)
		this.state = {
			foldSolicColorSec : null,
			dimensions: null,
			colorUpdate: true,
			logoColorUpdate: true,
			footerColor: ''
		}
		this.handleScroll = this.handleScroll.bind(this)
		this.cssToMatrix = this.cssToMatrix.bind(this)
		this.controller = new ScrollMagic.Controller()
		this.pageAmimation = this.pageAmimation.bind(this)
	}

	componentDidMount() {
		const scrollArea = document.querySelector('.page-wrapper')
        const Scroll = Scrollbar.init(scrollArea)
        Scroll.addListener(this.handleScroll);
		// const heroFold2Height = document.querySelector('.fold-2').offsetHeight,
		// 	foldSolicColorSecHeight = heroFold2Height / 1.25
		// this.setState({
		// 	dimensions: {
		// 		width: this.container.offsetWidth,
		// 		height: this.container.offsetHeight,
		// 	  },
		// 	foldSolicColorSec : foldSolicColorSecHeight
		// })

		const classArray = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const random = classArray[Math.floor(Math.random() * classArray.length)];

        this.setState({
            footerColor: random
		})
		
		this.pageAmimation()
	}
	
	renderContent() {
		const { dimensions } = this.state;
		console.log(dimensions.height)
		// return (
		//   <div>
		// 	width: {dimensions.width}
		// 	<br />
		// 	height: {dimensions.height}
		//   </div>
		// );
	  }

	  pageAmimation() {
		const bgAnimation1 = new TimelineLite()
		bgAnimation1
		//.fromTo('.hero-page-wrapper', 0.9, { backgroundColor: '#DCE7F0', autoAlpha: 1, ease: Power0.easeOut })
		.fromTo('.hero-page-wrapper', 1, {backgroundColor: '#fff'}, {backgroundColor: '#DCE7F0', ease: Power4.easeOut}, '-=1')

		new ScrollMagic.Scene({triggerElement: ".changeColor"})
		 .setTween(bgAnimation1)
		 //.addIndicators()
		 .addTo(this.controller)

		 const bgAnimation2 = new TimelineLite()
		 bgAnimation2
		  .to('.hero-page-wrapper', 1, { backgroundColor: '#fff', autoAlpha: 1, ease: Power4.easeOut })
 
		  new ScrollMagic.Scene({triggerElement: ".fold-4", triggerHook: .7})
		   .setTween(bgAnimation2)
		   //.addIndicators()
		   .addTo(this.controller)


		   const outers = document.querySelectorAll('.fold-3-img'),
		   outers2 = document.querySelectorAll('.fold-2-img'),
		   outers3 = document.querySelectorAll('.fold-6-img'),
		   controller2 = this.controller,
		   controller3 = this.controller

		   for (let i = 0; i < outers.length; i++) {
			const child = outers[i].childNodes[0].childNodes
			const foldImg3 = new TimelineLite()
			foldImg3
				.fromTo(child, 1.5, {y: 20,  scale: 1.2, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'}, {y: 50, scale:1, clipPath : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  ease: Power4.easeOut},'-=.95' )

				new ScrollMagic.Scene({triggerElement: outers[i], reverse: false})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(foldImg3)
					.addTo(controller2)	
		}

		for (let i = 0; i < outers2.length; i++) {
			const child = outers2[i].childNodes[0]
			const foldImg2 = new TimelineLite()
			foldImg2
				.fromTo(child, 1.5, {y: 20,  scale: 1.2, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'}, {y: 50, scale:1, clipPath : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  ease: Power4.easeOut},'-=.95' )

				new ScrollMagic.Scene({triggerElement: outers2[i], reverse: false})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(foldImg2)
					.addTo(controller3)	
		}

		for (let i = 0; i < outers3.length; i++) {
			const child = outers3[i].childNodes[0]
			const foldImg3 = new TimelineLite()
			foldImg3
				.fromTo(child, 1.5, {y: 20,  scale: 1.2, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'}, {y: 50, scale:1, clipPath : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  ease: Power4.easeOut},'-=.95' )

				new ScrollMagic.Scene({triggerElement: outers3[i], reverse: false})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(foldImg3)
					.addTo(controller3)	
		}

		const idCardAnimation = new TimelineLite()
		idCardAnimation
		 .fromTo('.hero-id-one', 1.5, {y: 0}, {y: -80, ease: Power1.easeInOut}, '-=.30')

		 new ScrollMagic.Scene({triggerElement: '.fold-4', triggerHook:0.1, reverse: true})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(idCardAnimation)
					.addTo(this.controller)	


		const busAnimation = new TimelineLite()
			busAnimation
			.fromTo('.hero-bus', 1.5, {x: 180, opacity:0.7}, {x: 0, opacity:1, ease: Power1.easeInOut}, '-=.30')

			new ScrollMagic.Scene({triggerElement: '.hero-bus', triggerHook:0.8, reverse: true})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(busAnimation)
					.addTo(this.controller)	

		const fold5Animation = new TimelineLite()
			fold5Animation
			.to('.fold-5 .page-header', 1, { backgroundColor: '#000', autoAlpha: 1, ease: Power4.easeOut })

			new ScrollMagic.Scene({triggerElement: '.fold-5 .page-header', triggerHook:0.3, reverse: true})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(fold5Animation)
					.addTo(this.controller)
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
		const {foldSolicColorSec, dimensions} = this.state
		const projectSummaryContent = {
			workTitle: `HERO Talkies`,
			client: `HERO Talkies`,
			project: `Brand Design`,
			brief: `Re-brand the South-Indian brand for online movie streaming`,
			para2: ` `,
			para1: `Hero Talkies is an online video-streaming platform with South Indian content. In order to position the brand as an authentic platform for the best curation of high-quality movies, we redesigned the logo. \n We used the classic ‘play’ button and a lightning bolt to represent great quality and speed. We also designed collaterals, stationery and brand guidelines for the brand.`
		}
		return(
				<React.Fragment>
					
						<Header colorUpdate={this.state.logoColorUpdate}/>
						<div className='page-wrapper work-details-page hero hero-page-wrapper' id='wrapper'>
							<div className='full-page-wrapper page-header'>
								<div className='banner-img-container'><img src={Hero} /></div>
								<WorkPageNavigation prevLink='/thambbi' nextLink='/cocosoul' />
							</div>

							<div className='full-page-wrapper work-content'>
								<ProjectPageSummary
									title={projectSummaryContent.workTitle}
									para1={projectSummaryContent.para1}
									para2={projectSummaryContent.para2}
									client={projectSummaryContent.client}
									project={projectSummaryContent.project}
									brief={projectSummaryContent.brief}
								/>

								<div className='fold-2'>
									<div className='container'>
										<div className='row justify-content-center no-gutters'>
											<div className='col-md-8'>
												<div className='project-image-container fold-2-img'>
													<img src={HeroImgOne} />
												</div>
												<div className='project-image-container fold-2-img'>
													<img src={HeroImgTwo} />
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='fold-3'>
									<div className='container'>
										<div className='row justify-content-center no-gutters'>
											<div className='col-md-8'>
												<div className='project-image-container fold-3-img justify-content-right'>
													<div className='col-md-8 no-gutters'>
														<img src={HeroImgThree}/>
													</div>
												</div>

												<div className='project-image-container fold-3-img justify-content-left changeColor'>
													<div className='col-md-8 no-gutters'>
														<img src={HeroImgFour}/>
													</div>
												</div>

												<div className='project-image-container fold-3-img justify-content-right'>
													<div className='col-md-8 no-gutters'>
														<img src={HeroImgFive}/>
													</div>
												</div>

												<div className='project-image-container fold-3-img justify-content-left'>
													<div className='col-md-8 no-gutters'>
														<img src={HeroImgSix}/>
													</div>
												</div>

												<div className='project-image-container fold-3-img justify-content-right'>
													<div className='col-md-8 no-gutters'>
														<img src={HeroImgSeven}/>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>

								<div className='fold-4'>
									<div className='container'>
										<div className='row justify-content-center no-gutters'>
											<div className='col-md-8'>
												<div className='project-image-container img-grid'>
													<div className='col-md-5 hero-id-one'>
														<img src={HeroIdOne}/>
													</div>
													<div className='col-md-2'></div>
													<div className='col-md-5 cust-mart-50'>
														<img src={HeroIdTwo}/>
													</div>
												</div>

												<div className='project-image-container hero-bus'>
													<img src={HeroBus}/>
												</div>

											</div>
										</div>
									</div>
								</div>

								<div className='fold-5 full-width'>
									<div className='full-page-wrapper page-header'>
										<div className='banner-img-container'><img src={Hero} /></div>
									</div>
								</div>

								<div className='fold-6'>
									<div className='container'>
										<div className='row justify-content-center no-gutters'>
											<div className='col-md-8'>
												<div className='project-content' style={{display:'none'}}>
													<h2>Lorem ipsum</h2>
													<div className='col-md-6 no-gutters'>
														<p>Lorem ipsum dolor sit amet, consectetur 
														adipiscing elit, sed do eiusmod tempor
														incididunt ut labore et dolore magna aliqua. 
														Ut enim ad minim veniam, quis nostrud exercitation 
														ullamco laboris nisi ut aliquip ex ea commodo 
														consequat.</p>
													</div>
												</div>
												<div className='project-image-container fold-6-img'>
													<img src={HeroTshirt}/>
												</div>

												<div className='project-image-container fold-6-img'>
													<img src={HeroCup}/>
												</div>
											</div>
										</div>
									</div>
								</div>


							</div>
						

						<Footer bgColor='black'>
							<small className='subtitle'>Next project</small>
				        	<Link to='/cocosoul' className={`title ${this.state.footerColor}`} data-text="Coco Soul">Coco Soul
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