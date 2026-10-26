import '../styles/Signup.css'

const Signup = () => {

  return (
    <div className="container-signup" action="" id="signup">
      <div className="header">
        <h2>JOIN WITH US</h2>
        <br/>
      </div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Passwords" />
        <input type="password" placeholder="Confirm Passwords" />
        <button type="submit">Signup Now</button>
      </form>
    </div>
  )
}

export default Signup
