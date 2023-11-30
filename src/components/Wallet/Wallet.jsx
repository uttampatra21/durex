import "./Wallet.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Wallet = () => {
  const storgeData =
    localStorage.getItem("userXdata") != null
      ? JSON.parse(localStorage.getItem("userXdata"))
      : [];

  return (
    <div id="wallet">
      <div id="wallet-nav" className="">
        <div className="flex" id="walet-cont">
          <div className="bg-img">
            <img src="https://github.com/uttampatra21/public/raw/main/money.png" />
          </div>

          <div className="">
            <div className="flex flex-col justify-between gap-5 py-5">
              {storgeData.taskIncome >= 500 ? (
                <NavLink to="/tWithdraw">
                  <button class="btn w-full btn-outline btn-warning ">
                    Task Income{" "}
                    <h1 className="flex items-start ">
                      <small>₹</small>
                      {storgeData.taskIncome}.99
                    </h1>
                  </button>
                </NavLink>
              ) : (
                <button class="btn w-full btn-outline btn-warning ">
                  Task Income{" "}
                  <h1 className="flex items-start ">
                    <small>₹</small>
                    {storgeData.taskIncome}.99
                  </h1>
                </button>
              )}

              {storgeData.reffer.length*100 >= 100 ? (
                <NavLink to="/rWithdraw">
                  <button class="btn btn-outline btn-accent">
                    Refferal Income{" "}
                    <h1 className="flex items-start ">
                      <small>₹</small>
                      {storgeData.reffer.length*100}.99
                    </h1>
                  </button>
                </NavLink>
              ) : (
                <button class="btn btn-outline btn-accent">
                  Refferal Income{" "}
                  <h1 className="flex items-start ">
                    <small>₹</small>
                    {refferalincome}.99
                  </h1>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id="payment" className="py-5">
        <div class="text-center flex flex-col items-center max-w-xl mx-auto">
          <h1 class="text-3xl md:text-7xl font-bold mb-5 text-white">
            Payment Partner
          </h1>
          <h3 class="text-md mb-5 font-light text-white px-4">
            Our global payment partners constantly giving seamless withdrawl
            experience. Additionally we are providing{" "}
            <span class="text-lg leading-none italic font-bold text-cyan-500 mr-1">
              "
            </span>
            <span
              className="px-1.5"
              style={{
                borderBottom: "2px solid rgb(6 182 212)",
                borderRadius: "10px",
                paddingBottom: "3px",
              }}
            >
              no payment charges
            </span>
            <span class="text-lg leading-none italic font-bold text-cyan-500 mr-1">
              "
            </span>
          </h3>
          <div class="text-center mb-10">
            <span class="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
            <span class="inline-block w-3 h-1 rounded-full bg-emerald-500 ml-1"></span>
            <span class="inline-block w-40 h-1 rounded-full bg-teal-500"></span>
            <span class="inline-block w-3 h-1 rounded-full bg-cyan-500 ml-1"></span>
            <span class="inline-block w-1 h-1 rounded-full bg-sky-500 ml-1"></span>
          </div>
        </div>

        <ul id="meth-ul">
          <li className="payment-meth">
            <img src="https://www.mmaglobal.com/files/styles/member_logo_large/public/logos/phonepe_logo.png?itok=kQwv5E2X" />
          </li>
          <li className="payment-meth">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" />
          </li>
          <li className="payment-meth">
            <img src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg" />
          </li>
          <li className="payment-meth">
            <img src="https://getlogo.net/wp-content/uploads/2020/10/unified-payments-interface-upi-logo-vector.png" />
          </li>
          <li className="payment-meth">
            <img src="https://nuvei.com/wp-content/uploads/2021/06/regular-bank-transfer.png" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Wallet;
