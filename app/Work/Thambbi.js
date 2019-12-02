import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import WorkPageNavigation from '../Common/Utill/navigation'

import ProjectPageSummary from '../Common/Utill/ProjectPageSummary'

import ScrollMagic from 'scrollmagic';
import { TweenMax, CSSPlugin, TweenLite, TimelineLite, Linear, Power4 } from 'gsap/all';
import 'imports-loader?define=>false!debug.addIndicators';
import 'imports-loader?define=>false!animation.gsap';

import Header from '../Header'
import Footer from '../Footer'

import HeroBanner from '../Public/images/thambbi/background.jpg'
import ThambbiImgOne from '../Public/images/thambbi/thambbi-1.jpg'
import ThambbiImgTwo from '../Public/images/thambbi/thambbi-2.jpg'
import ThambbiImgThree from '../Public/images/thambbi/thambbi-3.jpg'
import ThambbiImgFour from '../Public/images/thambbi/thambbi-4.jpg'
import ThambbiImgFive from '../Public/images/thambbi/thambbi-5.jpg'
import ThambbiImgSix from '../Public/images/thambbi/thambbi-6.jpg'
import ThambbiImgSeven from '../Public/images/thambbi/thambbi-7.jpg'
import ThambbiImgEight from '../Public/images/thambbi/thambbi-8.jpg'
import ThambbiImgNine from '../Public/images/thambbi/thambbi-9.jpg'
import ThambbiImgTen from '../Public/images/thambbi/thambbi-10.jpg'
import ThambbiThankYou from '../Public/images/thambbi/thankyou.png' 



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

	pageAmimation() {
		const animation1 = new TimelineLite()
		 animation1
		 .to('.fold-2 .text', 0.2, { color: '#fff', autoAlpha: 1, ease: Power0.easeOut })
		 .to('.thambbi', 0.2, { backgroundColor: '#5c7845', autoAlpha: 1, ease: Power0.easeOut })
		 
		 new ScrollMagic.Scene({triggerElement: ".changeColor"})
		  .setTween(animation1)
		  //.addIndicators()
		  .addTo(this.controller)
		  //.setClassToggle(".fold-2", "is-active")


		  const animation2 = new TimelineLite()
		  animation2
		  .to('.thambbi', 0.2, { backgroundColor: '#fff', autoAlpha: 1, ease: Power4.easeOut })
 
		  new ScrollMagic.Scene({triggerElement: ".fold-3", triggerHook: 1})
		   .setTween(animation2)
		  // .addIndicators()
		   .addTo(this.controller)
		  //.setClassToggle("body", "is-active")  


		  const outers = document.querySelectorAll('.fold-5-img'),
			  outers2 = document.querySelectorAll('.fold-2-img'),
			  outers3 = document.querySelectorAll('.fold-2-group')

		  for (let i = 0; i < outers.length; i++) {
			const child = outers[i].childNodes[0].childNodes
			const fold5Animation = new TimelineLite()
			fold5Animation
					.fromTo(child, 1.5, {y: 20,  scale: 1.2, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'}, {y: 50, scale:1, clipPath : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  ease: Power4.easeOut},'-=.95' )
					
				new ScrollMagic.Scene({triggerElement: outers[i], reverse: false})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(fold5Animation)
					.addTo(this.controller)	
		}

		for (let i = 0; i < outers2.length; i++) {
			const child = outers2[i].childNodes[0].childNodes
			const fold2Animation = new TimelineLite()
			fold2Animation
					.fromTo(child, 1.5, {y: 20,  scale: 1.2, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'}, {y: 50, scale:1, clipPath : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  ease: Power4.easeOut},'-=.95' )
					
				new ScrollMagic.Scene({triggerElement: outers2[i], reverse: false})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(fold2Animation)
					.addTo(this.controller)	
		}

		for (let i = 0; i < outers3.length; i++) {
			const child = outers3[i].childNodes[0].childNodes
			const fold2Animation = new TimelineLite()
			fold2Animation
					.fromTo(child, 2, {opacity: 0, y:100}, {y:30, opacity: 1, ease: Power4.easeOut}, '-=1')
					
				new ScrollMagic.Scene({triggerElement: outers3[i], reverse: false})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(fold2Animation)
					.addTo(this.controller)	
		}

		const menuCardAnimation = new TimelineLite()
		menuCardAnimation
			.fromTo('.menu-card', 2, {opacity: 0, y:100}, {y:50, opacity: 1, ease: Power4.easeOut}, '-=1')

			new ScrollMagic.Scene({triggerElement: '.fold-3', reverse: false})
			//.addIndicators() // add indicators (requires plugin)
			.setTween(menuCardAnimation)
			.addTo(this.controller)	

			const thankYouAnimation = new TimelineLite()
			thankYouAnimation
			.fromTo('.thank-you', 5, {opacity: 0}, {opacity: 1, ease: Power4.easeOut}, '-=.30')

			new ScrollMagic.Scene({triggerElement: '.fold-4', triggerHook: 0.3, reverse: true})
			//.addIndicators() // add indicators (requires plugin)
			.setTween(thankYouAnimation)
			.addTo(this.controller)	


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
		const {foldSolicColorSec, dimensions} = this.state
		const projectSummaryContent = {
			workTitle: `Thambbi`,
			client: `Thambbi Restaurants`,
			project: `Branding & Communication Design`,
			brief: `Re-branding & designing communication for Thambbi’s chain of restaurants`,
			para1: `Thambbi is a South Indian restaurant chain, with 9 outlets in Mumbai and 1 in Pune. While the name itself translates to ‘brother’ in Tamil, the challenge was to strengthen its position as an authentic South-Indian restaurant chain. We started off with the main identity of the brand- the logo. We borrowed from the shapes of food, and the many colours and elements associated with South India. The rebranding exercise was followed by a new menu card design to enhance the overall experience of the restaurant.`,
			para2: ` `
		}
		return(
				<React.Fragment>
					<Header colorUpdate={this.state.logoColorUpdate}/>
					<div className='page-wrapper work-details-page thambbi' id='wrapper'>
						<div id='banner' className='full-page-wrapper page-header bg' style={{backgroundImage: `url(${HeroBanner})`}}>
							<WorkPageNavigation prevLink='/kate-spade' nextLink='/hero-talkies' />
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

							<div className='fold-5'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'> 
										<div className='col-md-8'>
												<div className='project-image-container justify-content-left fold-5-img'>
													<div className='col-md-10 no-gutters'>
														<img src={ThambbiImgOne}/>
													</div>
												</div>
												
												<div className='project-image-container justify-content-right fold-5-img'>
													<div className='col-md-10 no-gutters align-right'>
														<img src={ThambbiImgTwo}/>
													</div>
												</div>

												<div className='project-image-container justify-content-left fold-5-img'>
													<div className='col-md-10 no-gutters'>
														<img src={ThambbiImgThree}/>
													</div>
												</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className='fold-2' id='fold-2'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										{/* <div className='fold-2-bg' style={{'height' : foldSolicColorSec + 'px'}} ></div> */}
										<div className='col-md-8'>
												<div className='project-image-container justify-content-center fold-2-img'>
													<div className='col-md-10 no-gutters align-center'>
														<img src={ThambbiImgFour}/>
													</div>
												</div>

												<div className='project-image-container changeColor text justify-content-center fold-2-group'>
													<div className='col-md-10 no-gutters align-center'>
														<p>A little playfulness on the pronunciation of ThaMbbi, was manifested in the logo with
the letter ‘M’ being in caps. A clean and playful green logo design, one can easily identify
an authentic South Indian restaurant from a distance. Part of the rebranding exercise,
we also made recommendations with regards to using the mascot at the entrance as well as
a miniature being used when the bill is presented. The rebranding exercise was completed with
a new menu card design to enhance the overall experience in the restaurant.</p>
													</div>
												</div>

												<div className='project-image-container justify-content-center fold-2-img'>
													<div className='col-md-10 no-gutters align-center img-'>
														<img src={ThambbiImgFive}/>
													</div>
												</div>

												<div className='project-image-container  justify-content-center fold-2-group'>
													<div className='col-md-10 no-gutters'>
														<img src={ThambbiImgSix}/>
													</div>
												</div>

												<div className='project-image-container justify-content-center fold-2-img'>
													<div className='col-md-10 no-gutters align-center'>
														<img src={ThambbiImgSeven}/>
													</div>
												</div>

												<div className='project-image-container justify-content-center fold-2-img'>
													<div className='col-md-10 no-gutters align-center'>
														<img src={ThambbiImgEight}/>
													</div>
												</div>

												<div className='project-image-container justify-content-center fold-2-img'>
													<div className='col-md-10 no-gutters align-center'>
														<img src={ThambbiImgNine}/>
													</div>
												</div>
										</div>
									</div>
								</div>
							</div>

							<div className='fold-3'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'> 
										<div className='project-image-container justify-content-center'>
											<div className='col-md-10 no-gutters align-center-mar menu-card'>
												<img src={ThambbiImgTen}/>
											</div>
										</div>
									</div>									
								</div>
							</div>


							<div className='fold-4'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'> 
										<div className='project-image-container justify-content-center'>
											<div className='col-md-5 no-gutters align-center-mar thank-you'>
												<img src={ThambbiThankYou}/>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>


						<Footer bgColor='black'>
							<small className='subtitle'>Next project</small>
				        	<Link to='/hero-talkies' className={`title ${this.state.footerColor}`} data-text="HERO talkies">HERO talkies
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