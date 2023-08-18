import "./account.css";
import image from "../../assets/images/input.png";

export const Account = () => {
  return (
    <>
      <section className="accountInfo">
        <div className="container boxItems">
          <h1>Account information</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input
                  type="file"
                  name=""
                  id=""
                  accept="image/*"
                  src={image}
                  alt="imgs"
                />
                <img
                  src={image}
                  alt="image account"
                  className="image-preview"
                />
              </div>
            </div>
            <div className="right">
              <label>Username</label>
              <input type="text" name="" id="" required />
              <label>Email</label>
              <input type="text" name="" id="" required />
              <label>Password *</label>
              <input type="text" name="" id="" required />
              <button className="button">Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
