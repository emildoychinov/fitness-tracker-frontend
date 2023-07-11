import * as React from "react";
import { RouteComponentProps } from "react-router";
import { RouterPathEnum } from "src/enums/RouterPathEnum";
import "./Home.css";

class Home extends React.Component<RouteComponentProps<Home>, {}> {
  constructor(props: RouteComponentProps<Home>) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="home" id="home">

        <div className="main-image" id="main-image">
        <img src="/assets/imgs/fitness.png" alt="fitness.png" className="image-style"/>

        </div>
            <div className="main-text" id="main-text">
              <h2><span>BUILD</span> YOUR <span>BODY</span> STRONG</h2>
              <p>Make the best version of yourself!</p>
            </div>

        </div>

        

        <div className="button" id="button">
          <button onClick={(e: any) => this.onClickMove(RouterPathEnum.ABOUT)}>
            Go About
          </button>
          &nbsp;
          <button onClick={(e: any) => this.onClickMove(RouterPathEnum.MEMBER)}>
            Go Eexercises
          </button>
        </div>
      </>
      
    );
  }

  private onClickMove = (routerPathEnum: RouterPathEnum) => {
    this.props.history.push(routerPathEnum);
  };
}

export default Home;
