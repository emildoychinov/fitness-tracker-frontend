import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import About from './components/about/About';
import HeaderSmall from './components/header/HeaderSmall';
import { RouterPathEnum } from './enums/RouterPathEnum';
import Members from './components/member/Members';
import Home from './components/home/Home';
import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';

interface IState {
  isSmallScreen: boolean;
}

class App extends React.Component<{}, IState> {
  constructor(props : any){
    super(props);

    this.state = { isSmallScreen: false };
}
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);

    this.updateDimensions( null );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  private updateDimensions = (e: any) => {
    this.setState( { isSmallScreen: window.innerWidth < 500 } );
  }


  public render() {
    return (    
<>
  <div>
        <BrowserRouter>
        <div className="app" id="app">
          { this.state.isSmallScreen ? <HeaderSmall /> : <Header /> }
          <Switch>
            <Route exact={true} path={RouterPathEnum.HOME} component={Home}/>
            <Route path={RouterPathEnum.ABOUT} component={About}/>
            <Route path={RouterPathEnum.MEMBER} component={Members}/>
            <Route path={RouterPathEnum.LOGIN} component={Login}/>
            <Route path={RouterPathEnum.REGISTER} component={Register}/>
            <Redirect to={RouterPathEnum.HOME} />
            

          </Switch>
      
         </div>
         </BrowserRouter>

      
        
  </div> 


</>

      
      
    );
  }
}

export default App;
