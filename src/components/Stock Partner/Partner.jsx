import React from 'react'
import './Partner.css'
import Marquee from 'react-fast-marquee'
const Partner = () => {
  return (
  <div id='mr-que'>

    <h1 className='text-center'>Trading Partner</h1>
    <p className='text-center'>Top notch global trusted companies, 
    Where we buy stocks & trade in market accrodingly. </p>
  
    <div id='marque'>
      <Marquee play>
        <div className="img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" /></div>
        <div className="img"><img src="https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys" /></div>
        <div className="img"><img src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" /></div>
        <div className="img"><img src="https://logos-world.net/wp-content/uploads/2021/10/Tata-Logo.png" /></div>
        <div className="img"><img src="https://listcarbrands.com/wp-content/uploads/2017/11/logo-Mahindra.jpg" /></div>
      </Marquee>
    </div>
    <div id='marque'>
      <Marquee play direction='right'>
        <div className="img"><img src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png" /></div>
        <div className="img"><img src="https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png" /></div>
        <div className="img"><img src="https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo.png" /></div>
        <div className="img"><img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png" /></div>
        <div className="img"><img src="https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo-2005-present.jpg"/></div>
      </Marquee>
    </div>
    </div>
  )
}

export default Partner
