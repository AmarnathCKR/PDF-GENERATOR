import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Loading from "./components/Loading";

function App() {
  const [loader, setLoader] = useState(false);
  return (
    <>
    {loader && <div className="z-[999] loader-local bg-secondary"><Loading /></div>}
      <Home loading={(s)=>setLoader(s)} />
    </>
  );
}

export default App;
