import { Link } from "react-router-dom";
import "./login.css";
import back from "../../assets/images/my-account.jpg";

export const Register = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="My Account" />
            <div className="text">
              <h3>Register</h3>
              <h1>My Account</h1>
            </div>
          </div>

          <form>
            <span>Email address</span>
            <input type="text" name="" id="" required />
            <span>Username *</span>
            <input type="text" name="" id="" required />
            <span>Password *</span>
            <input type="text" name="" id="" required />
            <span>Confirm Password *</span>
            <input type="text" name="" id="" required />
            <button className="button">Register</button>
            <Link to="/login">SignIn</Link>
          </form>
        </div>
      </section>
    </>
  );
};
