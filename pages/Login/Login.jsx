import "./Login.css";
const Login = () => {
  return (
    <div className="login-cont">
      <div className="login-box">
      <h1 className="login-tile">Login to Landmine Soft </h1>
      <p className="login-para">
        Have any questions or feedback? Drop a message and we will get back to you.
      </p>
      
          <form className="login-form">
            <label>Email</label>
             <input 
                type="email"
                name="email"
                required
                />

                <label>Password</label>
                <input 
                type="password"
                name="password"
               
                required
               
                />
                <p>Forget Password?</p>
              <button type="submit" className="login">Login</button>
          </form>
         <h2 className="login-create">Don't have an account? <span className="create"> Create account</span></h2>
          
      </div>
  </div>
  )
}

export default Login
