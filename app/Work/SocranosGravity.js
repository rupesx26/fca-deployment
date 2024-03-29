import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import WorkPageNavigation from '../Common/Utill/navigation'

import Header from '../Header'
import Footer from '../Footer'

// import style from './work.less'
import ProjectPageSummary from '../Common/Utill/ProjectPageSummary'

import HeroBanner from '../Public/images/gravity/hero-background.jpg'
import GravityIntro from '../Public/images/gravity/background.jpg'
import GravityText from '../Public/images/gravity/gravity-text.png'
import GravityBar from '../Public/images/gravity/gravity-bars-new.png'
import GravityBarBox from '../Public/images/gravity/gravity-barbox.jpg'

import ScrollMagic from 'scrollmagic';
import { TweenMax, CSSPlugin, TweenLite, TimelineLite, Linear, Power4 } from 'gsap/all';
import 'imports-loader?define=>false!debug.addIndicators';
import 'imports-loader?define=>false!animation.gsap';


class SocranosGravity extends Component { 

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

		const gravityBarBox = new TimelineLite()
		gravityBarBox
		.fromTo('.gravity-bar-box', 1.2, {opacity: 0, x:-100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=.90')
		.fromTo('.gravity-bar-box-text', 1.2, {opacity: 0, x:100 }, {x:0, opacity: 1, ease: Power4.easeOut}, '-=.90')

		new ScrollMagic.Scene({triggerElement: ".fold-3", reverse: false, triggerHook: .4})
		  .setTween(gravityBarBox)
		  //.addIndicators()
		  .addTo(this.controller);

		  const gravityIntro = new TimelineLite()
			  gravityIntro
			  .fromTo('.gravity-intro', 1.3, {opacity: 0, y:100}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=.90') 
			  .fromTo('.gravity-text', 1.1, {opacity: 0, y:-300}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=.90') 
			new ScrollMagic.Scene({triggerElement: ".fold-2", triggerHook: .4})
			  .setTween(gravityIntro)
			  //.addIndicators()
			  .addTo(this.controller);

			  const gravityIntroBar = new TimelineLite()
			 	 gravityIntroBar
			  .fromTo('.gravity-bar', 1.1, {opacity: 0, y:300}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=.90') 
			  new ScrollMagic.Scene({triggerElement: ".gravity-bar"})
			  .setTween(gravityIntroBar)
			  //.addIndicators()
			  .addTo(this.controller);
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
			workTitle: `Socranos Gravity`,
			client: `Socranos`,
			project: `Strategy & Packaging Design`,
			brief: `Strategize & design a chocolate for the Gujarat market`,
			para1: `Having imported chocolates for many years, Kratos Overseas decided to enter the confectionary market with its own chocolate brand-Socranos. The company discovered that the Gujarat market loved Cadbury Fuse, but abstained from picking it up because of its high price point. \n As a solution to this, Gravity was born. A chocolate that tastes like Fuse, but is a lot more affordable.`,
			para2: `Keeping this in mind, our strategy was to carefully create packaging design with the familiar memory structures already created by Fuse.`,
			para3: ` `
		}
		return(
				<React.Fragment>
					<Header colorUpdate={this.state.logoColorUpdate}/>
					<div className='page-wrapper work-details-page gravity' id='wrapper'>
						<div id='banner' className='full-page-wrapper page-header bg' style={{backgroundImage: `url(${HeroBanner})`}}>
							<WorkPageNavigation prevLink='/rapid-rupee' nextLink='/hrithik-roshan' />
						</div>
						
						<div className='full-page-wrapper work-content'>
							<div className='container'>
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
									<div className='row justify-content-center no-gutters gravity-intro bg' style={{backgroundImage: `url(${GravityIntro})`}}>
										<div className='col-md-10'>
											<div className='project-image-container'>
												<div className='gravity-text'>
													<img src={GravityText} className='img' />
												</div>

												<div className='gravity-bar'>
													<img src={GravityBar} className='img' />
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='fold-3'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-10'>
											<div className='row'>
												<div className='col-md-5'>
													<div className='project-image-container gravity-bar-box'>
														<img src={GravityBarBox} className='img' />
													</div>
												</div>
												<div className='col-md-2'></div>
												<div className='col-md-4 gravity-bar-box-text'>
													<p>This worked wonders for the brand. <br /> How do we know?<br /> Well, this new design was the only communication that the Client has relied on for sales (over 5 lakh and counting).  Now, isn’t that sweet? </p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<Footer bgColor='black'>
							<small className='subtitle'>Next project</small>
				        	<Link to='/hrithik-roshan' className={`title ${this.state.footerColor}`} data-text="Hrithik Roshan's">Hrithik Roshan's
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

export default SocranosGravity