import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const Soloproduct = () => {
  const singelProduct =
    localStorage.getItem("singelProduct") != null
      ? JSON.parse(localStorage.getItem("singelProduct"))
      : [];
  const storeData = useSelector((store) => store.AllStoreData);

  const data = storeData.filter((x) => x.id == singelProduct);

  const [imag, setImages] = useState("");

  const images = data.map((x) => {
    return x.images;
  });


  return (
    <div>
      <div className="singelproduct-container">
        <div className="store-right--cont">
          <div className="list-of--image">
            <ul>
              {images[0].map((x) => {
                return (
                  <li onMouseEnter={() => setImages(x.one)}>
                    <img src={x.one} />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="large-image">
            <img src={imag == "" ? data.map((x) => x.img) : imag} alt="" />
          </div>
        </div>

        <div className="left-cont">
          <div className="">
            <h1 className="text-2xl font-medium">{data.map ((x) => x.title)}</h1>
            <h3 className="text-xl font-medium">
              Men's Fleece Full-Zip Fitness Hoodie
            </h3>
          </div>
          <div className="mrp text-xl font-medium">MRP : ₹ {data.map((x)=> x.discountPrice)}.00</div>
          <div className="">
            <div className="opacity-60">incl. of taxes</div>
            <div className="opacity-60">
              (Also includes all applicable duties)
            </div>
          </div>

          <img src={data.map((x) => x.img)} alt="" />

          <div className="product-size">
            <div className="join flex gap-5">
              <input
                className="join-item btn btn-square "
                type="radio"
                name="options"
                aria-label="S"
                checked
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="M"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="L"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="XL"
              />
            </div>
          </div>

          <div className="shopping-buttons flex flex-col gap-5">
            <button className="add-to--bag">Add to Bag</button>
            <button className="add-to--favo">Favourite</button>
          </div>

          <div className="bg-[#f2f2f2] px-16 py-8 rounded-xl">
            <p>
              This product is made from 100% sustainable materials, using a
              blend of both recycled polyester and organic cotton fibres. The
              blend is at least 10% recycled fibres or at least 10% organic
              cotton fibres.
            </p>
          </div>

          <div className=" px-6 py-2">
            <p>
              {data.map((x)=> x.description)}
            </p>
          </div>

          <div className=" px-6 py-2">
            <p>
              Embrace the grind of your next workout in this Nike {data.map((x)=> x.title)}
              Hoodie. Nike Dri-FIT technology moves sweat away from your skin
              for quicker evaporation, helping you stay dry and comfortable. The
              relaxed fit sits slightly off the body and the "Engineered for
              World Class Athletes" graphic means it's made for athletes like
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soloproduct;
