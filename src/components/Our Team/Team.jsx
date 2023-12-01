import React from "react";
import "./Team.css";
import TeamCard from "../Cards/TeamCard";

const Team = () => {
  return (
    <div id="our-team" className="text-center">
      <h1 className="text-white text-4xl">Our Team</h1>
      <p className="text-white text-2xl">
        Dynamically pursue reliable convergence rather than 24/7 process
        improvements develop end-to-end customer service.
      </p>
      <div id="team-card" className="flex flex-wrap justify-center gap-10">
        <TeamCard
          img={
            "https://media.istockphoto.com/id/638979154/photo/hes-mastered-the-ability-to-maintain-control-over-his-career.jpg?s=612x612&w=0&k=20&c=ZJceM_szKefgdX0KPEIp3f4NbG83GStAh2Tn3rrBjl8="
          }
          name={"Raj Kapoor"}
          title={"India, Trade Businessman"}
          descripton="corporX is asia's largest marketing company. Our company holding global's top notch marketing like Google, Apple, Microsoft, Amazon, Tata, Adani Group etc."
        />
        <TeamCard
          img={
            "https://media.istockphoto.com/id/636010484/photo/portrait-of-young-man-looking-away-against-gray-background.jpg?s=612x612&w=0&k=20&c=_D9T6cqcPzv2edlspLvc8Kho0_9fRc9vMQhbf7Su4xI="
          }
          name={"Elen Methews"}
          title={"America, Market Leader"}
          descripton="corporX is asia's largest marketing company. Our branding holding global's top notch companies stocks like Google, Apple, Microsoft, Amazon, Tata, Adani Group etc."
        />
        <TeamCard
          img={
            "https://www.johnogroat-journal.co.uk/_media/img/KE0L54VE3PYJQ40LYZYJ.jpg"
          }
          name={"Dengh Lyphen"}
          title={"USA, CEO Dylth PVT"}
          descripton="corporX is asia's largest marketing company. Our brand holding global's top notch companies stocks like Google, Apple, Microsoft, Amazon, Tata, Adani Group etc."
        />
      </div>
    </div>
  );
};

export default Team;
