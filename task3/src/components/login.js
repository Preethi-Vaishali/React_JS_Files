import React from "react";

class login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        function formSubmit(event){
            console.log("Form Submit");
        }

        function emailOnChange(event){
            console.log("Email onchange");

        }

        html = <div>
            <form onSubmit = {formSubmit} name = "login_form">
                <input type="email" placeholder="Email" name="email" onChange={emailOnChange}></input>
                <input type="password" placeholder="Password" name="password"></input>
                <input type="submit">Login</input>
            </form>
        </div>
        return html;
    }
}