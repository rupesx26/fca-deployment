import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { Link } from 'react-router-dom';
import LinkCta from '../Common/Utill/LinkCta'


import Header from '../Header'
import Footer from '../Footer'
// import style from './about.less' 

import founders from '../Public/images/founders.jpg'
import Hero from '../Public/images/Hero.png'
import Hritik from '../Public/images/Hritik.png'
import Humsafar from '../Public/images/Humsafar.png'
import jSW from '../Public/images/jSW.png'
import Kratos from '../Public/images/Kratos.png'
import Marico from '../Public/images/Marico.png'
import RR from '../Public/images/RR.png'
import TBWA from '../Public/images/TBWA.png'
import Thambbi from '../Public/images/Thambbi.png'
import TLC from '../Public/images/TLC.png'
import adgaonkar from '../Public/images/adgaonkar.png'


class Difference extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
            activeText : 'Know More',
            colorUpdate: false,
            footerColor: ''
           
        }
        this.handleKnowMore = this.handleKnowMore.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.cssToMatrix = this.cssToMatrix.bind(this)
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

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

    handleKnowMore() {
        this.setState ({
            isActive: !this.state.isActive,
            activeText : this.state.isActive ? 'Know More' : 'Know Less'
        })
      }

      handleScroll (e) {
        const d = document.getElementById('footer'),
            f = document.getElementById('wrapper'),
            g = document.getElementsByClassName('scroll-content')
            g[0].setAttribute('id', 'scroll')
       
        const getScrollPos = this.cssToMatrix('scroll').split(',').slice(-1)[0].toString().replace(/[^\w\s]/gi, ''),
            getFinalScrollPos = parseInt(getScrollPos),
            elementPos = d.offsetTop
       
        if (getFinalScrollPos === elementPos) {
            console.log('at bottom')
            this.setState({
                colorUpdate: false
            })
        } else {
            this.setState({
                colorUpdate: false
            })
        }
        
      }
   

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
        console.log('here', this.state.colorUpdate)
        return (
            <React.Fragment>
                <Header/>
                <LinkCta router='/connect' position='_fixed _left' linkText='Say Hello' linkClass={`say-hello ${this.state.colorUpdate ? 'invert' : ''}`} />
               <div className='page-wrapper about-page' id='wrapper'>
                    <section className='full-page-wrapper'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-md-8 align-right'>
                                    <div className='col-md-10 col-offset-md-2'>
                                    <h2 className='title'>We keep it simple</h2>
                                    <p className='para'>The first step to solving a problem is to simplify the brief. <br/>
                                        Which is why, each project is headed by a creative lead, <br />
                                        who helps decode the brief and identify the right direction. <br /> Once
                                        the direction is set, a domain expert <br/> helps to understand and
                                        manage the project. All along the way, <br /> our process is a
                                        dialogue, so you too are part of it.</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='full-page-wrapper bg-color-yellow'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-md-8'>
                                    <h2 className='title'>Design First</h2>
                                    <div className='col-md-9 no-gutters-left'>
                                        <p className='para'>Design is the face of every object and is the first point of
                                            interaction. Whether it’s traditional advertising, app interface,
                                            branding, packaging or product. So, our approach is always
                                            design-first. When you voice a business problem to us,
                                            our minds race to find the best design-led solutions.</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                     </section>
                     <section className='full-page-wrapper our-services-wrapper'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-md-8'>
                                    <h2 className='title'>What we do</h2>
                                        <div className='our-services'>
                                            <div className='row no-gutters'>
                                                <div className='col-md-4'>
                                                    <div className='list-wrapper'>
                                                        <h3 className='title'>Design</h3>
                                                        <ul>
                                                            <li>Branding & Strategy</li>
                                                            <li>Packaging Design</li>
                                                            <li>Product Design</li>
                                                            <li>UX/UI</li>
                                                        </ul>
                                                    </div>    
                                                </div>
                                                
                                                <div className='col-md-4'>
                                                    <div className='list-wrapper'>
                                                        <h3 className='title'>Digital</h3>
                                                        <ul>
                                                            <li>Content Creation</li>
                                                            <li>Social Media Strategy</li>
                                                            <li>Digital Planning</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <div className='col-md-4'>
                                                    <div className='list-wrapper'>
                                                        <h3 className='title'>Studio</h3>
                                                        <ul>
                                                            <li>CGI & Retouching</li>
                                                            <li>2D & 3D Modeling</li>
                                                            <li>Artworks</li>
                                                            <li>Adaptation</li>
                                                            <li>Language Translation <span>(All Indian & foreign)</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='full-page-wrapper bg-color-gray our-partners-wrapper'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-md-9'>
                                    <div className='col-md-12'>
                                    <div className='our-partners align-center'>Our Partners</div>
                                    <div className='partner-wrapper'>
                                        <div className='box-row'>
                                            <div className='box-cell'></div>
                                            <div className='box-cell'><img src={Marico} /></div>
                                            <div className='box-cell'><img src={RR} /></div>
                                            <div className='box-cell'><img src={TLC} /></div>
                                            <div className='box-cell'></div>
                                        </div>
                                        <div className='box-row'>
                                            <div className='box-cell jsw'><img src={jSW}/></div>
                                            <div className='box-cell'><img src={Hritik}/></div>
                                            <div className='box-cell'><img src={Thambbi}/></div>
                                            <div className='box-cell'><img src={Kratos}/></div>
                                            <div className='box-cell'><img src={Hero}/></div>
                                        </div>

                                        <div className='box-row'>
                                            <div className='box-cell'></div>
                                            <div className='box-cell tbwa'><img src={TBWA}/></div>
                                            <div className='box-cell adgaonkar'><img src={adgaonkar}/></div>
                                            <div className='box-cell'><img src={Humsafar}/></div>
                                            <div className='box-cell'></div>
                                        </div>


                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='full-page-wrapper founders-wrapper'>
                        <div className='bg-color-while'>
                            <div className='container'>
                                <div className='row'>
                                   <div className='col-md-8 col-offset-md-2'>
                                        <div className='founders'>
                                            <img src={founders}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-color-black full-width-height'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                   <div className='col-md-8'>
                                        <div className={`pannel ${this.state.isActive ? 'active': ''}`}>
                                            <p>Vasanth Joshua and Colin Myers started FINDCreative Avenues LLP in 2017. They believe that flexibility of creative collaboration to solve a problem, is the future of the business.</p>
                                            <div className='hidden-content'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='detail-wrap'>
                                                            <div className='name'>Vasanth Joshua</div>
                                                            <div className='bio'>
                                                                <p>In his 14-year advertising journey, Josh has worked 
                                                                    with some of the biggest agencies: Lowe, JWT, DDB 
                                                                    Mudra, Leo Burnett, McCann and Sideways. To add to 
                                                                    his credit, he won Young Lions Cannes – India in 
                                                                    2012. He also featured in The Economic Times list of 
                                                                    India’s Top 30 Creatives Under 30, in 2016. He was 
                                                                    among the 60 top creatives from across the world 
                                                                    chosen by London Awards, to participate in their 
                                                                    judging and awards process. His design work too has 
                                                                    won awards across the globe like Cannes, One Show, 
                                                                    Spikes and D&AD. He strongly believes that an idea is 
                                                                    the core of the creative universe.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-6'>
                                                        <div className='detail-wrap'>
                                                            <div className='name'>Colin Myers</div>
                                                            <div className='bio'>
                                                                <p>Colin graduated from Leeds University Business School with a Master’s degree 
                                                                in Management in 2013. After which began his exciting journey in advertising. 
                                                                He has worked across categories and brands, like Marico, Park Avenue, Diageo, 
                                                                Aegon and Quikr. Being a people’s person, he is quick to understand clients' 
                                                                business needs, in order to navigate them through the right creative strategy. 
                                                                He's also a long-suffering Manchester United fan who loves to end his day with a good 
                                                                game of football.</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                           <div onClick={this.handleKnowMore} className={`control ${this.state.isActive ? 'active' : null}`} >{this.state.activeText}</div>
    
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <Footer>
                        <small className='subtitle'>Interested in more?</small>
                        <Link to='/work' className={`title invert ${this.state.footerColor}`} data-text='view work'>View Work
                          <div className='footer-arrow'>
                              <div className='chevron'></div>
                              <div className='chevron'></div>
                              <div className='chevron'></div>
                          </div>
                      </Link>
                    </Footer>
               </div>

                 
                
            </React.Fragment>
          );
    }
}
 
export default Difference;