import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assest/dropdown_icon.png";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="" />

      <div className="shop-category-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>

        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) =>
          props.category === item.category ? (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        )}
      </div>
      <div className="shop-category-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
