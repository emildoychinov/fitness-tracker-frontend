import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { RouterPathEnum } from 'src/enums/RouterPathEnum';
import './Exercises.css';

class Members extends React.Component<RouteComponentProps<Members>, {}> {
  constructor(props : RouteComponentProps<Members>){
    super(props);
  }

  render() {
    return(
      <div className="exercises" id="members">

        <img src="/assets/imgs/muscle.png" alt="muscle.png" className="image-exercises"/>

        <div>
            <h2>EXERCISES</h2>
        </div>

        <button onClick={ ( e: any ) => this.onClickMove( RouterPathEnum.ABOUT ) }>
            Go About
        </button>
        &nbsp;
        <button onClick={ ( e: any ) => this.onClickMove( RouterPathEnum.HOME ) }>
            Go Home
        </button>

      </div>
    );
  }

  private onClickMove = ( routerPathEnum: RouterPathEnum ) => {
    this.props.history.push( routerPathEnum );
  }
}

export default Members;
