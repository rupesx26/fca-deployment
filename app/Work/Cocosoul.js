import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import VideoSection from '../Common/Utill/VideoSection'
import WorkPageNavigation from '../Common/Utill/navigation'

import ProjectPageSummary from '../Common/Utill/ProjectPageSummary'

import Header from '../Header'
import Footer from '../Footer'
import SimpleSlider from '../Common/Utill/Slider'

import ScrollMagic from 'scrollmagic';
import { TweenMax, CSSPlugin, TweenLite, TimelineLite, Linear, Power4 } from 'gsap/all';
import 'imports-loader?define=>false!debug.addIndicators';
import 'imports-loader?define=>false!animation.gsap';

import HeroBanner from '../Public/images/coco/hero-background.jpg'
import CocoIntro from '../Public/images/coco/moodboard.png'
import CocoNut from '../Public/images/coco/coconut.png'
import SideLeafLeft from '../Public/images/coco/side-leaf-left.png'
import SideLeafRight from '../Public/images/coco/side-leaf-right.png'
import CoconutProduct from '../Public/images/coco/coco-product.png'
import StoryBoard from '../Public/images/coco/story-board.png'

import SbbSlide1 from '../Public/images/coco/sbb/1.jpg'
import SbbSlide2 from '../Public/images/coco/sbb/2.jpg'
import SbbSlide3 from '../Public/images/coco/sbb/3.jpg'
import SbbSlide4 from '../Public/images/coco/sbb/4.jpg'
import SbbSlide5 from '../Public/images/coco/sbb/5.jpg'
import SbbSlide6 from '../Public/images/coco/sbb/6.jpg'
import SbbSlide7 from '../Public/images/coco/sbb/7.jpg'

import ReactPlayer from 'react-player'


// import style from './work.less'

class Cocosoul extends Component { 
	
	constructor(props) {
		super(props)
		this.state = {
		
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
		
		const classArray = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const random = classArray[Math.floor(Math.random() * classArray.length)];

        this.setState({
            footerColor: random
		})
		
		this.pageAmimation()
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
	  }
	  /** To get css transalate  */
	  cssToMatrix(elementId) {
        const element = document.getElementById(elementId),
            style = window.getComputedStyle(element)

    return style.getPropertyValue('-webkit-transform') ||
         style.getPropertyValue('-moz-transform') ||
         style.getPropertyValue('-ms-transform') ||
         style.getPropertyValue('-o-transform') ||
         style.getPropertyValue('transform')

	  }

	  pageAmimation() {
		const fold2Animation = new TimelineLite()
		fold2Animation
		.fromTo('.fold-2 .sec-title', 1, {opacity: 0}, {opacity:1, ease: Power4.easeOut}, '-=1')
		.fromTo('.moodboard-img', 1.5, {opacity: 0, y:100}, {opacity:1, y:0, ease: Power4.easeOut}, '-=.60')

		new ScrollMagic.Scene({triggerElement: ".fold-2", reverse: false})
		 .setTween(fold2Animation)
		 //.addIndicators()
		 .addTo(this.controller)


		 const fold3Animation = new TimelineLite()
		fold3Animation
		.fromTo('.fold-3, .sec-title', 1, {opacity: 0}, {opacity:1, ease: Power4.easeOut}, '-=1')
		.fromTo('.script-img', 1.5, {opacity: 0, y:100}, {opacity:1, y:0, ease: Power4.easeOut}, '-=.60')

		new ScrollMagic.Scene({triggerElement: ".fold-3", reverse: false})
		 .setTween(fold3Animation)
		//  /.addIndicators()
		 .addTo(this.controller)

		 const outers = document.querySelectorAll('.script-content-para p')
		 for (let i = 0; i < outers.length; i++) {
			const child = outers[i]
			 const scriptContent = new TimelineLite()
			 scriptContent
			 	.fromTo(child, 1, {opacity: 0, y: 100}, { opacity: 1, y:0, ease: Power4.easeOut}, '-=.95')
				new ScrollMagic.Scene({triggerElement: outers[i], triggerHook:.8, reverse: false})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(scriptContent)
					.addTo(this.controller)	
		}

		const fold4Animation = new TimelineLite()
		fold4Animation
		.fromTo('.fold-4 .sec-title', 1, {opacity: 0}, {opacity:1, ease: Power4.easeOut}, '-=1')
		.fromTo('.coco-slider', 1.5, {opacity: 0, y:100}, {opacity:1, y:0, ease: Power4.easeOut}, '-=.60')
		new ScrollMagic.Scene({triggerElement: ".fold-4", reverse: false})
		 .setTween(fold4Animation)
		 //.addIndicators()
		 .addTo(this.controller)


		 const videoAnimation = new TimelineLite()
		videoAnimation
		.fromTo('.video-wrapper', 1.5, {opacity: 0, y:100}, {opacity:1, y:0, ease: Power4.easeOut}, '-=.60')
		new ScrollMagic.Scene({triggerElement: ".video-wrapper", reverse: false})
		 .setTween(videoAnimation)
		 //.addIndicators()
		 .addTo(this.controller)

		 
	  }


	render() {

		const projectSummaryContent = {
			workTitle: `Coco Soul`,
			client: `Marico, Coco Soul`,
			project: `Digital Content`,
			brief: `Create a digital communication asset for the brand`,
			para1: `Coco Soul is a premium brand of cold-pressed virgin coconut oil. While coconut oil is topically used in India for skin and hair, only certain pockets consume coconut oil. But with the rising awareness of its nutritive goodness, it was time to talk about it.`,
			para2: `Everybody relates to the dedication that goes into cooking. But few people talk about the painstaking love that goes into sourcing and creating the ingredients. \n So, that’s exactly the story we told.`,
			para3: ` `
		}

		return(
			<React.Fragment>
				<Header colorUpdate={this.state.logoColorUpdate}/>
				<div className='page-wrapper work-details-page coco' id='wrapper'>

					<div id='banner' className='full-page-wrapper page-header bg' style={{backgroundImage: `url(${HeroBanner})`}}>
						<WorkPageNavigation prevLink='/hero-talkies' nextLink='/sussegado-coffee' />
					</div>
					
						<div className='full-page-wrapper work-content'>
							<ProjectPageSummary
								title={projectSummaryContent.workTitle}
								para1={projectSummaryContent.para1}
								para2={projectSummaryContent.para2}
								para3={projectSummaryContent.para3}
								client={projectSummaryContent.client}
								project={projectSummaryContent.project}
								brief={projectSummaryContent.brief}
							/>

							<div className='fold-2 full-width'>
								<div className='container'>
									<div className='row justify-content-center no-gutters coco-intro'>
										<div className='side-leaf-left'>
											<img src={SideLeafLeft} />
										</div>
										<div className='col-md-9'>
											<div className='project-image-container'>
												<div className='row'>
													<div className='col-md-5'>
														<h5 className='sec-title'>Moodboard</h5>
													</div>
												</div>
												
												<img src={CocoIntro} className='img moodboard-img'/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='fold-3 full-width'>
								<div className='container'>
									<div className='row justify-content-center no-gutters coco-script'>
										<div className='col-md-9 script-content'>
											<div className='row'>
												<div className='col-md-5'>
													<h5 className='sec-title'>Script</h5>
													<div className='script-content-para'>
														<p> The sun shines a warmer hello, <br />And the birdsong’s is inviting. </p>
														<p>	Between these blue skies <br />and the damp red earth, <br /> where nature holds its best secrets.</p>
														<p> So, we hold them dearly, <br />and bring them to you...</p>
														<p> Introducing, 100% organic CocoSoul <br /> Cold-pressed virgin coconut oil <br />Superfood, packed with <br />real natural goodness.</p>
														<p> So, when you taste it, <br />you know it came from a good place </p> 
														<p> Coco Soul. Nature’s own superfood.</p>
													</div>
												</div>
												<div className='col-md-3'></div>
												<div className='col-md-4'>
													<div className='project-image-container' style={{marginTop : '100px'}}>
														<img src={CoconutProduct} className='img script-img'/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='fold-4 full-width'>
								<div className='container'>
									<div className='row justify-content-center no-gutters coco-intro'>
											<div className='side-leaf-right'>
												<img src={SideLeafRight} />
											</div>
											<div className='col-md-9'>
												<div className='row'>
													<div className='col-md-5'>
														<h5 className='sec-title'>Storyboard</h5>
													</div>
												</div>
													{/* <img src={StoryBoard} className='img'/> */}
											</div>
											<div className='fold-3 coco-slider'>
												<SimpleSlider
															dots={false} 
															infinite={true} 
															speed={2000}
															slidesToShow={1}
															slidesToScroll={1}
															fade={true}
															autoplay={true}
															autoplaySpeed={50}
															pauseOnHover={false}
															slide1={SbbSlide1}
															slide2={SbbSlide2}
															slide3={SbbSlide3}
															slide4={SbbSlide4}
															slide5={SbbSlide5}
															slide6={SbbSlide6}
															slide7={SbbSlide7}
															slide8={SbbSlide1}
															slide9={SbbSlide2}
															slide10={SbbSlide3}
															/>
											</div>
										</div>
								</div>
							</div>

							<div className='fold-5 video-wrapper'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-8'>
										
										{/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing /> */}
										{/* https://youtu.be/KPJVB8anfuc */}
											<VideoSection videoId='KPJVB8anfuc'/>
											{/* <FullScreenVideo/> */}
										</div>
									</div>
								</div>
							</div>

						</div>

						<Footer bgColor='black'>
							<small className='subtitle'>Next project</small>
				        	<Link to='/sussegado-coffee' className={`title ${this.state.footerColor}`} data-text='Sussegado Coffee'>Sussegado Coffee
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

export default Cocosoul