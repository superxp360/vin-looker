export default function CarInfo(props) {
    const { vin, country, manufacturer, region, years } = props;
  
    return (
      <>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
          <div className="w-full p-4 bg-red-500">
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              VIN: {vin}
            </p>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              Country: {country}
            </p>
            <p>
              Manufacturer: {manufacturer}
            </p>
            <p>
              Region: {region}
            </p>
            <p>
              Years: {years.reverse().join('-')}
            </p>
          </div>
        </div>
      </>
    );
  }