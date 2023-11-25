import React from "react";
import "./Partner.css";
import Marquee from "react-fast-marquee";
const Partner = () => {
  return (
    <div id="mr-que">
      <div class="text-center flex flex-col items-center max-w-xl mx-auto">
        <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
          Global Trading Partner 
        </h1>
        <h3 class="text-xl mb-5 font-light">
        Top notch global trusted companies, Where we buy stocks & trade in
        market accrodingly.
        </h3>
        <div class="text-center mb-10">
          <span class="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-emerald-500 ml-1"></span>
          <span class="inline-block w-40 h-1 rounded-full bg-teal-500"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-cyan-500 ml-1"></span>
          <span class="inline-block w-1 h-1 rounded-full bg-sky-500 ml-1"></span>
        </div>
      </div>
      <div id="marque">
        <Marquee play>
          <div className="img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" />
          </div>
          <div className="img">
            <img src="https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys" />
          </div>
          <div className="img">
            <img src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" />
          </div>
          <div className="img">
            <img src="https://logos-world.net/wp-content/uploads/2021/10/Tata-Logo.png" />
          </div>
          <div className="img">
            <img src="https://listcarbrands.com/wp-content/uploads/2017/11/logo-Mahindra.jpg" />
          </div>
        </Marquee>
      </div>
      <div id="marque">
        <Marquee play direction="right">
          <div className="img">
            <img src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png" />
          </div>
          <div className="img">
            <img src="https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png" />
          </div>
          <div className="img">
            <img src="https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo.png" />
          </div>
          <div className="img">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png" />
          </div>
          <div className="img">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo-2005-present.jpg" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
