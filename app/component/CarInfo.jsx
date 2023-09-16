export default function CarInfo(props) {
  const { make, modelYear, model, vin} = props;

  return (
    <>
      <div className="hover:cursor p-2 border-2 w-full border-slate-950 bg-slate-900 rounded-lg shadow-lg text-left">
        <div>
          <p className="text-md m-1 font-medium text-white">VIN: {vin}
          </p>
          <p className="text-md m-1 font-medium text-white">
            Year: {modelYear}
          </p>
          <p className="text-md m-1 font-medium text-white">
            Make: {make}
          </p>
          <p className="text-md m-1 font-medium text-white">
            Model: {model}
          </p>
        </div>
      </div>
    </>
  );
}