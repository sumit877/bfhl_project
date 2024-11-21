import React, { useState } from "react";

const ResponseDisplay = ({ data }) => {
  const [filter, setFilter] = useState([]);

  const handleFilterChange = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setFilter(value);
  };

  const filteredData = filter.reduce((acc, key) => {
    if (data[key]) acc[key] = data[key];
    return acc;
  }, {});

  return (
    <div>
      <select multiple onChange={handleFilterChange}>
        <option value="alphabets">Alphabets</option>
        <option value="numbers">Numbers</option>
        <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
      </select>
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;
