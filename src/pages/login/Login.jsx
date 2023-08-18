import { Link } from "react-router-dom";
import "./login.css";
import back from "../../assets/images/my-account.jpg";

export const Login = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="My Account" />
            <div className="text">
              <h3>Login</h3>
              <h1>My Account</h1>
            </div>
          </div>

          <form>
            <span>Username or Email address</span>
            <input type="text" name="" id="" required />
            <span>Password *</span>
            <input type="text" name="" id="" required />
            <button className="button">Login</button>

            <Link to="/register">Signup</Link>
          </form>
        </div>
      </section>
    </>
  );
};
