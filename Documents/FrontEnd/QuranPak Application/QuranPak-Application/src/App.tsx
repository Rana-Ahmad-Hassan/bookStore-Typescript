import AppRoutes from "./Routes/appRoutes";


import "./App.css";
import { useEffect, useState } from "react";
import PreLoader from "./components/preLoader/preLoader";

function App() {
  // set the state for the pre loader of the website
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect for the set the time for the loading state for the 3 sec using the setTimeout function
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>


      {/* set the condition if the loading is true show the pre loader otherwise render the app component */}
      {
        loading ? <PreLoader/> : <AppRoutes />
      }




    </>
  );
}

export default App;
