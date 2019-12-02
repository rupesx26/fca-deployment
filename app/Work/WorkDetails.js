import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';

import Header from '../Header'
import Footer from '../Footer'

// import style from './work.less'

class WorkDetails extends Component { 


	componentDidMount() {
        Scrollbar.init(document.querySelector('.page-wrapper'));
    }

	render() {
		return(
				<React.Fragment>
					<Header />
					<div className='page-wrapper work-details-page'>
						
						<div className='full-page-wrapper page-header'>

						</div>
						
						<div className='full-page-wrapper work-content'>
							<div className='container'>
								<div className='row justify-content-center no-gutters'>
									<div className='col-md-8'>
										<div className='work-title'>
											<h1>Nihar Gold</h1>
										</div>

										<div className='work-description'>
											<div className='row no-gutters'>
												<div className='col-md-5 no-gutters project-initial'>
													<ul>
														<li>
															<label>Client</label>
															<span className='client-name'>Lorem ipsum dolor</span>
														</li>
														<li>
															<label>Location</label>
															<span className='client-name'>Lorem ipsum</span>
														</li>
														<li>
															<label>Brief</label>
															<span className='client-name'>
																Lorem ipsum dolor sit amet, consectetur 
																adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. 
																Ut enim ad minim veniam, quis nostrud exercitation 
																ullamco laboris nisi ut aliquip ex ea commodo 
																consequat.
															</span>
														</li>

														<li>
															<label>Team</label>
															<span className='client-name'>
																Lorem ipsum dolor sit amet, consectetur 
																adipiscing elit, sed do eiusmod tempor
																 incididunt ut labore et dolore magna aliqua. 
																Ut enim ad minim veniam, quis nostrud exercitation 
															</span>
														</li>

													</ul>
												</div>
													<div className='col-md-1'></div>
												<div className='col-md-6 project-summary'>
													<p>
														Lorem ipsum dolor sit amet, consectetur 
														adipiscing elit, sed do eiusmod tempor
														 incididunt ut labore et dolore magna aliqua. 
														Ut enim ad minim veniam, quis nostrud exercitation 
													</p>
													<p>
														Lorem ipsum dolor sit amet, consectetur 
														adipiscing elit, sed do eiusmod tempor
														 incididunt ut labore et dolore magna aliqua. 
														Ut enim ad minim veniam, quis nostrud exercitation 
													</p>

													<a href='' className='launch-project'>Launch Project</a>
												</div>
											</div>
										</div>

									</div>
								</div>

								<div className='row justify-content-center no-gutters'>
									<div className='col-md-8'>
										<div className='project-image-container'>

										</div>
									</div>
								</div>


								<div className='row justify-content-center no-gutters'>
									<div className='col-md-8'>
										<div className='project-content'>
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
									</div>
								</div>


								<div className='row justify-content-center no-gutters'>
									<div className='col-md-8'>
										<div className='project-image-container'>

										</div>
									</div>
								</div>


								<div className='row justify-content-center no-gutters'>
									<div className='second-fold'>
										<div className='col-md-8'>
											<div className='project-content align-right'>
												
											</div>
										</div>

									</div>
								</div>


							</div>
						</div>

						<Footer bgColor='black'>
							<small className='subtitle'>Got a project?</small>
				        	<div className='title' style={{color: '#ffe357'}}>let's talk</div>
				        </Footer>
					</div>
				</React.Fragment>
			)
	}
}

export default WorkDetails