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

import Hero from '../Public/images/rapid-rupee/rapid-rupee-hero.png'
import RapidRupeeMobileOne from '../Public/images/rapid-rupee/rapid-rupee-mobile-1.png'
import RapidRupeeMobileTwo from '../Public/images/rapid-rupee/rapid-rupee-mobile-2.png'

import RapidRupeeComuteOne from '../Public/images/rapid-rupee/rapid-rupee-img-1.jpg'
import RapidRupeeComuteTwo from '../Public/images/rapid-rupee/rapid-rupee-img-2.jpg'
import RapidRupeeComuteThree from '../Public/images/rapid-rupee/rapid-rupee-img-3.jpg'
import RapidRupeeComuteFour from '../Public/images/rapid-rupee/rapid-rupee-img-4.jpg'
import RapidRupeeComuteFive from '../Public/images/rapid-rupee/rapid-rupee-img-5.jpg'
import RapidRupeeComuteSix from '../Public/images/rapid-rupee/rapid-rupee-img-6.jpg'
import RapidRupeeComuteSeven from '../Public/images/rapid-rupee/rapid-rupee-img-7.jpg'




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
		const heroFold2Height = document.querySelector('.fold-2').offsetHeight,
			foldSolicColorSecHeight = heroFold2Height / 1.5
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
		
		const outers = document.querySelectorAll('.fold-3-img')

		for (let i = 0; i < outers.length; i++) {
			const child = outers[i].childNodes[0].childNodes
			const fold3Animation = new TimelineLite()
			fold3Animation
					.fromTo(child, 1.5, {y: 20,  scale: 1.2, clipPath: 'polygon(0% 0%, 0% 10%, 0% 100%, 0% 100%)'}, {y: 50, scale:1, clipPath : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  ease: Power4.easeOut},'-=.95' )
					
				new ScrollMagic.Scene({triggerElement: outers[i], reverse: false, scrollEase: 0.1, // scroll speed
					maxOffset: 500})
					//.addIndicators() // add indicators (requires plugin)
					.setTween(fold3Animation)
					.addTo(this.controller)	
					
		}

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
		const {foldSolicColorSec, dimensions} = this.state
		const projectSummaryContent = {
			workTitle: `Rapid Rupee`,
			client: `Rapid Rupee`,
			project: `Branding Strategy & Communication`,
			brief: `Build the brand strategy & design communication strategy`,
			para1: `Rapid Rupee is an online money-lending app which provides quick and convenient personal loans. \n We designed its logo, keeping in mind that we needed to cue in security, optimism and progress. \n Being a brand introducing itself to India, we also designed a detailed branding structure for it. One that encapsulates brand identity, character and tone of voice - a holy grail that can guide all future brand communication.`,
			para2: ` `,
		}
		return(
				<React.Fragment>
					
					<Header colorUpdate={this.state.logoColorUpdate}/>
					<div className='page-wrapper work-details-page rapid-rupee' id='wrapper'>
						<div className='full-page-wrapper page-header'>
							<div className='banner-img-container'><img src={Hero} /></div>
							<WorkPageNavigation prevLink='/sussegado-coffee' nextLink='/socranos-gravity' />
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
							

							<div className='fold-2' ref={el => (this.container = el)}>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-11 no-gutters'>
												<div className='project-image-container img-grid row'>
													<div className='col-md-6 no-gutters'>
														<div className='project-image-container col-md-9 justify-content-left'>
															<img src={RapidRupeeMobileOne}/>
														</div>
													</div>
													
													<div className='col-md-6 no-gutters'>
														<div className='project-image-container right-img col-md-9 justify-content-right'>
															<img src={RapidRupeeMobileTwo}/>
														</div>
													</div>
												</div>
										</div>
									</div>
									<div className='diagonal-bg' style={{'height': foldSolicColorSec}}></div>

								</div>
							</div>	

							<div className='fold-3'>
								<div className='container'>
									<div className='row justify-content-center no-gutters'>
										<div className='col-md-8'>
											<div className='project-content'>
												<div className='col-md-6 no-gutters' style={{display:'none'}}>
													<p>Lorem ipsum dolor sit amet, consectetur 
													adipiscing elit, sed do eiusmod tempor
													incididunt ut labore et dolore magna aliqua. 
													Ut enim ad minim veniam, quis nostrud exercitation 
													ullamco laboris nisi ut aliquip ex ea commodo 
													consequat.</p>
												</div>
											</div>



											<div className='project-image-container justify-content-left fold-3-img'>
													<div className='col-md-6 no-gutters'>
														<img src={RapidRupeeComuteOne}/>
													</div>
												</div>

												<div className='project-image-container justify-content-right fold-3-img'>
													<div className='col-md-6 no-gutters'>
														<img src={RapidRupeeComuteTwo}/>
													</div>
													
												</div>

												<div className='project-image-container justify-content-left fold-3-img'>
													<div className='col-md-6 no-gutters'>
														<img src={RapidRupeeComuteThree}/>
													</div>
												</div>

												<div className='project-image-container justify-content-right fold-3-img'>
													<div className='col-md-6 no-gutters'>
														<img src={RapidRupeeComuteFour}/>
													</div>
												</div>

												<div className='project-image-container justify-content-left fold-3-img'>
													<div className='col-md-6 no-gutters'>
														<img src={RapidRupeeComuteFive}/>
													</div>
												</div>

												<div className='project-image-container justify-content-right fold-3-img'>
													<div className='col-md-6 no-gutters'>
														<img src={RapidRupeeComuteSix}/>
													</div>
												</div>


												<div className='project-image-container justify-content-left fold-3-img'>
													<div className='col-md-6 no-gutters'>
														<img src={RapidRupeeComuteSeven}/>
													</div>
												</div>


										</div>
									</div>
								</div>
							</div>	
						
						</div>

						<Footer bgColor='black'>
							<small className='subtitle'>Next project</small>
				        	<Link to='/socranos-gravity' className={`title ${this.state.footerColor}`} data-text="Socranos Gravity">Socranos Gravity
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