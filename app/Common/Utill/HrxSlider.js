import React from 'react'
import Slider from "react-slick";


class HrxSlider extends React.Component {
    constructor(props) {
        super(props)
           
    }
    render() {
      const settings = {
        dots: this.props.dots,
        infinite: this.props.infinite,
        speed: this.props.speed,
        slidesToShow: this.props.slidesToShow,
        slidesToScroll: this.props.slidesToScroll,
        fade: this.props.fade, 
        autoplay: this.props.autoplay,
        autoplaySpeed:this.props.autoplaySpeed,
        pauseOnHover: this.props.pauseOnHover,
        centerMode: this.props.centerMode,
        variableWidth: this.props.variableWidth

      };
      return (
        <Slider {...settings}>
          <div className='slide'>
              <div className='slideBg'>
                  <img src={this.props.slide1} />
              </div>
          </div>
          <div className='slide slide2'>
              <div className='slideBg'>
                <img src={this.props.slide2} />
              </div>
          </div>
          <div className='slide slide3'>
              <div className='slideBg'>
                <img src={this.props.slide3} />
              </div>
          </div>
          <div className='slide slide4'>
              <div className='slideBg'>
                <img src={this.props.slide4} />
              </div>
          </div>
          <div className='slide slide5'>
              <div className='slideBg'>
                    <img src={this.props.slide5} />
              </div>
          </div>

          <div className='slide slide6'>
              <div className='slideBg'>
                    <img src={this.props.slide6} />
              </div>
          </div>

          {/* <div className='slide slide7'>
              <div className='slideBg'>
                    <img src={this.props.slide7} />
              </div>
          </div>

          <div className='slide slide8'>
              <div className='slideBg'>
                    <img src={this.props.slide8} />
              </div>
          </div>


          <div className='slide slide9'>
              <div className='slideBg'>
                    <img src={this.props.slide9} />
              </div>
          </div>


          <div className='slide slide10'>
              <div className='slideBg'>
                    <img src={this.props.slide10} />
              </div>
          </div>


          <div className='slide slide11'>
              <div className='slideBg'>
                    <img src={this.props.slide11} />
              </div>
          </div>


          <div className='slide slide12'>
              <div className='slideBg'>
                    <img src={this.props.slide12} />
              </div>
          </div>


          <div className='slide slide13'>
              <div className='slideBg'>
                    <img src={this.props.slide13} />
              </div>
          </div>


          <div className='slide slide14'>
              <div className='slideBg'>
                    <img src={this.props.slide14} />
              </div>
          </div>


          <div className='slide slide15'>
              <div className='slideBg'>
                    <img src={this.props.slide15} />
              </div>
          </div>


          <div className='slide slide16'>
              <div className='slideBg'>
                    <img src={this.props.slide16} />
              </div>
          </div>


          <div className='slide slide17'>
              <div className='slideBg'>
                    <img src={this.props.slide17} />
              </div>
          </div>


          <div className='slide slide18'>
              <div className='slideBg'>
                    <img src={this.props.slide18} />
              </div>
          </div>


          <div className='slide slide19'>
              <div className='slideBg'>
                    <img src={this.props.slide19} />
              </div>
          </div>


          <div className='slide slide20'>
              <div className='slideBg'>
                    <img src={this.props.slide20} />
              </div>
          </div>


          <div className='slide slide21'>
              <div className='slideBg'>
                    <img src={this.props.slide21} />
              </div>
          </div>


          <div className='slide slide22'>
              <div className='slideBg'>
                    <img src={this.props.slide22} />
              </div>
          </div>


          <div className='slide slide23'>
              <div className='slideBg'>
                    <img src={this.props.slide23} />
              </div>
          </div>


          <div className='slide slide24'>
              <div className='slideBg'>
                    <img src={this.props.slide24} />
              </div>
          </div> */}


          


          
          
        </Slider>
      );
    }
  }

 export default HrxSlider