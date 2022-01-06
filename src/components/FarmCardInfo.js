import React, { useState } from "react";
import "../styles/findFarm.css";
import FarmCard from "./FarmCard";

function FarmCardInfo() {
  const [booking, setBooking] = useState([
    {
      id: 1,
      farmImg:
        "https://jostorage.yalla.deals/products/YD_aldwikat-IDDKT6068_11603647379.jpg",
      farmName: "Nashmi",
      farmExp: 7,
      farmDes: "Hello!my hobbies are drawing ,)",
      farmPrice: 50,
    },
    {
      id: 2,
      farmImg: "https://go-assets.devops.arabiaweather.com/2021-07/xc_6.jpg",
      farmName: "Al-DANA",
      farmExp: 8,
      farmDes: "Hello!my hobbies are drawing ,)",
      farmPrice: 60,
    },
    {
      id: 3,
      farmImg:
        "https://go-assets.devops.arabiaweather.com/2021-08/123456100.jpg",
      farmName: "Sun",
      farmExp: 10,
      farmDes: "Hello!my hobbies are drawing ,)",
      farmPrice: 50,
    },
    {
      id: 4,
      farmImg:
        "http://go-admin.arabiaweather.com/sites/default/files/2021-07/123456220_2.jpg",
      farmName: "Evergreen",
      farmExp: 3,
      farmDes: "Hello!my hobbies are drawing ,)",
      farmPrice: 30,
    },
    {
      id: 5,
      farmImg:
        "http://go-admin.arabiaweather.com/sites/default/files/2021-04/026_2347383505350212_7707841377047937024_m.jpg",
      farmName: "Teresa",
      farmExp: 9,
      farmDes: "Hello!my hobbies are drawing ,)",
      farmPrice: 70,
    },
    {
      id: 6,
      farmImg:
        "http://go-admin.arabiaweather.com/sites/default/files/2021-09/10_23.jpg",
      farmName: "Nebo",
      farmExp: 10,
      farmDes: "Hello!my hobbies are drawing ,)",
      farmPrice: 50,
    },
    {
      id: 7,
      farmImg: "https://go-assets.devops.arabiaweather.com/2021-07/xc_10.jpg",
      farmName: "Bronze",
      farmExp: 8,
      farmDes: "Hello!my hobbies are drawing ,)",
      farmPrice: 60,
    },
    {
      id: 8,
      farmImg:
        "https://jostorage.yalla.deals/products/YD_aldwikat-IDDKT6068_11603647379.jpg",
      farmName: "Royal",
      farmExp: 7,
      farmDes: "Hello!my hobbies are drawing ,)",
      farmPrice: 50,
    },
  ]);
  const bookedArrFromStorage = localStorage.getItem("bookingDetails")
    ? JSON.parse(localStorage.getItem("bookingDetails"))
    : "TEST";

  return (
    <div className="container">
      {booking.map((item) => {
        return <FarmCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default FarmCardInfo;
