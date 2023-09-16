export default function CarInfo(props) {
  const { make, modelYear, model, vin} = props;

  return (
    <>
      <div className="hover:cursor p-2 border-2 border-gray-700 bg-slate-50 rounded-lg shadow-lg text-left">
        <div>
          <p className="text-md m-1 font-medium text-black">VIN: {vin}
          </p>
          <p className="text-md m-1 font-medium text-black">
            Year: {modelYear}
          </p>
          <p className="text-md m-1 font-medium text-black">
            Make: {make}
          </p>
          <p className="text-md m-1 font-medium text-black">
            Model: {model}
          </p>
        </div>
      </div>
    </>
  );
}