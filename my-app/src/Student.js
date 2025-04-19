import React from "react";

const Student = ({ name, grade,age }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" , backgroundColor:"oklch(89.9% 0.061 343.231)"}}>
      <h2>{name}</h2>
      <p>Grade: {grade}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Student;
