import React from "react";
import img from "../assets/home.jpg";
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';


export default function Home() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div>
      <div>
      <div
        className="  bg-center bg-cover w-full h-[500px] flex justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div
          className="text-4xl font-sans font-bold text-white"
      
        >
          Web Developer
        </div>
      </div>
      </div>
    </div>
  );
}

