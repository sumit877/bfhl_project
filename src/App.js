import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  const [responseData, setResponseData] = useState(null);

  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",gap:"5px"}}>
      <h1 style={{background:"grey",borderRadius:"10px", padding:"5px 5px"}}>0827AL211063</h1>
      <InputForm setResponseData={setResponseData} />
      {responseData && <ResponseDisplay data={responseData} />}
    </div>
  );
};

export default App;
