import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setResponseData }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFile(reader.result); // Base64 string
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(jsonInput);
      const payload = {
        ...parsedData,
        file_b64: file || "",
      };
      const response = await axios.post("http://localhost:5000/bfhl", payload);
      setResponseData(response.data);

      console.log("API RESPONSE",response);
      setError("");
    } catch (err) {
      setError("Invalid JSON or API Error");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h2>Enter Input Data</h2>

      {/* JSON Textarea */}
      <label  style={{display:"flex",flexDirection:"column",fontSize:"1em",fontWeight:"bold",gap:"10px"}}>
        JSON Input:
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Example: {"data": ["A", "1", "b", "3"]}'
          rows={5}
          cols={50}
        ></textarea>
      </label>

      {/* File Input */}
      <label style={{display:"flex",gap:"20px",marginTop:"2rem", marginBottom:"1rem"}}>
        Upload File (optional):
        <input type="file" onChange={handleFileChange} accept=".png,.jpg,.pdf" />
      </label>

      <button style={{border:"1px",background:"aqua",padding:"5px 10px",borderRadius:"10px",marginBottom:"2rem"}} type="submit">Submit</button>

      {/* Error Handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default InputForm;
