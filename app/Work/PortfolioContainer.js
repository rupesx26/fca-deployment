import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ScrollMagic from 'scrollmagic';
import { TweenMax, CSSPlugin, TweenLite, TimelineLite, Linear, Power4, Power0 } from 'gsap/all';
import 'imports-loader?define=>false!debug.addIndicators';
import 'imports-loader?define=>false!animation.gsap';

// import 'debug.addIndicators';
// import { Controller, Scene } from 'react-scrollmagic';
// import { Tween, Timeline } from 'react-gsap';

import style from './work.less'

import NiharGoldTile from '../Public/images/work/nihar-gold.jpg'
import HrithikRoshanTile from '../Public/images/work/hrx.jpg'
import SussegadoCoffeeTile from '../Public/images/work/sussegado.jpg'
import HeroTalkiesTile from '../Public/images/work/Hero-Talkies-Tile.jpg'
import RapidRupeeTile from '../Public/images/work/rapid-rupee-1.jpg'
import KateSpadeTile from '../Public/images/work/kate-spade.jpg'
import GravityTile from '../Public/images/work/gravity.jpg'
import CocoSoulTile from '../Public/images/work/coco-soul.jpg'
import ThambbiTile from '../Public/images/work/Thambbi-Tile.jpg'


class PortfolioContainer extends Component { 
	constructor(props) {
		super(props)

		this.controller = new ScrollMagic.Controller()
    this.pageAmimation = this.pageAmimation.bind(this)
    
    this.groupBy = this.groupBy.bind(this)
    this.arrayFromObject = this.arrayFromObject.bind(this)
		this.state = {
      wrapperHeight: '500px',
      boxPosition: 0,
			data : [

                {
                  "_id": "5d028e26ac8e0a463a9b43ee",
                  "color": "#fff",
                  "title": "Hrithik Roshan's",
                  "subtitle": "Graphic Novel",
                  "row": 0,
                  "route": 'hrithik-roshan',
                  "tile": HrithikRoshanTile
                },
                {
                  "_id": "5d028e26122cf11b4a5d3394",
                  "color": "#fff",
                  "title": "Nihar Gold",
                  "subtitle": "Packaging Design",
                  "row": 0,
                  "route": 'nihar-gold',
                  "tile" : NiharGoldTile
                },
                {
                  "_id": "5d028e26e12dcaecfb1d6b58",
                  "color": "#fff",
                  "title": "Kate Spade",
                  "subtitle": "Digital Audit",
                  "row": 1,
                  "route": 'kate-spade',
                  "tile" : KateSpadeTile
                },
                {
                  "_id": "5d028e26e12dcaecfb1d6b58",
                  "color": "#fff",
                  "title": "Thambbi",
                  "subtitle": "Branding & Communication Design",
                  "row": 1,
                  "route": 'thambbi',
                  'tile' : ThambbiTile
                },
                {
                  "_id": "5d028e2634c9c788e3c65b1f",
                  "color": "#fff",
                  "title": "HERO Talkies",
                  "subtitle": "Brand Design",
                  "row": 2,
                  "route": 'hero-talkies',
                  "tile" : HeroTalkiesTile
                },
                {
                  "_id": "5d028e2617383507ab3dc123",
                  "color": "#fff",
                  "title": "Coco Soul",
                  "subtitle": "Digital Content",
                  "row": 2,
                  "route": 'cocosoul',
                  'tile' : CocoSoulTile
                },
                {
                  "_id": "5d028e26e2818d216e74f5c0",
                  "color": "#fff",
                  "title": "Sussegado",
                  "subtitle": "Product & Package Design",
                  "row": 3,
                  "route": 'sussegado-coffee',
                  "tile" : SussegadoCoffeeTile
                },
                {
                  "_id": "5d028e2617383507ab3dc123",
                  "color": "#fff",
                  "title": "Rapid Rupee",
                  "subtitle": "Brand Strategy & Communication",
                  "row": 3,
                  "route": 'rapid-rupee',
                  "tile": RapidRupeeTile
                },
                {
                  "_id": "5d028e26122cf11b4a5d3394",
                  "color": "#fff",
                  "title": "Socranos Gravity",
                  "subtitle": "Strategy & Packaging Design",
                  "row": 4,
                  "route": 'socranos-gravity',
                  'tile' : GravityTile
                }
                // {
                //   "_id": "5d028e26122cf11b4a5d3394",
                //   "color": "#f65a0f",
                //   "title": "The Laughing Cow",
                //   "subtitle": "Communication & Package Design",
                //   "row": 1,
                //   "route": 'the-laughing-cow'
                // },

                // {
                //   "_id": "5d028e26122cf11b4a5d3394",
                //   "color": "#ffc4c4",
                //   "title": "Nihar Almond",
                //   "subtitle": "Product & Packaging Design",
                //   "row": 5,
                //   "route": 'nihar-shanti-almond'
                // },
                // {
                //   "_id": "5d028e26122cf11b4a5d3394",
                //   "color": "#f65a0f",
                //   "title": "Nihar Shanti",
                //   "subtitle": "Packaging Design",
                //   "row": 5,
                //   "route": 'nihar-shanti'
                // }
              ]
		    }

    this.workBox = document.getElementsByClassName('work-wrapper')
  }


  componentDidMount() {
      //console.log(this.workBox.length)
      const workBoxHeight = this.workBox[0].clientHeight
      const portfolioContainerHeight = workBoxHeight * this.workBox.length / 1.25

      this.setState({
        wrapperHeight: portfolioContainerHeight + 'px',
        boxPosition: workBoxHeight
      })

      this.pageAmimation()
  }

  pageAmimation() {

    //	TweenMax.to('.banner-img-container', 1.5, {autoAlpha: 0.1, scale: 1.5, y: 0, ease:Power2.easeOut})
    const data = this.state.data
    
    const slidesWrapper = document.querySelectorAll('.work-wrapper-2')
    const finalData =  this.groupBy(data, function(item) {
      return [item.row]
      });

      finalData.map((itemArr, idx) => {
        const animation = new TimelineLite(),
            animation2 = new TimelineLite()
       
        itemArr.map((item, index)=>{
         
            animation
            .fromTo(`#${item.route}.work-wrapper:first-child`, .7, {y:100}, {y: 0, ease: Power1.easeInOut}, '-=1')
            .fromTo(`#${item.route}.work-wrapper:first-child .work-details`, .7, {y:100, opacity:0}, {y:0, opacity:1, ease: Power1.easeInOut}, '-=.69')
            .fromTo(`#${item.route}.work-wrapper:first-child .work-image`, .7, {clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: Power4.easeOut, force3D: 0}, '-=1')
            
            animation
            .fromTo(`#${item.route}.work-wrapper:last-child`, .7, {y:100}, {y:0, ease: Power1.easeInOut}, '-=.80')
            .fromTo(`#${item.route}.work-wrapper:last-child .work-details`, .7, {y:100, opacity:0}, {y:0, opacity:1, ease: Power1.easeInOut}, '-=.85')
            .fromTo(`#${item.route}.work-wrapper:last-child .work-image`, .7, {  y:100, clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }, { y:0,  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: Power4.easeOut, force3D: 0}, '-=.85')

            animation2
              .fromTo(`#${item.route}.work-wrapper:last-child`, .2, {y: 0}, {y: -40, ease: Power0.easeInOut}, '-=1')
              .fromTo(`#${item.route}.work-wrapper:first-child`, .3, {y: 0}, {y: -80, ease: Power0.easeInOut}, '-=1')

        })

        new ScrollMagic.Scene({triggerElement: slidesWrapper[idx], triggerHook:1, duration: '300', reverse: false})
          .setTween(animation)
          .addTo(this.controller)
          //.addIndicators() 

          

          new ScrollMagic.Scene({triggerElement: slidesWrapper[idx], triggerHook:.5, duration: '300', reverse: true})
          .setTween(animation2)
          .addTo(this.controller)
          //.addIndicators() 

      })

    

    }

  arrayFromObject(obj) {
    const arr = [];
    for (let i in obj) {
      arr.push(obj[i])
    }
    return arr
  }
  

  groupBy(list, fn) {
    const groups = {}

    list.map((elem)=> {
      let group = JSON.stringify(fn(elem));
          if (group in groups) {
            groups[group].push(elem);
        } else {
            groups[group] = [elem];
        }
    })
     
     return this.arrayFromObject(groups);
  }

	render() {

      const data = this.state.data
      const finalData =  this.groupBy(data, function(item) {
                            return [item.row]
                            });
                          
		return(
            <React.Fragment>
              {
                <div className='col-md-8 no-gutters'>
                <div className='portfolio-list'> 
                

                {
                  finalData.map((arr, i)=> {
                     const oddEvenClass = i % 2 ? 'odd' : 'even'
                    return (

                        <div key={i} id={oddEvenClass+i} className={`row no-gutters work-wrapper-2 _wrap-${oddEvenClass}`} style={{'width': '100%'}}>
                          {
                            arr.map((item, idx)=>{
                              return (
                                
                                  <Link to={item.route} id={item.route} className='work-wrapper' key={idx}>
                                    <div className='work-image' style={{background: item.color }}>
                                      {
                                        item.tile && 
                                        <img src={item.tile}/>
                                      }
                                    </div>
                                    <div className='work-details'>
                                      <h5 className='sub-title'>{item.subtitle}</h5>
                                      <h4 className='title'>{item.title}</h4>
                                    </div>
                                  </Link>
                              )
                            })
                         }
                         
                        
                        </div>
                      )
                  })
                }
                
                </div>
              </div>
              }
              
          </React.Fragment>
			)
	}

}

export default PortfolioContainer