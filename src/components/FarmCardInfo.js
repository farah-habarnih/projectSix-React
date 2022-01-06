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
      farmLocation: "Amman",
      farmDes: "Three bedrooms",
      farmPrice: 50,
    },
    {
      id: 2,
      farmImg: "https://go-assets.devops.arabiaweather.com/2021-07/xc_6.jpg",
      farmName: "Al-DANA",
      farmLocation: "Jarash",
      farmDes: "Three bedrooms",
      farmPrice: 60,
    },
    {
      id: 3,
      farmImg:
        "https://go-assets.devops.arabiaweather.com/2021-08/123456100.jpg",
      farmName: "Sun",
      farmLocation: "Amman",
      farmDes: "Two bedrooms",
      farmPrice: 50,
    },
    {
      id: 4,
      farmImg:
        "http://go-admin.arabiaweather.com/sites/default/files/2021-07/123456220_2.jpg",
      farmName: "Evergreen",
      farmLocation: "Ajloun",
      farmDes: "One Bedroom",
      farmPrice: 30,
    },
    {
      id: 5,
      farmImg:
        "http://go-admin.arabiaweather.com/sites/default/files/2021-04/026_2347383505350212_7707841377047937024_m.jpg",
      farmName: "Teresa",
      farmLocation: "Al-Salt",
      farmDes: "Four Bedroom",
      farmPrice: 70,
    },
    {
      id: 6,
      farmImg:
        "http://go-admin.arabiaweather.com/sites/default/files/2021-09/10_23.jpg",
      farmName: "Nebo",
      farmLocation: "Dead Sea",
      farmDes: "Two bedrooms",
      farmPrice: 50,
    },
    {
      id: 7,
      farmImg: "https://go-assets.devops.arabiaweather.com/2021-07/xc_10.jpg",
      farmName: "Bronze",
      farmLocation: "Mafraq",
      farmDes: "Three bedrooms",
      farmPrice: 60,
    },
    {
      id: 8,
      farmImg:
        "https://jostorage.yalla.deals/products/YD_aldwikat-IDDKT6068_11603647379.jpg",
      farmName: "Royal",
      farmLocation: "Irbid",
      farmDes: "Two bedrooms",
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
