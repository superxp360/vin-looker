"use client"

import { useState } from "react";
import CarInfo from "./CarInfo";

export default function SearchVin() {
  const [vin, setVin] = useState("");
  const [carData, setCarData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch VIN data from the API
  const fetchVinData = async (url) => {
    try {
      setIsLoading(true); // Set loading state to true
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setTimeout(() => {
        setCarData(data); // Set the fetched data after 2 seconds
        setIsLoading(false); // Set loading state to false
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false); // Set loading state to false in case of an error
    }
  };

  // Handle button click event
  const handleButtonClick = () => {
    if (vin) {
      const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${vin}?format=json`;
      fetchVinData(url);
    }
  };

  // Set a sample VIN for testing
  const sampleVin = () => {
    setVin("1G1JC5444R7252367");
  };

  return (
    <div className="flex justify-center w-full h-full bg-image">
      <div className="flex flex-col justify-center items-center mt-[70px] mx-auto w-[300px] md:w-[500px] p-2 m-5">
        <div>
          <h1 className="font-semibold text-4xl md:text-5xl text-center m-2 text-slate-800 ">VIN Looker</h1>
        </div>

        <div className="m-2 p-2  w-full ">
          <h2 className="text-sm w-full text-center text-gray-800 md:text-lg">
            A car's VIN (Vehicle Identification Number) is a unique code that serves as the vehicle's identification card.
          </h2>
        </div>

        <div className="flex flex-col w-full m-1">
          <div className="flex flex-row justify-center mt-3">
            <div className="border-2 border-slate-500 bg-white h-[50px] w-[500px] rounded-2xl flex flex-row">
              <input
                type="text"
                placeholder="Enter VIN #"
                className="border-none focus:outline-none rounded-full w-full p-2 text-sm md:text-xl"
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
              <button className="text-xs bg-gray-800 text-white rounded-xl w-[160px] h-[46px] ml-1 md:text-[16px] md:w-[200px]" onClick={handleButtonClick}>
                <p>Start Search</p>
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="m-1 mt-2 text-xs bg-slate-500 rounded-xl w-[80px] p-1" onClick={sampleVin}>
              Try a VIN!
            </button>
          </div>
        </div>

        <div className="m-2 w-full">
          {isLoading ? ( // Display loading message while fetching VIN data
            <div className="flex justify-center items-center h-40">
              <p className="text-slate-700">Searching VIN...</p>
            </div>
          ) : (
            carData && carData.Results[0].Make && carData.Results[0].ModelYear && carData.Results[0].Model && ( // Check if car data is available before rendering CarInfo component
              <CarInfo
                vin={carData.Results[0].VIN}
                make={carData.Results[0].Make}
                modelYear={carData.Results[0].ModelYear}
                model={carData.Results[0].Model}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}