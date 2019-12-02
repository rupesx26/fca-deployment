//module import
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from './router'

class App extends Component { 

	render() {
        return(
        	<React.Fragment>
        		<ReactRouter/>
        	</React.Fragment>
        	)
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))