import "./Register.css";

const Register = () => {
  return (
    <div className="register-cont">
      <div className="register-box">
      <h1 className="register-tile">REGISTER HERE..</h1>
      
      
          <form className="register-form">
            <label>Full Name</label>
             <input 
                type="text"
                name="name"
                required
                />

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
                <label>ConfirmPassword</label>
                <input 
                type="password"
                name="password"
               
                required
               
                />
              <button type="submit" className="register">Register</button>
          </form>
          
      </div>
  </div>
  )
}

export default Register
