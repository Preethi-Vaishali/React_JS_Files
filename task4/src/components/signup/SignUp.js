import "../../style/Auth.css"

const SignUp = () =>{
    return <div className="authBack">
        <div className="popupBack"><p>Sign Up</p>
        <form name="SignupForm">
        <input type="text" placeholder="Name" name="name"/>
        <input type="email" placeholder="Email" name="email"/>
        <input type="password" placeholder="Password" name="Password"/>
        <input type="password" placeholder="Retype-Password" name="Retype-Password"/>
        <button type="submit">Signup</button>
        </form>
        </div>
    <div className="blurBack"></div>

    </div>
}

export default SignUp;