import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TimelineMax, TweenMax, TweenLite, CSSPlugin, ScrollToPlugin, Draggable, AttrPlugin } from "gsap/all";
import Home from './Home'
import About from './About'
import style from './styles/global.less'

const plugins = [ CSSPlugin, AttrPlugin ]; 

let pos = 0;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = ({
          isAnimating : false
        })
        this.tween = null
        this.handleScroll = this.handleScroll.bind(this)
    }

   componentDidMount() {
      //TweenMax.to("#main", 2, {backgroundColor:"#000", width:"50%", top:"100px", ease:Power2.easeInOut});
       window.addEventListener('mousewheel', this.handleScroll);
    }

    // componentWillReceiveProps() {
    //   //TweenMax.to("#main", 2, {backgroundColor:"#000", width:"50%", top:"100px", ease:Power2.easeInOut});
    //    window.removeEventListener('mousewheel', this.handleScroll);
    // }

    handleScroll(event) {
        
    }
    
    render() {
        return(
            <div>
                
              <div id="main">
                <div className="section section1">Hello</div>
                <div className="section section2">Hello</div>
                <div className="section section3">Hello</div>
                <div className="section section4">Hello</div>
              </div>

    
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))