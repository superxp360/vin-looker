"use client"

import { useEffect, useState } from "react";
import { apiKey } from "../secrets";
import CarInfo from "./CarInfo";

export default function SearchVin() {
  const [vin, setVin] = useState('');
  const [carData, setCarData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/vinlookup?vin=${vin}`, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      const data = await response.json();
      setCarData(data);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setVin(event.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <>
      <div className="flex flex-col justify-center w-full items-center mt-[40px]  mx-auto">
        <h1 className="font-medium w-[400px] text-5xl text-center m-2">VIN Looker</h1>

        <h2 className="text-xl text-center">
          Just enter your car's VIN# to find more information about your car
        </h2>
        <div className="flex justify-center w-[400px]">
          <div className="flex flex-row border-2 border-gray-500 m-5 bg-white h-[50px] w-[400px] rounded-xl">
            <input
              type="text"
              placeholder="Enter VIN"
              className="border-none focus:outline-none rounded-full w-full p-2"
              value={vin}
              onChange={handleInputChange}
            />
            <button
              className="w-[20px] m-1 rounded-md shadow-sm sm:text-sm"
              onClick={handleButtonClick}
            >
              <img src="./images/searchIcon.png" alt="Search" className="w-[15px] h-[15px]" />
            </button>
          </div>
        </div>

        {carData && <CarInfo vin={carData.vin} country={carData.country} manufacturer={carData.manufacturer} region={carData.region} years={carData.years} />}
      </div>
    </>
  );
}