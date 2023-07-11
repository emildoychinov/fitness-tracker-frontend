import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { RouterPathEnum } from '../../enums/RouterPathEnum';

class Header extends React.Component<React.Props<Header>, {}> {
  constructor(props : React.Props<Header>){
    super(props);
  }

  render() {
    return(

      <>

      <body>
        <ul className='ulContainer'>
        <a href="#home"><Link to={ RouterPathEnum.HOME }>HOME</Link></a>
        <a href="#about"><Link to={ RouterPathEnum.ABOUT }>WORKOUTS</Link></a>
        <a href="#exercises"><Link to={ RouterPathEnum.MEMBER }>EXERCISES</Link></a>
        </ul>
      </body>
        
      

      </>

    );
  }
}

export default Header;
