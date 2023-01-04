import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { useCart } from "react-use-cart";
import { useState } from "react";

const ProductdetailItem = (props) => {
  const [title, setTitle] = useState("Add to Cart");
  const { addItem } = useCart();
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="recent-product"
      >
        <div className="recent-img">
          <div className="recent-top">
            <span>sale</span>
          </div>
          <img className="recentphoto" src={props.recentimg} alt="" />
        </div>
        <div className="recent-title">
          <h5>{props.title}</h5>
          <h4>${props.price}</h4>
          <ReactStars
            count={props.count}
            value={0}
            color1={"red"}
            color2={"red"}
            size={22}
            edit={false}
          />

          <div className="recent-button">
            <button
              onClick={() => {
                setTitle("Added to Cart");
                addItem(props.mehsul);
              }}
              className="cardbutton"
            >
              {title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductdetailItem;
