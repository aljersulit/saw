import React from "react";

import assets from "../../assets";

function SubHeading({ title }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p>{title}</p>
      <img src={assets.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
}

export default SubHeading;
