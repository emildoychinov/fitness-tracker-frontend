import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { RouterPathEnum } from "src/enums/RouterPathEnum";
import "./Register.css";

class Register extends React.Component<RouteComponentProps<Register>, {}> {
    state = {
        text: "",
    };
    constructor(props: RouteComponentProps<Register>) {
      super(props);
    }

    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ text: e.currentTarget.value });
    };
    
    onSubmit = (e: React.SyntheticEvent) =>{
        e.preventDefault();
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
            confirmPassword : { value: string };
        };
        const username : string = target.username.value; // typechecks!
        const password : string = target.password.value; // typechecks
        const confirmPassword : string = target.confirmPassword.value;

        console.log("username",username);
        console.log("password",password);

        if(password!=confirmPassword){
            return;
        }

        var data = {
            "username" : username,
            "password" : password
        }

        console.log("data ", data);
        
        fetch('auth/register', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            mode: "cors",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then((resp => {
            console.log(resp)
        }))
        this.props.history.push(RouterPathEnum.LOGIN);
    }
  
    render() {      
      return (
        <>

        <div className="main-img" id="main-img">
          <img src="/assets/imgs/imagine.png" alt="imagine.png" className="image-register"/>

        </div>
          <form
            className="register"
            onSubmit={this.onSubmit}
        >
            <div>
                <label>
                Username :
                    <input
                        type="text"
                        name="username"
                        placeholder="examplename123"
                        onChange={this.onChange}
                        value={this.state.text}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password :
                    <input
                        type="text"
                        name="password"
                        placeholder="examplepassword"
                    />
                </label>
            </div>
            <div>
                <label>
                    Confirm password :
                    <input
                        type="text"
                        name="confirmPassword"
                        placeholder="examplepassword"
                    />
                </label>
            </div>

            <div>
            <button className="register-buttons" type="submit">Submit</button>
            </div>
        </form>
        </>
        
      );
    }
  }

export default Register;