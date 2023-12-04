import React, { useEffect } from "react";

const SingelProduct = () => {
  useEffect(() => {
    const id = location.pathname;
    console.log(id);
  }, []);
  return <div></div>;
};

export default SingelProduct;
