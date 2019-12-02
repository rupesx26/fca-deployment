import React, {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'

import style from './careers.less'

class Job1 extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className='page-wrapper careers-page job-description-wrapper'>
                    <section className='full-page-wrapper'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-md-8'>
                                    <div className='col-md-12'>
                                        <h1>Look at this! It's a full time job.</h1>

                                        <div className='job-intro'>
                                            <div className='col-md-9'>
                                                <p>We're looking for a cross between David Bowie and Lady Gaga for their Creative Director - Freelance or full time position in Mumbai, India. Must love print and pixels.</p>
                                            </div>
                                        </div>
                                        
                                        <div className='job-about'>
                                            <div className='col-md-10'>
                                                <h5>About</h5>
                                                <p>As a Visual Designer, you’ll be responsible for taking design projects from brief to completion by partnering closely with our Marketing team. To be successful in this role, you will collaborate cross-functionally with User Acquisition, CRM and other teams on a daily basis in order to work on digital marketing assets through to physical marketing assets like in-theater posters and Out-Of-Home advertising. This is a great career opportunity for a passionate designer eager to work on a wide range of projects within a fast-growing company. This role reports to the Creative Director.</p>
                                            </div>
                                        </div>

                                        <div className='job-role'>
                                            <h5>Here's What You'll Do: </h5>
                                            <ul>
                                                <li> Concept and execute assets for paid and owned digital channels (banners and social) </li>
                                                <li> Concept and execute print materials from billboards, posters and leaflets and newsletters </li>
                                                <li> Work closely with the Marketing team to create strong concepts from the initial briefing </li>
                                                <li> Create and own innovative ideas to drive highest performing campaigns from formal & informal briefs </li>
                                                <li> Understand design principles and be plugged in to the latest design trends and new technologies </li>
                                                <li> Work with CRM team to strategize, concept and design compelling email campaigns </li>
                                                <li> Production design work for print and web.</li>
                                            </ul>       
                                        </div>

                                        <div className='job-requirements'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='title'>Experience</div>
                                                    <div className='details'>1-3 years</div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='title'>Skills</div>
                                                    <div className='details'>2D, Adobe Illustrator, Adobe Photoshop, 
Art Direction, Sketch</div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='apply-wraper'>
                                            <a href='' className='apply-button'>Apply now</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>   

                    <Footer/>

                </div>
            </React.Fragment>
        )
    }
}

export default Job1