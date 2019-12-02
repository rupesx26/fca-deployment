import React, {Component} from 'react'
import { TweenMax, TimelineMax, CSSPlugin, TweenLite, TimelineLite } from 'gsap/all';

class Blob extends Component {

    constructor(props) {
        super(props)
        this.createBlob = this.createBlob.bind(this)
        this.cardinal = this.cardinal.bind(this)
        this.random = this.random.bind(this)
        this.check = this.check.bind(this)
    }

    

    createBlob(options) {
        const points = [];  
        const path = options.element;
        const slice = (Math.PI * 2) / options.numPoints;
        const startAngle = this.random(Math.PI * 2);
        
        const tl = new TimelineMax({
          onUpdate: update
        });  
        
        for (let i = 0; i < options.numPoints; i++) {
          
          const angle = startAngle + i * slice;
          const duration = this.random(options.minDuration, options.maxDuration);
          
          const point = {
            x: options.centerX + Math.cos(angle) * options.minRadius,
            y: options.centerY + Math.sin(angle) * options.minRadius
          };   
          
          const tween = TweenMax.to(point, duration, {
            x: options.centerX + Math.cos(angle) * options.maxRadius,
            y: options.centerY + Math.sin(angle) * options.maxRadius,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
          });
          
          tl.add(tween, -this.random(duration));
          points.push(point);
        }
        
        options.tl = tl;
        options.points = points;
        
        function update() {
            console.log(points)
            //this.check(points)
        //  //path.setAttribute('d', 'red')
             path.setAttribute("d", this.cardinal(points, true, 1));
         }
        
        return options;
    }
    

    check(data) {
        console.log(data)
    }

    cardinal(data, closed, tension) {
        
        if (data.length < 1) return "M0 0";
        if (tension == null) tension = 1;
        
        const size = data.length - (closed ? 0 : 1);
        const path = "M" + data[0].x + " " + data[0].y + " C";
        
        for (let i = 0; i < size; i++) {
          
          const {p0, p1, p2, p3} = '';
          
          if (closed) {
            p0 = data[(i - 1 + size) % size];
            p1 = data[i];
            p2 = data[(i + 1) % size];
            p3 = data[(i + 2) % size];
            
          } else {
            p0 = i == 0 ? data[0] : data[i - 1];
            p1 = data[i];
            p2 = data[i + 1];
            p3 = i == size - 1 ? p2 : data[i + 2];
          }
              
          const x1 = p1.x + (p2.x - p0.x) / 6 * tension;
          const y1 = p1.y + (p2.y - p0.y) / 6 * tension;
      
          const x2 = p2.x - (p3.x - p1.x) / 6 * tension;
          const y2 = p2.y - (p3.y - p1.y) / 6 * tension;
          
          path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
        }
        
        return closed ? path + "z" : path;
      }
    

    random(min, max) {
        if (max == null) { max = min; min = 0; }
        if (min > max) { const tmp = min; min = max; max = tmp; }
        return min + (max - min) * Math.random();
    }

    componentDidMount() {
        const blob1 = this.createBlob({
            element: document.querySelector("#path1"),
            numPoints: 7,
            centerX: 550,
            centerY: 550,
            minRadius: 250,
            maxRadius: 200,
            minDuration: 1,
            maxDuration: 2
        });

    }
    render() {
        return (
            <div className='blob-wrapper'>
                <svg id="svg" viewBox="0 0 1024 1024">
                    <path id="path1"></path>
                    {/* <path id="path2"></path>  
                    <path id="path3"></path> 
                    <path id="path4"></path> */}
                    <g id="dot-container"></g>
                </svg>
            </div>
        )
    }
}

export default Blob


