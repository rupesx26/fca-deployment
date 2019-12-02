import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import WorkPageNavigation from '../Common/Utill/navigation'
import VideoSection from '../Common/Utill/VideoSection'
import FullScreenVideo from '../Common/Utill/FullScreenVideo'
import SimpleSlider from '../Common/Utill/Slider'

import ScrollMagic from 'scrollmagic';
import { TweenMax, CSSPlugin, TweenLite, TimelineLite, Linear, Power4 } from 'gsap/all';
import 'imports-loader?define=>false!debug.addIndicators';
import 'imports-loader?define=>false!animation.gsap';

import Header from '../Header'
import Footer from '../Footer'

import ProjectPageSummary from '../Common/Utill/ProjectPageSummary'

// import style from './work.less'

import JarsHero from '../Public/images/jars/lid.png'
import JarDj from '../Public/images/jars/jar-dj.jpg'
import JarRapper from '../Public/images/jars/jar-rapper.jpg'
import JarHippi from '../Public/images/jars/jar-hippi.jpg'
import JarTattoArtist from '../Public/images/jars/jar-tatto-artist.jpg'
import JarBiker from '../Public/images/jars/jar-biker.jpg'
import JarBikerBanner from '../Public/images/jars/jar-banner-biker.jpg'
import JarHippiBanner from '../Public/images/jars/jar-banner-hippi.jpg'
import JarDjBanner from '../Public/images/jars/jar-banner-dj.jpg'
import JarTattoArtistBanner from '../Public/images/jars/jar-banner-tatto-artist.jpg'
import JarRapperBanner from '../Public/images/jars/jar-banner-rapper.jpg'
import JarSlide1 from '../Public/images/jars/1.jpg'
import JarSlide2 from '../Public/images/jars/2.jpg'
import JarSlide3 from '../Public/images/jars/3.jpg'
import JarSlide4 from '../Public/images/jars/4.jpg'
import JarSlide5 from '../Public/images/jars/5.jpg'
// import JarSlide6 from '../Public/images/jars/6.jpg'
import JarSlide7 from '../Public/images/jars/7.jpg'
import JarSlide8 from '../Public/images/jars/8.jpg'
import JarSlide9 from '../Public/images/jars/9.jpg'
import JarSlide10 from '../Public/images/jars/10.jpg'






class WorkDetails extends Component { 

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

	pageAmimation() {
		
		const outers = document.querySelectorAll('.fold-4 .project-content li')
		for (let i = 0; i < outers.length; i++) {
		   const child = outers[i]
		   console.log(child)
			const scriptContent = new TimelineLite()
			scriptContent
				.fromTo(child, 1, {opacity: 0, y: 100}, { opacity: 1, y:0, ease: Power4.easeOut}, '-=.95')
			   new ScrollMagic.Scene({triggerElement: outers[i], triggerHook:.8, reverse: true})
				   //.addIndicators() // add indicators (requires plugin)
				   .setTween(scriptContent)
				   .addTo(this.controller)	
	   }

	   const outers2 = document.querySelectorAll('.fold-4 .jar-banners .project-image-container')
		for (let i = 0; i < outers2.length; i++) {
		   const child = outers2[i]
		   console.log(child)
			const scriptContent = new TimelineLite()
			scriptContent
				.fromTo(child, 1, {opacity: 0, y: 100}, { opacity: 1, y:0, ease: Power4.easeOut}, '-=.95')
			   new ScrollMagic.Scene({triggerElement: outers2[i], triggerHook:.8, reverse: true})
				  // .addIndicators() // add indicators (requires plugin)
				   .setTween(scriptContent)
				   .addTo(this.controller)	
	   }

		const jarAnimation = new TimelineLite()
			jarAnimation
				// .fromTo('.jar-list .rapper', 1.2, {y: -100, opacity:0,  transform: 'rotateY(180deg)'}, {y: 0, opacity: 1,  transform: 'rotateY(0)', ease: Power4.easeOut},'-=.95' )
				// .fromTo('.jar-list .hippi', 1.2, {y: -100, opacity:0,  transform: 'rotateY(180deg)'}, {y: 0, opacity: 1,  transform: 'rotateY(0)', ease: Power4.easeOut},'-=.95' )
				// .fromTo('.jar-list .biker', 1.2, {y: -100, opacity:0,  transform: 'rotateY(180deg)'}, {y: 0, opacity: 1,  transform: 'rotateY(0)', ease: Power4.easeOut},'-=.95' )
				// .fromTo('.jar-list .tatto', 1.2, {y: -100, opacity:0,  transform: 'rotateY(180deg)'}, {y: 0, opacity: 1,  transform: 'rotateY(0)', ease: Power4.easeOut},'-=.95' )
				// .fromTo('.jar-list .dj', 1.2, {y: -100, opacity:0,  transform: 'rotateY(180deg)'}, {y: 0, opacity: 1,  transform: 'rotateY(0)', ease: Power4.easeOut},'-=.95' )
				.fromTo('.jar-list', 1.2, {y: 100, opacity:0 }, {y: 0, opacity: 1, ease: Power4.easeOut},'-=.95' )
			new ScrollMagic.Scene({triggerElement: '.jar-list', reverse: false	})
				//.addIndicators() // add indicators (requires plugin)
				.setTween(jarAnimation)
				.addTo(this.controller)	


		const videoAnimation = new TimelineLite()
		videoAnimation
		.fromTo('.video-wrapper', 1.5, {opacity: 0, y:100}, {opacity:1, y:0, ease: Power4.easeOut}, '-=.60')
		new ScrollMagic.Scene({triggerElement: ".video-wrapper", reverse: false})
			.setTween(videoAnimation)
			//.addIndicators()
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
		const projectSummaryContent = {
			workTitle: `Sussegado`,
			client: `Sussegado Coffee.`,
			project: `Product & Packaging Design`,
			brief: `Design a line of coffee refill jars.`,
			para1: `There’s nothing quite as disappointing as waking up to an empty coffee jar. So we partnered with Sussegado coffee to create a promo jar that reminds one to refill their coffee. `,
			para2: `We designed 5 quirky characters – a rapper, hippie, biker, tattoo artist and a DJ. All who are at their best when there’s a steaming cup of coffee.`,
			para3: `The transparent slots for eyes in each jar create \n an illusion of droopy eyes as the level of the coffee goes down. So when your jar looks sleepy, it’s time to wake up, and get a new refill pack. `
		}
		return(
				<React.Fragment>
					<Header colorUpdate={this.state.logoColorUpdate}/>
					<div className='page-wrapper work-details-page jars' id='wrapper'>
					
						<div className='full-page-wrapper page-header'>
							<div className='banner-img-container'><img src={JarsHero} /></div>
							<WorkPageNavigation prevLink='/cocosoul' nextLink='/rapid-rupee' />
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

							<div className='fold-2'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-10'>
											<div className='project-image-container-list jar-list justify-content-center'>
												<div className='project-image-container rapper'>
													<div>
														<img src={JarRapper}/>
														<span>Rapper</span>
													</div>
												</div>

												<div className='project-image-container hippi'>
													<div>
														<img src={JarHippi}/>
														<span>Hippie</span>
													</div>
												</div>

												<div className='project-image-container biker'>
													<div>
														<img src={JarBiker}/>
														<span>Biker</span>
													</div>
												</div>

												<div className='project-image-container tatto'>
													<div>
														<img src={JarTattoArtist} />
														<span>Tattoo Artist</span>
													</div>
												</div>

												<div className='project-image-container dj'>
													<div>
														<img src={JarDj} />
														<span>DJ</span>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='fold-3'>
							
								<SimpleSlider 
								dots={false} 
								infinite={true} 
								speed={500}
								slidesToShow={1}
								slidesToScroll={1}
								fade={true}
								autoplay={true}
								autoplaySpeed={8}
								pauseOnHover={false}
								slide1={JarSlide1}
								slide2={JarSlide2}
								slide3={JarSlide3}
								slide4={JarSlide4}
								slide5={JarSlide5}
								// slide6={JarSlide6}
								slide7={JarSlide7}
								slide8={JarSlide8}
								slide9={JarSlide9}
								slide10={JarSlide10}
								/>
							</div>

							<div className='fold-4'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-10'>
											<div className='row'>
												<div className='col-md-5'>
													<div className='project-content'>
													<ul>
														

														 <li>
															<h4>Biker:</h4>
															<p>The only thing I like to drink and drive,<br /> 
															is coffee. </p>
														 </li>

														 <li>
															<h4>Tattoo artist: </h4>
															<p>You know what else is permanent? <br /> 
															My love for coffee. </p>
														 </li>

														 <li>
															<h4>DJ:</h4>
															<p>If you need the perfect mix,<br /> 
															I need my coffee fix. </p>
														 </li>

														 <li>
															<h4>Rapper:</h4>
															<p>Look me in the eye. <br /> 
															It’s what I need.<br />
															A pick-me-up: <br /> 
															Coffee in a cup.</p>
														 </li>

														 <li>
															<h4>Hippie:</h4>
															<p>If you don’t want to mess with my chakras,<br /> 
															make sure there’s coffee. <br />
															Peace.</p>
														 </li>

													</ul>
													</div>
												</div>
												<div className='col-md-7'>
													<div className='jar-banners'>
														<div className='project-image-container justify-content-right'>
															<div className='col-md-10'><img src={JarBikerBanner}/></div>
														</div>
														<div className='project-image-container justify-content-right'>
															<div className='col-md-10'><img src={JarTattoArtistBanner}/></div>
														</div>
														<div className='project-image-container justify-content-right'>
															<div className='col-md-10'><img src={JarDjBanner}/></div>
														</div>
														<div className='project-image-container justify-content-right'>
															<div className='col-md-10'><img src={JarRapperBanner}/></div>
														</div>
														<div className='project-image-container justify-content-right'>
															<div className='col-md-10'><img src={JarHippiBanner}/></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='fold-5 video-wrapper'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-8'>
										{/* https://youtu.be/kmH546K4mi0 */}
											<VideoSection videoId='kmH546K4mi0'/>
											{/* <FullScreenVideo/> */}
										</div>
									</div>
								</div>
							</div>


						</div>

						<Footer bgColor='black'>
							<small className='subtitle'>Next project</small>
				        	<Link to='/rapid-rupee' className={`title ${this.state.footerColor}`}data-text="Rapid Rupee">Rapid Rupee
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