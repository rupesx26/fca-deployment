import React, { Component } from 'react';

class MenuButton extends Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: this.props.colorChange
    }
   // console.log(this.props.colorUpdate)
  }

  componentWillReceiveProps(nextProps){
    //console.log(nextProps)
    if(nextProps.open !== this.state.open){
      this.setState({
        open: nextProps.open,
      });
    }
    
    this.setState({
      color: nextProps.open ? 'white' : 'black' 
    })
    //console.log(nextProps.open ? 'black' : 'white')   
    //document.getElementsByClassName('say-hello')[0].classList({})
  }

  // componentDidMount() {
  //   console.log(document.getElementsByClassName('say-hello')[0])
        

  // }
  
  
  handleClick(){
    this.setState({
      open:!this.state.open
    });    
  }
  
  render(){
   // console.log('btn', this.props.colorChange)
    const styles = {
      
      line: {
      //  background: this.state.color
        background: this.state.open ? 'white' : this.props.colorChange
      },
      lineTop: {
        transform: this.state.open ? 'rotate(45deg)':'none',
        marginBottom: this.state.open ? '5px' : '3px'
        
      },
      lineMiddle: {
        opacity: this.state.open ? 0: 1,
        transform: this.state.open ? 'translateX(-16px)':'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateX(-5px) translateY(-8px) rotate(-45deg)':'none',
      },       
    }
    return(
      <div className='hamburger' style={styles.container} 
        onClick={this.props.onClick ? this.props.onClick: 
          ()=> {this.handleClick();}}>
        <div className='line' style={{...styles.line,...styles.lineTop}}/>
        <div className='line' style={{...styles.line,...styles.lineMiddle}}/>
        <div className='line' style={{...styles.line,...styles.lineBottom}}/>
      </div>
    )
  }
}

export default MenuButton