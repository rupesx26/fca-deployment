import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import WorkPageNavigation from '../Common/Utill/navigation'

import Header from '../Header'
import Footer from '../Footer'
import ProjectPageSummary from '../Common/Utill/ProjectPageSummary'

// import style from './work.less'
import ScrollMagic from 'scrollmagic';
import { TweenMax, CSSPlugin, TweenLite, TimelineLite, Linear, Power4 } from 'gsap/all';
import 'imports-loader?define=>false!debug.addIndicators';
import 'imports-loader?define=>false!animation.gsap';


import KateHero from '../Public/images/kate/kate-hero.png'
import KateImgOne from '../Public/images/kate/kate-img-1.jpg'
import KateImgTwo from '../Public/images/kate/kate-img-2.jpg'
import KateImgThree from '../Public/images/kate/kate-img-3.jpg'
import KateImgFour from '../Public/images/kate/kate-img-4.jpg'
import KateImgFive from '../Public/images/kate/kate-img-5.jpg'
import KateImgSix from '../Public/images/kate/kate-img-6.png'
import KateImgSeven from '../Public/images/kate/kate-img-7.jpg'
import KateImgEight from '../Public/images/kate/kate-img-8.jpg'
import KateImgNine from '../Public/images/kate/kate-img-9.jpg'
import KateImgTen from '../Public/images/kate/kate-img-10.jpg'
import KateImgEleven from '../Public/images/kate/kate-img-11.jpg'
import KateImgTwelve from '../Public/images/kate/kate-img-12.jpg'
import KateImgThirteen from '../Public/images/kate/kate-img-13.jpg'
import KateImgFourteen from '../Public/images/kate/kate-img-14.jpg'
import KateImgFifteen from '../Public/images/kate/kate-img-15.png'

class WorkDetails extends Component { 
	constructor(props) {
		super(props)
		this.state = {
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
		const heroFold2Height = document.querySelector('.fold-2').offsetHeight,
			foldSolicColorSecHeight = heroFold2Height / 0.25
		this.setState({
			dimensions: {
				width: this.container.offsetWidth,
				height: this.container.offsetHeight,
				},
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
		const firstFoldAnimation = new TimelineLite()
		firstFoldAnimation
		.fromTo('.img-one', 2, {opacity: 0, x:100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		.fromTo('.img-two', 2, {opacity: 0, x:-100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=.50')
		.fromTo('.img-three', 2, {opacity: 0, x:100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=.50')
		.fromTo('.img-four', 2, {opacity: 0, x:100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		.fromTo('.img-five', 2, {opacity: 0, x:-100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		.fromTo('.img-six', 2, {opacity: 0, y:100}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		.fromTo('.img-seven', 2, {opacity: 0, y:100}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		

		new ScrollMagic.Scene({triggerElement: ".fold-2", reverse: false, triggerHook: .7})
		  .setTween(firstFoldAnimation)
		  //.addIndicators()
		  .addTo(this.controller);

		  const thirdFoldAnimation = new TimelineLite()
		  thirdFoldAnimation

		  .fromTo('.fold-3 h2', 2, {opacity: 0, y:100}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		  .fromTo('.img-eight', 2, {opacity: 0, x:100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		  .fromTo('.img-nine', 2, {opacity: 0, x:-100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=.3')
		  .fromTo('.img-ten', 2, {opacity: 0, y:-100}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=.3')
		  .fromTo('.img-eleven', 2, {opacity: 0, x:100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		  .fromTo('.img-twelve', 2, {opacity: 0, x:-100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		  .fromTo('.img-thirteen', 2, {opacity: 0, y:100}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		  .fromTo('.img-fourteen', 2, {opacity: 0, x:100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=.3')

		  new ScrollMagic.Scene({triggerElement: ".fold-3", reverse: true, triggerHook: .5})
		  .setTween(thirdFoldAnimation)
		  //.addIndicators()
		  .addTo(this.controller);

		  const fourFoldAnimation = new TimelineLite()
		  fourFoldAnimation
		  .fromTo('.fold-4 h2', 2, {opacity: 0, y:100}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		  .fromTo('.img-fifteen', 2, {opacity: 0, x:100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=.3')
		  .fromTo('.diagonal-bg', 2, {opacity: 0, y:200}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=.3')

		  new ScrollMagic.Scene({triggerElement: ".fold-4", reverse: true, triggerHook: .7})
		  .setTween(fourFoldAnimation)
		 // .addIndicators()
		  .addTo(this.controller);
	}

	
	handleScroll (e) { 
		const d = document.getElementById('footer'),
		f = document.getElementById('wrapper'),
		m = document.getElementById('kate-black-section'),
		g = document.getElementsByClassName('scroll-content'),
		t = document.getElementById('before-footer')
		g[0].setAttribute('id', 'scroll')


		const getScrollPos = this.cssToMatrix('scroll').split(',').slice(-1)[0].toString().replace(/[^\w\s]/gi, ''),
            getFinalScrollPos = parseInt(getScrollPos),
			elementPos = d.offsetTop,
			darkSection = m.offsetTop,
			darkSectionEnd = t.offsetTop
			//console.log(getFinalScrollPos, darkSection, darkSectionEnd)
        if(getFinalScrollPos > (f.offsetHeight - 50) ) {
			this.setState({
				logoColorUpdate: false
			}) 
		} else {
			this.setState({
				logoColorUpdate: true
			}) 
		}
        if ((getFinalScrollPos === elementPos)) {
			
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
			workTitle: `Kate Spade`,
			client: `Sprintler`,
			project: `Digital Audit`,
			brief: `Perform a digital audit for Kate Spade, Singapore`,
			para1: `Being a global luxury fashion brand, Kate Spade was faced with a sudden flurry of new entrants and competition brands stealing the limelight. \n We helped them reclaim their position by auditing their Instagram page and strategizing creative ways to stand out of the clutter. The first step was to build \n a unique, identifiable brand identity, tone of voice and brand personality. We also helped them to identify Instagram fashion influencers/bloggers based out of Singapore.`,
			para2:` `
		}
		return(
				<React.Fragment>
					
					<Header colorUpdate={this.state.logoColorUpdate}/>
					<div className='page-wrapper work-details-page kate' id='wrapper'>
						<div className='full-page-wrapper page-header'>
						<div className='banner-img-container'><img src={KateHero} /></div>
							<WorkPageNavigation prevLink='/nihar-gold' nextLink='/thambbi' />
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
											<div className='project-grid-one'>
												<div className='project-image-container img-one'>
													<img src={KateImgOne}/>
												</div>
												<div className='project-image-container img-two'>
													<img src={KateImgTwo}/>
												</div>
												<div className='project-image-container img-three'>
													<img src={KateImgThree}/>
												</div>
											</div>
										</div>
									</div>


									<div className='row justify-content-center no-gutters'>
										<div className='col-md-11 project-grid-two'>
												<div className='row'>
													<div className='col-md-6'>
														<div className='project-image-container justify-content-left'>
															<div className='col-md-11 img-four'>
																<img src={KateImgFour}/>
															</div>
															
														</div>
													</div>
													
													<div className='col-md-6'>
														<div className='project-image-container justify-content-right'>
														<div className='col-md-11 img-five'>
																<img src={KateImgFive}/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>


										<div className='row justify-content-center no-gutters'>
											<div className='col-md-8'>
												<div className='row'>
													<div className='project-image-container img-six'>
															<img src={KateImgSix}/>
													</div>
													<div className='project-image-container img-seven'>
															<img src={KateImgSeven}/>
													</div>

												</div>
											</div>
										</div>
								</div>
							</div>
						
							<div className='fold-3'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-8'>
											<div className='row'>
												<div className='project-content'>
													<h2>Visual guide</h2>
													<div className='col-md-6 no-gutters' style={{display: 'none'}}>
														<p>Lorem ipsum dolor sit amet, consectetur 
														adipiscing elit, sed do eiusmod tempor
														incididunt ut labore et dolore magna aliqua. 
														Ut enim ad minim veniam, quis nostrud exercitation 
														ullamco laboris nisi ut aliquip ex ea commodo 
														consequat.</p>
													</div>
												</div>

												<div className='project-image-container img-eight'>
													<img src={KateImgEight}/>
												</div>

												<div className='project-image-container img-nine'>
													<img src={KateImgNine}/>
												</div>
											</div>

											<div className='project-image-container-grid-two'>

												<div className='row'>
													<div className='col-md-6'>
														<div className='project-image-container img-ten'>
															<img src={KateImgTen}/>
														</div>
													</div>
													<div className='col-md-6'>
														<div className='project-image-container img-eleven'>
															<img src={KateImgEleven}/>
														</div>
													</div>

													<div className='col-md-6'>
														<div className='project-image-container img-twelve'>
															<img src={KateImgTwelve}/>
														</div>
													</div>

													<div className='col-md-6'>
														<div className='project-image-container img-thirteen'>
															<img src={KateImgThirteen}/>
														</div>
													</div>
												</div>
											</div>

											<div className='project-image-container img-fourteen'>
												<img src={KateImgFourteen}/>
											</div>
											

										</div>
									</div>
								</div>
							</div>


							<div className='fold-4' id='kate-black-section'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-8'>
											<div className='row'>
												<div className='project-content'>
													<h2>Grid guide</h2>
													<div className='col-md-6 no-gutters' style={{display: 'none'}}>
														<p>Lorem ipsum dolor sit amet, consectetur 
														adipiscing elit, sed do eiusmod tempor
														incididunt ut labore et dolore magna aliqua. 
														Ut enim ad minim veniam, quis nostrud exercitation 
														ullamco laboris nisi ut aliquip ex ea commodo 
														consequat.</p>
													</div>
												</div>
											</div>

											<div className='project-image-container img-fifteen' ref={el => (this.container = el)}>
												<img src={KateImgFifteen}/>
											</div>
											<div className='diagonal-bg' id='before-footer' style={{'height': foldSolicColorSec}}></div>

										</div>
									</div>
								</div>
							</div>
						</div>
						<Footer bgColor='black'>
							<small className='subtitle'>Next project</small>
				        	<Link to='/thambbi' className={`title ${this.state.footerColor}`}data-text="Thambbi">Thambbi
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