import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import arrow_icon from "../imgs/arrow_icon.png";
import img_nav from "../imgs//pattern-bg-desktop.png";

// NAVBAR COMPONENT
export default function Navbar() {
  const [bagOfElement, setBagOfElement] = useState({
    ip: "",
    country_name: "",
    time_zone: "",
    zip_code: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://api.ipbase.com/v1/json/");
        const result = await data.json();
        const newBagOfElement = {
          ip: result.ip,
          time_zone: result.time_zone,
          country_name: result.country_name,
          zip_code: result.zip_code,
        };
        setBagOfElement(newBagOfElement);
        console.log(newBagOfElement);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="header_title">
          <h1>IP Address Tracker</h1>
        </div>
        <div className="input_ip">
          <input
            placeholder="Search for any IP address or domain"
            id="input_adress_ip"
            type="text"
          ></input>
          <button id="btn_send" type="submit">
            <img src={arrow_icon} alt="arrow icon"></img>
          </button>
        </div>
        <div className="Information">
          <div className="info_box">
            <p>IP ADDRESS</p>
            <h1>{bagOfElement.ip}</h1>
          </div>
          <div className="info_box">
            <p>LOCATION</p>
            <h1>{bagOfElement.country_name}</h1>
          </div>
          <div className="info_box">
            <p>TIME ZONE</p>
            <h1>{bagOfElement.time_zone}</h1>
          </div>
          <div className="info_box">
            <p>ZIP CODE</p>
            <h1>{bagOfElement.zip_code}</h1>
          </div>
          {/* Other JSX elements using properties from bagOfElement */}
        </div>
      </div>
    </React.Fragment>
  );
}
