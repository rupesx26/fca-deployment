
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      hover:false,
    }
  }
  
  handleHover(){
    this.setState({hover:!this.state.hover});
  }
  
  render(){
    const styles={
      container: {
         animation: '1s appear forwards',
        animationDelay:this.props.delay,
      },
      menuItem:{
        color: this.state.hover? '#fafafa':'gray',
        transition: 'color 0.2s ease-in-out',
        animation: '0.8s slideIn forwards',
        animationDelay:this.props.delay,
      },
      pos: {
        opacity: this.state.hover? '1':'0',
        bottom: this.state.hover? '67%' : '60%',
        transition: 'all 0.4s ease-in-out',
      },
      
      line: {
        animation: '0.5s shrink forwards',
        animationDelay:this.props.delay,
      }
    }
    return(
      <li className='list-item-wrapper' style={styles.container}>
        <Link to={this.props.route}>
          <span className='pos' style={styles.pos}>{this.props.number}</span>
          <div className='list-item'
            style={styles.menuItem} 
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
          >
            {this.props.children}  

          </div>
        </Link>
      <div className='line' style={styles.line}/>

    </li>  
    )
  }
}

export default MenuItem