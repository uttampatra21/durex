import React from "react";
import NewsCard from "../Cards/NewsCard";

const LetestNews = () => {
  return (
    <div
      className="flex items-center justify-center gap-10 overflow-auto"
      style={{ background: "whitesmoke" }}
    >
      <NewsCard img={"https://corporx.themetags.com/assets/img/blog/4.jpg"} />
      <NewsCard img={"https://corporx.themetags.com/assets/img/blog/2.jpg"} />
      <NewsCard img={"https://corporx.themetags.com/assets/img/blog/1.jpg"} />
      <NewsCard
        img={
          "https://img.freepik.com/free-photo/business-proposal-purchase-hands-holding-money_53876-128955.jpg"
        }
      />
    </div>
  );
};

export default LetestNews;
