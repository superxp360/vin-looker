export default function SearchVin() {

    return(
        <> 
        <div className="flex flex-col justify-center w-full items-center  mt-5 py-20">
            <h1 className=" font-medium w-[400px] text-5xl text-center m-2">VIN Looker</h1>

            <h2 className="text-xl text-center">Just enter your cars VIN# to find more Information about your car</h2>
            <div className="flex justify-center w-[400px]">
                <div className="flex flex-row border-2 border-gray-500 m-5 bg-white h-[50px] w-[400px] rounded-xl">
                    <input type="text" placeholder="Enter VIN" className="border-none focus:outline-none rounded-full w-full p-2" />
                    <button className=" w-[20px] m-1 rounded-md shadow-sm sm:text-sm">
                    <img src="./images/searchIcon.png" alt="Search" className="w-[15px] h-[15px]" />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}