import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TimelineMax, TweenMax, TweenLite, CSSPlugin, ScrollToPlugin, Draggable, AttrPlugin } from "gsap/all";
import Home from './Home'
import About from './About'
import style from './styles/global.less'
const plugins = [ CSSPlugin, AttrPlugin ];  
 let pos = 0

class App extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            bgColor: 'red',
            active: '',
            hasClass: false
        })
        this.handleScroll = this.handleScroll.bind(this)
        this.tween = null
        this.insideTween = null


    }

    componentDidMount(event) {

      this.setState((state) => {
          return {active: 'active'};
        });
        
        window.addEventListener('mousewheel', this.handleScroll);
    }

    componentWillReceiveProps() {
       window.removeEventListener("mousewheel",  this.handleScroll);
    }
    
    
    handleScroll(event) {
     
     
      const wrapper = document.getElementById('section1')
        //window.removeEventListener("mousewheel",  this.handleScroll);
        wrapper.classList.value === 'section active' ? this.setState((state)=> {return {hasClass: true}}) :this.state.hasClass
        console.log(this.state.hasClass)
      
        if(event.deltaY < -1 ) {
           if(pos > 0) {
             console.log(pos)
              this.tween = TweenMax.to('#main', .7, {
                y: "+= 100vh",
                ease: Power2.easeInOut,
                onComplete: () => {
                  document.addEventListener("mousewheel", this.handleScroll);
                  document.getElementById('main').style.transform = "matrix(1, 0, 0, 1, 0, 0)";
                  
                   pos--;
                }
              });



           } else {
              window.removeEventListener("mouesewheel",  this.handleScroll);
           }
          

        } else if (pos == 0 ){
          //if(pos < 0) { 
             console.log(pos)
            this.tween = TweenMax.to('#main', .7, {
                y: "-= 100vh",
                ease: Power2.easeInOut,
                onComplete: () => {
                  document.addEventListener("mousewheel", this.handleScroll);
                  document.getElementById('main').style.transform = "translateY(-100vh)";
                  pos++;
                }
              });
        } 

             
    }



    

    render() {
        return(
            <div>
                 {/* <Router>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                </Router> 
                <Home />*/}


<div id="main" className="main" onScroll={this.handleScroll}>
    <div id="wrapper" className='wrapper' >
      <div id="section1" className={`section ${this.state.active}`}>
          <h1>Hello,</h1>
      </div>
      <div id="section2" className="section section2">
        <h1>How</h1>
        <div className="slide slide1">xxx</div>
        <div className="slide slide2">ttt</div>
        <div className="slide slide3">ttt</div>
      </div>   
      </div>
     <div id="section3" className='section section3'>ffscss</div>
  </div>
  </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))