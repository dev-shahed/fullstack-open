import React, { Fragment } from "react";

export default function Filter({ filterData, setFilterData }) {
  return (
    <Fragment>
      <h4 style={{ marginBottom: "10px" }}>Filter shown with </h4>
      <input
        value={filterData}
        placeholder="Search here"
        onChange={(event) => setFilterData(event.target.value)}
        type="text"
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "200px",
          marginBottom: "20px",
        }}
      />
    </Fragment>
  );
}
