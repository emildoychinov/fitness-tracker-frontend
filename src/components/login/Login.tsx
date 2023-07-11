import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { RouterPathEnum } from "src/enums/RouterPathEnum";
import { postToRoute } from "src/requests";


class Login extends React.Component<RouteComponentProps<Login>, {}> {
    state = {
        text: "",
    };
    constructor(props: RouteComponentProps<Login>) {
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
        };
        const username : string = target.username.value; // typechecks!
        const password : string = target.password.value; // typechecks

        console.log("username",username);
        console.log("password",password);

        var data = {
            "username" : username,
            "password" : password
        }

        console.log("data ", data);
        
        fetch('auth/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            mode: "cors",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then((resp => {
            console.log(resp)
            localStorage.setItem('API_KEY', resp.token)
        }))
    }
  
    render() {      
      return (
        <>
          <form
            className="login"
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
            <button type="submit" />
        </form>
        </>
        
      );
    }
  }

export default Login;