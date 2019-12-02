import React, { Component } from 'react';


class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
    }
  }
    
  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }
  
  render(){
    const styles={
      container: {
        height: this.state.open? '100vh': 0,
      }
    }
    return(
      <div className='menu-list-container' style={styles.container}>
        {
          this.state.open?
            <ul style={styles.menuList}>
              {this.props.children}
            </ul>:null
        }
      </div>
    )
  }
}

export default Menu