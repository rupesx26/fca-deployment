import React, {Component} from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loader from './Common/Utill/Loader'
//file import



//import Home from './Home'
//import Difference from './Difference'
// import Work from './Work'
// import Connect from './Connect'
// import Careers from './Careers'
// import Job1 from './Careers/Job1'
// import WorkDetails from './Work/WorkDetails'
// import NiharGold from './Work/NiharGold'
// import Jars from './Work/Jars'
// import Kate from './Work/Kate'
// import Hrx from './Work/Hrx'
// import Hero from './Work/Hero'
// import RapidRupee from './Work/RapidRupee'

// import Cocosoul from './Work/Cocosoul'
// import NiharShanti from './Work/NiharShanti'
// import NiharShantiAlmond from './Work/NiharShantiAlmond'
// import SocranosGravity from './Work/SocranosGravity'
// import Thambbi from './Work/Thambbi'
// import Tlc from './Work/Tlc'
import style from './Styles/global.less'
import styleMenu from '../app/Common/Menu/menu.less'
import styleHome from '../app/Home/home.less'
import styleWork from '../app/Work/work.less'
import styleAbout from '../app/Difference/about.less'
import styleConnect from '../app/Connect/connect.less'
import styleCareers from '../app/Careers/careers.less'

 //const Home = lazy(() => import('./Home'));
 //const Difference = lazy(() => import('./Difference'));
 
// const Home = Loadable({
//   loader: () => import(/* webpackChunkName: "home" */ './Home'),
//   loading() {
//     return <div>Loading...</div>
//   },
// })

class DynamicImport extends Component {
  state = {
    component: null
  }
  componentWillMount() {
    this.props.load()
      .then((module)=> this.setState(()=> ({
        component: module.default
      })))
  }
  render() {
    return this.props.children(this.state.component)
  }
}
const Home = (props) => (
  <DynamicImport load={() => import('./Home')}>
    {
      (Component) => Component === null ? <Loader /> : <Component {...props} /> 
    }
  </DynamicImport>
)

const Difference = (props) => (
  <DynamicImport load={() => import('./Difference')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)


const Work = (props) => (
  <DynamicImport load={() => import('./Work')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const Connect = (props) => (
  <DynamicImport load={() => import('./Connect')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)


const Careers = (props) => (
  <DynamicImport load={() => import('./Careers')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const Job1 = (props) => (
  <DynamicImport load={() => import('./Careers/Job1')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const NiharGold = (props) => (
  <DynamicImport load={() => import('./Work/NiharGold')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const Jars = (props) => (
  <DynamicImport load={() => import('./Work/Jars')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const Hrx = (props) => (
  <DynamicImport load={() => import('./Work/Hrx')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const Hrx2 = (props) => (
  <DynamicImport load={() => import('./Work/Hrx2')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const Hero = (props) => (
  <DynamicImport load={() => import('./Work/Hero')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const Kate = (props) => (
  <DynamicImport load={() => import('./Work/Kate')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const RapidRupee = (props) => (
  <DynamicImport load={() => import('./Work/RapidRupee')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const Cocosoul = (props) => (
  <DynamicImport load={() => import('./Work/Cocosoul')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const NiharShanti = (props) => (
  <DynamicImport load={() => import('./Work/NiharShanti')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const NiharShantiAlmond = (props) => (
  <DynamicImport load={() => import('./Work/NiharShantiAlmond')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const SocranosGravity = (props) => (
  <DynamicImport load={() => import('./Work/SocranosGravity')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const Thambbi = (props) => (
  <DynamicImport load={() => import('./Work/Thambbi')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const Tlc = (props) => (
  <DynamicImport load={() => import('./Work/Tlc')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const WorkDetails = (props) => (
  <DynamicImport load={() => import('./Work/WorkDetails')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)

const Test = (props) => (
  <DynamicImport load={() => import('./test')}>
    {
      (Component) => Component === null ? <Loader />  : <Component {...props} /> 
    }
  </DynamicImport>
)


class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
       <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/difference" component={Difference} />
          <Route path="/work" component={Work} />
          <Route path="/connect" component={Connect} />
          <Route path="/careers" component={Careers} />
          <Route path={`/Job1`} component={Job1}/>
          <Route path={`/workdetails`} component={WorkDetails}/>
          <Route path={`/nihar-gold`} component={NiharGold}/>
          <Route path={`/nihar-shanti`} component={NiharShanti}/>
          <Route path={`/nihar-shanti-almond`} component={NiharShantiAlmond}/>
          <Route path={`/socranos-gravity`} component={SocranosGravity}/>
          <Route path={`/the-laughing-cow`} component={Tlc}/>
          <Route path={`/hero-talkies`} component={Hero}/>
          <Route path={`/hrithik-roshan`} component={Hrx}/>
          <Route path={`/hrithik-roshan-2`} component={Hrx2}/>
          <Route path={`/sussegado-coffee`} component={Jars}/>
          <Route path={`/thambbi`} component={Thambbi}/>
          <Route path={`/rapid-rupee`} component={RapidRupee}/>
          <Route path={`/cocosoul`} component={Cocosoul}/>
          <Route path={`/kate-spade`} component={Kate}/>
          <Route path={`/test`} component={Test}/>
        </Switch>
  		</Router>
      </React.Fragment>
    );
  }
}

export default ReactRouter;