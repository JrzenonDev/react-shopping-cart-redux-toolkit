import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./product.css";
// eslint-disable-next-line react/prop-types
export const ProductCart = ({ id, cover, name, price }) => {
  return (
    <>
      <div className="box boxItems" id="product">
        <div className="img">
          <Link to={`/product/${id}`}>
            <img src={cover} alt="cover" />
          </Link>
        </div>
        <div className="details">
          <h3>${price}</h3>
          <p>{name}</p>
          <button>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  );
};
