import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import WorkPageNavigation from '../Common/Utill/navigation'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
// import style from './work.less'

import ScrollMagic from 'scrollmagic';
import { TweenMax, CSSPlugin, TweenLite, TimelineLite, Linear, Power4, Power0 } from 'gsap/all';
import 'imports-loader?define=>false!debug.addIndicators';
import 'imports-loader?define=>false!animation.gsap';

import Header from '../Header'
import Footer from '../Footer'
import NiharHero from '../Public/images/nihar-gold/nihar-gold-tile-shw.png'
import NiharGoldFront from '../Public/images/nihar-gold/nihar-bottle-front-min.png'
import GoldLogo from '../Public/images/nihar-gold/gold-logo-min.png'
import CoconutOilLogo from '../Public/images/nihar-gold/coconut-oil-logo-min.png'
import NiharGoldBack from '../Public/images/nihar-gold/nihar-bottle-back-min.png'


  
//const niharGoldFrontHeight = document.querySelector('.nihar-gold-front').offsetHeight
class WorkDetails extends Component { 
	
	constructor(props) {
		
		super(props)
		this.state = {
			dimensions: null,
			coconutOilLogoPos : '',
			niharGoldLogoPos: '',
			niharGoldBackPos: '',
			foldSolicColorSec: '',
			sectionHeight: '',
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
		
		const niharGoldFrontHeight = document.querySelector('.nihar-gold-front').offsetHeight
		const coconutOilLogoPos = niharGoldFrontHeight * 1.15,
			niharGoldLogoPos = niharGoldFrontHeight / 4.5,
			niharGoldBackPos = niharGoldFrontHeight / 1.65,
			sectionHeight = niharGoldFrontHeight * 2,
			foldSolicColorSecHeight = sectionHeight / 1.8
			
		  this.setState({
			dimensions: {
				width: this.container.offsetWidth,
				height: this.container.offsetHeight,
			  },
			coconutOilLogoPos : coconutOilLogoPos,
			niharGoldLogoPos : niharGoldLogoPos,
			niharGoldBackPos : niharGoldBackPos,
			foldSolicColorSec : foldSolicColorSecHeight + 'px',
			sectionHeight : sectionHeight + 'px'
		  })

		  const classArray = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const random = classArray[Math.floor(Math.random() * classArray.length)];

        this.setState({
            footerColor: random
		})
		
		this.pageAmimation()
	}

	pageAmimation() {

	//	TweenMax.to('.banner-img-container', 1.5, {autoAlpha: 0.1, scale: 1.5, y: 0, ease:Power2.easeOut})

		const animation = new TimelineLite()
		animation
		.fromTo('.banner-img-container', .7, {y:0}, {y:-100, ease: Power0.ease}, '-=1')

		new ScrollMagic.Scene({triggerElement: "#even0", offset: 50  })
	  .setTween(animation)
	  .addTo(this.controller)
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
		const { dimensions, coconutOilLogoPos, niharGoldLogoPos, niharGoldBackPos, sectionHeight, foldSolicColorSec } = this.state;
		return(
				<React.Fragment>
					<Header colorUpdate={this.state.logoColorUpdate}/>
					<div className='page-wrapper work-details-page nihar-gold' id='wrapper'>
						
						{/** work header start */}
						<div className='full-page-wrapper page-header'>
							<div className='banner-img-container'>
								<LazyLoadImage
									alt='img'
									effect="blur"
									src={NiharHero} />
							</div>
							<WorkPageNavigation prevLink='/hrithik-roshan' nextLink='/kate-spade' />
							
						</div>
						{/** work header end */}
						
						
						<div className='full-page-wrapper work-content'>
							{/** work 1st fold content start */}
							<div className="fold-1" id='fold-1'>
								<div className="container">
									<div className="row justify-content-center no-gutters">
									<div className="col-md-8">
										<div className="work-title">
										<h1> Nihar Gold</h1>
										</div>

										<div className="work-description">
										<div className="row no-gutters">
											<div className="col-md-5 no-gutters project-initial">
											<ul>
												<li>
												<label>Client</label>
												<span className="client-name">Marico, Nihar Gold</span>
												</li>
												<li>
												<label>Project</label>
												<span className="client-name">Packaging Desgin</span>
												</li>
												<li>
												<label>Brief</label>
												<span className="client-name">
												Design a label for Nihar Gold for Bihar market
												</span>
												</li>

												
											</ul>
											</div>
											<div className="col-md-1"></div>
											<div className="col-md-6 project-summary">
											<p>Nihar coconut oil is the market leader in East India, especially in Bihar. They wanted to launch a premium sub-brand called Nihar Gold. We partnered them with packaging design, of the bottle as well as the jar. </p>
											<p>Our approach was to create something new without losing the familiarity built by the brand over so many years. The coconut halves and the hair silhouette announce that it’s a Nihar coconut hair oil product even from a distance. While the parallel gold lines pop out through the signature Nihar green shade of the pack, to say that it’s a notch above their regular buy. </p>
											{/* <a href="" className="launch-project">Launch Project</a> */}
											</div>
										</div>
									</div>
											</div>
										</div>
									</div>
								</div>


							{/** work 1st fold content end */}

							{/** work 2nd fold content start */}

							

							<div className='fold-2' style={{height: sectionHeight}}>
								<div className='container'>

									<div className='row justify-content-center no-gutters'>
										<div className='col-md-8' style={{'position': 'relative'}}>
											<div className='img-container pos-absolute nihar-gold-front' ref={el => (this.container = el)}>
											<LazyLoadImage
												alt='img'
												effect="blur"
												src={NiharGoldFront}
												/>
											{/* <img src={NiharGoldFront} /> */}
											</div>
											<div className='img-container pos-absolute nihar-gold-logo' style={{'top': niharGoldLogoPos + 'px'}}>
												{/* <img src={GoldLogo} /> */}

												<LazyLoadImage
												alt='img'
												effect="blur"
												src={GoldLogo} 
												/>
											</div>

											<div className='img-container pos-absolute  coconut-oil-logo' style={{'top': coconutOilLogoPos + 'px'}}>
												{/* <img src={CoconutOilLogo} /> */}

												<LazyLoadImage
												alt='img'
												effect="blur"
												src={CoconutOilLogo} 
												/>
												
											</div>

											<div className='img-container pos-absolute nihar-gold-back' style={{'top': niharGoldBackPos}}>
												{/* <img src={NiharGoldBack} /> */}

												<LazyLoadImage
												alt='img'
												effect="blur"
												src={NiharGoldBack} 
												/>
											</div>
											
										</div>
										<div className='fold-2-bg' style={{height: foldSolicColorSec}}></div>
									</div>			
								</div>
							</div>
							{/** work 2nd fold content end */}

							{/** work 3rd fold content start */}
								<div className='fold-3 none'>
									<div className='container'>
										<div className='row justify-content-center no-gutters'>
											<div className='col-md-8'>
												<LazyLoadComponent>
												<div className='project-content'>
													<div className='col-md-6 no-gutters'>
														<p>Lorem ipsum dolor sit amet, consectetur 
														adipiscing elit, sed do eiusmod tempor
														incididunt ut labore et dolore magna aliqua. 
														Ut enim ad minim veniam, quis nostrud exercitation 
														ullamco laboris nisi ut aliquip ex ea commodo 
														consequat.</p>
													</div>
												</div>
												</LazyLoadComponent>
											</div>
										</div>
									</div>
								</div>
							{/** work 3rd fold content end */}
							
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

export default WorkDetails