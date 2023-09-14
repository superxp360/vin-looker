export default function CarInfo(props) {
    const { vin, country, manufacturer, region, years } = props;
  
    return (
      <>
        <div className="hover:cursor p-2 border-2 border-gray-700 bg-slate-50 rounded-lg shadow-lg text-left">
          <div>
                <p className="text-md m-1 font-medium text-black">
                VIN: {vin}
                </p>
                <p className="text-md m-1 font-medium text-black">
                Country: {country}
                </p>
                <p className="text-md m-1 font-medium text-black">
                Manufacturer: {manufacturer}
                </p>
                <p className="text-md m-1 font-medium text-black">
                Region: {region}
                </p>
                <p className="text-md m-1 font-medium text-black">
                Years: {years.sort().join('-')}
                </p>
          </div>
        </div>
      </>
    );
  }