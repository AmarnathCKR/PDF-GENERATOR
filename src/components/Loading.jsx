import { ScaleLoader } from "react-spinners";

function Loading() {
  return (
    <>
      <div className="text-center p-20 rounded bg-white">
        <p className="text-lg text-black flex items-center gap-3 font-bold mb-4">
          Please wait while we generate the report
          <ScaleLoader color="#36d7b7" />
        </p>
        
      </div>
    </>
  );
}

export default Loading;
