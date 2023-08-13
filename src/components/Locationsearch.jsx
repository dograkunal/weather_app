import React, { useState } from "react";

function Locationsearch({ setSearchLocation, handleClick, value }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Location"
        value={value}
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Locationsearch;
