import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import VideoSection from '../Common/Utill/VideoSection'
import WorkPageNavigation from '../Common/Utill/navigation'
import ProjectPageSummary from '../Common/Utill/ProjectPageSummary'
import ScrollMagic from 'scrollmagic';
import { TweenMax, CSSPlugin, TweenLite, TimelineLite, Linear, Power4 } from 'gsap/all';
import 'imports-loader?define=>false!debug.addIndicators';
import 'imports-loader?define=>false!animation.gsap';

import Header from '../Header'
import Footer from '../Footer'

import HeroBanner from '../Public/images/nihar-gold/hero-background.jpg'
import GoldLogo from '../Public/images/nihar-gold/gold-logo-min.png'
import Ribbon from '../Public/images/nihar-gold/ribbon.jpg'
import NiharGoldBack from '../Public/images/nihar-gold/nihar-bottle-back.jpg'
import NiharGoldFront from '../Public/images/nihar-gold/nihar-bottle-front.jpg'
import NiharGoldJar from '../Public/images/nihar-gold/nihar-gold-jar.jpg'

// import style from './work.less'

class NiharGold extends Component { 
	
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
		const niharProductAmination = new TimelineLite()
		niharProductAmination
		.fromTo('.nihar-gold-logo', 2, {opacity: 0, y:100}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=1')
		.fromTo('.nihar-front', 1.5, {opacity: 0, x:100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=.20')
		.fromTo('.nihar-back', 1.5, {opacity: 0, x:-100}, {x:0, opacity: 1, ease: Power4.easeOut}, '-=.90')
		

		new ScrollMagic.Scene({triggerElement: ".fold-2", reverse: false, triggerHook: .3})
		  .setTween(niharProductAmination)
		  //.addIndicators()
		  .addTo(this.controller);

		const niharJar = new TimelineLite()
		niharJar
		.fromTo('.nihar-gold-jar', 2, {opacity: 0, y:100}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=.90')
		.fromTo('.nihar-gold-jar-text', 2, {opacity: 0, y:100}, {y:0, opacity: 1, ease: Power4.easeOut}, '-=.90')

		new ScrollMagic.Scene({triggerElement: ".fold-3", reverse: false, triggerHook: .4})
		  .setTween(niharJar)
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

	render() {
		const projectSummaryContent = {
			workTitle: `Nihar Gold`,
			client: `Marico, Nihar Gold`,
			project: `Packaging Design`,
			brief: `Design a label for Nihar Gold for Bihar market`,
			para1: `Nihar coconut oil is the market leader in East India, especially in Bihar. They wanted to launch a premium sub-brand called Nihar Gold. For this, we partnered them with packaging design.`,
			para2: `Our approach was to create something new without losing the familiarity built by the brand over \n so many years. The coconut halves and the hair silhouette announce that it’s a Nihar coconut hair oil product from a mile.  We added a pop of parallel gold streaks to convey that this is a premium sub-brand.`,
			para3: ` `
		}

		return(
			<React.Fragment>
				<Header colorUpdate={this.state.logoColorUpdate}/>
				<div className='page-wrapper work-details-page nihar-gold' id='wrapper'>
					<div id='banner' className='full-page-wrapper page-header bg' style={{backgroundImage: `url(${HeroBanner})`}}>
						<WorkPageNavigation prevLink='/hrithik-roshan' nextLink='/kate-spade' />
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

						<div className="fold-2">
							<div className="container">
								<div className="row justify-content-center no-gutters nihar-intro">
								<div className="nihar-ribbon-bg" style={{backgroundImage:`url(${Ribbon})`}}>
									<div className="nihar-gold-logo align-center">
									<img src={GoldLogo} />
									</div>
									<div className="row justify-content-center no-gutters nihar-product">
									<div className="col-md-10">
										<div className="row">
										<div className="col-md-5 nihar-front">
											<img src={NiharGoldFront}/>
										</div>
										<div className="col-md-2"></div>
										<div className="col-md-5 nihar-back">
											<img src={NiharGoldBack}/>
										</div>
										</div>
									</div>
									<div className="clear"></div>
									</div>
								</div>
								</div>
							</div>
						</div>


						<div className='fold-3'>
							<div className='container'>
								<div className='row justify-content-center no-gutters nihar-product-details'>
									<div className='col-md-10'>
										<div className='row'>
											<div className='col-md-5 nihar-gold-jar'>
												<img src={NiharGoldJar} />
											</div>
											<div className='col-md-2'></div>
											<div className='col-md-5 text nihar-gold-jar-text'>
												<p>Along with the bottle design, we also designed the jar packaging. These jars are a boon especially <br />
	during the winters because their wide mouths make it easy to scoop out the oil which tends to <br />
	solidify when the temperature drops.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
								

					</div>
					<Footer bgColor='black'>
						<small className='subtitle'>Next project</small>
						<Link to='/kate-spade' className={`title ${this.state.footerColor}`} data-text="Kate Spade">Kate Spade
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

export default NiharGold