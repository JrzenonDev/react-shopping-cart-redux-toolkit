import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

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

          <form onSubmit={handleSubmit}>
            <span>Username or Email address</span>
            <input type="text" name="" id="name" required />
            <span>Password *</span>
            <input type="password" name="" id="password" required />
            <button className="button">Login</button>
          </form>
        </div>
      </section>
    </>
  );
};
