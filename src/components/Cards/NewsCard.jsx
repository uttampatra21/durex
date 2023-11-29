import React from "react";
const NewsCard = ({ img }) => {
  return (
    <div>
      <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-72 md:w-72 cursor-pointer m-auto">
        <div className="w-60 block h-full">
          <img
            alt="blog photo"
            src={img}
            className="max-h-40 w-full object-cover"
          />
          <div className="bg-white w-full p-4">
            <p className="text-indigo-500 text-2xl font-medium">
              Should You Get Online Education?
            </p>
            <p className="text-gray-800 text-sm font-medium mb-2">
              A comprehensive guide about online education.
            </p>
            <p className="text-gray-600 font-light text-md">
              It is difficult to believe that we have become so used to having
              instant access to information at...
              <a className="inline-flex text-indigo-500" href="#">
                Read More
              </a>
            </p>
            <div className="flex items-center mt-2">
              <img
                className="w-10 h-10 object-cover rounded-full"
                alt="User avatar"
                src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
              />

              <div className="pl-3">
                <div className="font-medium">Jean Marc</div>
                <div className="text-gray-600 text-sm">CTO of Supercars</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
