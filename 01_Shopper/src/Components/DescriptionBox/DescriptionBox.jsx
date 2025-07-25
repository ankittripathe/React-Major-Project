import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (120)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to our online clothing boutique, where style meets
          convenience! Explore our curated collection of fashion-forward apparel
          for every occasion, from casual everyday wear to elegant evening
          ensembles. Whether you're searching for the perfect outfit to express
          your unique personality or seeking timeless wardrobe staples, our
          diverse range ensures there's something for everyone. With hassle-free
          browsing and secure checkout, indulging in your fashion cravings has
          never been easier. Discover the latest trends, express your
          individuality, and redefine your style effortlessly with our online
          shopping experience.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
