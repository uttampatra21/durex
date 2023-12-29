import React from "react";
import "./Store.css";
import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import StoreHeader from "./StoreHeader";
const Store = () => {
  const storeData = useSelector((store) => store.AllStoreData);

  return (
    <div id="store">
      <div className="header__bar">
        Free Shipping & Free Delivery on Every Orders
      </div>

      <StoreHeader />
      <header>
        <div className="section__items__container header__container">
          <div className="header__content">
            <p>EXTRA 55% OFF IN WINTER SALE</p>
            <h1>
              Discover & Shop
              <br />
              The Trend Ss19
            </h1>
            <button id="btn_item">SHOP NOW</button>
          </div>
          <div className="header__image">
            <img
              src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/header.png?raw=true"
              alt="header"
            />
          </div>
        </div>
      </header>

      <div className="section__items__container collection__container">
        <img
          src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/collection.jpg?raw=true"
          alt="collection"
        />
        <div className="collection__content">
          <h2 className="section__items__title">New Collection</h2>
          <p>#35 ITEMS</p>
          <h4>Available on Store</h4>
          <button id="btn_item">SHOP NOW</button>
        </div>
      </div>

      <div className="section__items__container sale__container">
        <h2 className="section__items__title">On Sale</h2>
        <div className="sale__grid">
          <div className="sale__card">
            <img
              src="https://i.pinimg.com/736x/01/87/49/0187491641f36ed66d09623d52298fd6.jpg"
              alt="sale"
            />
            <div className="sale__content">
              <p className="sale__subtitle">MAN OUTERWEAR</p>
              <h4 className="sale__title">
                sale <span>40%</span> off
              </h4>
              <p className="sale__subtitle">- DON'T MISS -</p>
              <button id="btn_item" className="sale__btn_item my-2">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="sale__card">
            <img
              src="https://i.pinimg.com/564x/e8/6f/25/e86f2570d6e11381c56f3d6b0f0ba1dd.jpg"
              alt="sale"
            />
            <div className="sale__content">
              <p className="sale__subtitle">WOMAN T-SHIRT</p>
              <h4 className="sale__title">
                sale <span>25%</span> off
              </h4>
              <p className="sale__subtitle">- DON'T MISS -</p>
              <button id="btn_item" className=" sale__btn_item my-2">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="sale__card">
            <img
              src="https://i.pinimg.com/564x/87/1b/35/871b35d1dd95c6272c4d4892f03d3188.jpg"
              alt="sale"
            />
            <div className="sale__content">
              <p className="sale__subtitle">JACKETS</p>
              <h4 className="sale__title">
                sale <span>20%</span> off
              </h4>
              <p className="sale__subtitle">- DON'T MISS -</p>
              <button id="btn_item" className="sale__btn_item my-2">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section__items__container musthave__container">
        <h2 className="section__items__title">Must Have</h2>
        <div className="musthave__nav">
          <div>ALL</div>
          <div>MAN</div>
          <div>WOMEN</div>
          <div>BAG</div>
          <div>SHOES</div>
        </div>
        <div className="musthave__grid">
          {storeData.map((x) => {
            return (
              <NavLink to={"/products/" + x.id}>
                {" "}
                <HomeItem key={x.id} x={x} />{" "}
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className="news">
        <div className="section__items__container news__container">
          <h2 className="section__items__title">Latest News</h2>
          <div className="news__grid">
            <div className="news__card">
              <img
                src="https://cdn.sanity.io/images/qa41whrn/prod/576f2732d93aaae9bb5bd6fac1b52bfb89bfc546-2000x1334.png?w=2160&q=80&auto=format"
                alt="news"
              />
              <div className="news__details">
                <p>
                  FASHION <i className="ri-checkbox-blank-circle-fill"></i>
                  <span>JAMES SIMSON</span>
                  <i className="ri-checkbox-blank-circle-fill"></i> FEB 2, 2019
                </p>
                <h4>Seasonal Trends</h4>
                <hr />
                <p>
                  Discuss the latest fashion trends for the current season and
                  offer tips and ideas on how to incorporate these trends into
                  your wardrobe.
                </p>
                <a href="#">
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="news__card">
              <img
                src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/news-2.jpg?raw=true"
                alt="news"
              />
              <div className="news__details">
                <p>
                  TRENDS <i className="ri-checkbox-blank-circle-fill"></i>
                  <span>JAMES SIMSON</span>
                  <i className="ri-checkbox-blank-circle-fill"></i> APR 15, 2019
                </p>
                <h4>Fashion Tips and Advice</h4>
                <hr />
                <p>
                  Provide your readers with practical tips and advice on how to
                  dress for different occasions, body types, or style
                  preferences.
                </p>
                <a href="#">
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="news__card">
              <img
                src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/news-1.jpg?raw=true"
                alt="news"
              />
              <div className="news__details">
                <p>
                  STYLE <i className="ri-checkbox-blank-circle-fill"></i>
                  <span>JAMES SIMSON</span>
                  <i className="ri-checkbox-blank-circle-fill"></i> JUL 22, 2019
                </p>
                <h4>Sustainable Fashion</h4>
                <hr />
                <p>
                  Cover the growing trend of eco-conscious fashion and explore
                  the various ways to be sustainable in your fashion choices.
                </p>
                <a href="#">
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section__items__container brands__container">
        <div className="brand__image">
          <img
            src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/brand-1.png?raw=true"
            alt="brand"
          />
        </div>
        <div className="brand__image">
          <img
            src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/brand-2.png?raw=true"
            alt="brand"
          />
        </div>
        <div className="brand__image">
          <img
            src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/brand-3.png?raw=true"
            alt="brand"
          />
        </div>
        <div className="brand__image">
          <img
            src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/brand-4.png?raw=true"
            alt="brand"
          />
        </div>
        <div className="brand__image">
          <img
            src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/brand-5.png?raw=true"
            alt="brand"
          />
        </div>
        <div className="brand__image">
          <img
            src="https://github.com/WebDesignMastery/Monsa_12-05-23/blob/main/assets/brand-6.png?raw=true"
            alt="brand"
          />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Store;
