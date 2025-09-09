import "./Login.css"


function Login() {
    return (
        <>
       
        <div className="sign">
            <div className="white">
                <h1 >sign in</h1>
                <h3>Email address</h3>
                <input   type="email" placeholder="e.g,yhooo@gmail.com" />
                <h3>Password</h3>
                <input type="password" placeholder="e.g,1234yhoooo" />
                <div className="check">
                    <input type="checkbox" />
                    <h3>Remember me</h3>
                </div>
                <div className="sub">
                    <h3>submit</h3>
                </div>
                <h6 style={{ textAlign: "end" }}>Forgot<a href="#"> password?</a></h6>

            </div>
        </div>
        </>

    );

}
export default Login;