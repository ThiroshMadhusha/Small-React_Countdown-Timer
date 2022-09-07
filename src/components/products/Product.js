import React from "react";
import "./Product.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "../../assets/img1.webp";

const Product = () => {
  return (
    <>
      <header className="--bg-dark">
        <nav className="container">
          <h2 className="--text-md --text-light --py2">
            Ama<span>Zon</span>
            <AiOutlineShoppingCart color="orangered" size={30} />
          </h2>
        </nav>
      </header>

      <section>
        <div className="container product --flex-start --flex-dir-column">
          <div className="product-image --text-center --card --mr">
            <img src={Image} alt="img" />
          </div>
          <div className="product-desc">
            <h3 className="--text-md --color-danger">Amazon Shopping Center</h3>
            <p className="--fw-bold">$ 95 USD</p>
            <p className="--text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              saepe incidunt accusamus minus aspernatur. Sapiente ducimus facere
              illo sequi repudiandae? Explicabo ex assumenda blanditiis repellat
              quibusdam?
            </p>

            <form action="">
              <div className="--form-control --flex-start my2">
                <label htmlFor="">Color </label>
                <select>
                  <option>Chose An Option</option>
                  <option>White</option>
                  <option>Red</option>
                </select>
              </div>
              <div className="--form-control --flex-start my2">
                <label htmlFor="">Size </label>
                <select>
                  <option>Chose An Option</option>
                  <option>25</option>
                  <option>40</option>
                  <option>60</option>
                </select>
              </div>
              <div className="--form-control --flex-start my2">
                <label htmlFor="">Quantity </label>
                <select>
                  <option>Chose An Option</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <button className="--btn --btn-block --btn-primary">
                Add To Cart
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
