import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = () => {
    setCardOpen(null);
  };
  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">2</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
      </div>
    </>
  );
};
