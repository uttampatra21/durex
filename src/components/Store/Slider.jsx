import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, NavLink } from "react-router-dom";

const Sliders = () => {
  const storeData = useSelector((store) => store.AllStoreData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className=" m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {storeData.map((x) => {
              return (
                <Link key={Math.random()} to={"/products/" + x.id}>
                  <div className="bg-white text-black rounded-xl">
                    <div className=" flex justify-center">
                      <img
                        className="h-[400px] object-cover w-[400px] rounded-xl flex justify-center items-center"
                        src={x.img}
                      />
                    </div>
                    <div className="flex flex-col  items-start p-4">
                      <h1 className="text-lg font-medium tracking-wide">
                        {x.title}
                      </h1>
                      <h1 className="text-lg font-medium tracking-wide opacity-60">
                        Men's Shoes
                      </h1>
                      <div className="flex gap-2 opacity-80 ">
                        <h1 className="text-lg font-medium tracking-wide text-red-500 line-through">
                          MRP : ₹ {x.discountPrice}.00
                        </h1>
                        <h1 className="text-xl font-medium tracking-wide">
                          MRP : ₹ {x.discountPrice}.00
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
