"use client"

import { useState, useEffect } from "react";
import CarInfo from "./CarInfo";

export default function SearchVin() {
  const [vin, setVin] = useState('');
  const [carData, setCarData] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCarData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (vin) {
      const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${vin}?format=json`;
      fetchData(url);
    }
  }, [vin]);

  const handleButtonClick = () => {
    if (vin) {
      const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${vin}?format=json`;
      fetchData(url);
    }
  };

  const handleRandomVinClick = async () => {
    const url = "https://randomvin.com/getvin.php?type=real";
    try {
      const response = await fetch(url);
      const data = await response.text();
      const json = { VIN: data };
      setVin(data); // Update the state with the random VIN
      fetchData(url); // Fetch car information for the random VIN
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex flex-col justify-center items-center mt-[70px] mx-auto border-2 border-black w-[300px] p-5 m-5 rounded-3xl bg-slate-50">
        <div>
          <h1 className="font-medium text-3xl text-center m-2 ">VIN Looker</h1>
        </div>

        <div className="rounded-3xl m-2 p-2">
          <h2 className="text-md text-center">
            A car's VIN (Vehicle Identification Number) is a unique code that serves as the vehicle's identification card. It contains information about the car's manufacturer, model, production year, and more. It's like a car's fingerprint and is used to track and identify vehicles by law enforcement, insurance companies, and others.
          </h2>
        </div>

        <div>
          <img className="m-2" src="./images/vin-decoder.avif" alt="VIN Decoder"></img>
        </div>

        <div className="flex flex-col justify-center w-full p-2">
          <div className="flex flex-row justify-center">
            <div className="border-2 border-gray-500 bg-white h-[50px] w-full rounded-xl flex">
              <input
                type="text"
                placeholder="Enter VIN"
                className="border-none focus:outline-none rounded-full w-full p-2 bg-slate-50 text-md"
                value={vin}
                onChange={(event) => {
                  const inputValue = event.target.value;
                  if (inputValue.length <= 17) {
                    setVin(inputValue);
                  } else {
                    setVin(inputValue.slice(0, 17));
                  }
                }}
              />
              <button className="w-auto m-3" onClick={handleButtonClick}>
                <img src="./images/searchIcon.png" alt="Search" className="w-[18px] h-[15px]" />
              </button>
            </div>
          </div>
          <p className="flex flex-row justify-end mr-2 m-1 text-xs" onClick={handleRandomVinClick}>
            Try a VIN!
          </p>
        </div>

        <div className="m-2 w-full">
          {carData && (
            <CarInfo
              make={carData.Results[0].Make}
              modelYear={carData.Results[0].ModelYear}
              model={carData.Results[0].Model}
            />
          )}
        </div>
      </div>
    </div>
  );
}