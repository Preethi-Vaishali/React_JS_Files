import "../../style/Auth.css"

const Login = () =>{
    const loginSuccess = (event) =>{
        alert("Success")
        return false
    }
    return <div className="authBack">
        <div className="popupBack"><p>Login</p>
        <form name="loginForm" onSubmit={ (event) =>{loginSuccess(event)}}>
        <input type="email" placeholder="Email" name="email"/>
        <input type="password" placeholder="Password" name="Password"/>
        <button type="submit">Login</button>
        </form>
        </div>
    <div className="blurBack"></div>

    </div>
}

export default Login;