import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

/* eslint-disable react/prop-types */
export const CardItems = ({ id, cover, name, price, quantity, totalPrice }) => {
  return (
    <>
      <div className="cardList" key={id}>
        <div className="cartContent">
          <div className="img">
            <img src={cover} alt="" />
            <button className="remove flexCenter">
              <AiOutlineClose />
            </button>
          </div>
          <div className="details">
            <p>{name}</p>
            <label htmlFor="">Unit Price ${price}</label>

            <div className="price">
              <div className="qty flexCenter">
                <button className="plus">
                  <AiOutlinePlus />
                </button>
                <button className="num">1{quantity}</button>
                <button className="minus">
                  <AiOutlineMinus />
                </button>
              </div>
              <div className="priceTitle">$10{totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
