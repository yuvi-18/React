import React from "react";
import Student from "./Student";

const studentsData = [
  { name: "Yuvi", grade: "A (top)" , age:19},
  { name: "papu", grade: "B", age:20 },
  { name: "sourhadya", grade: "E (Fail)",age:19 },
  { name: "Dhruv", grade:"B (papu 2)", age:20}
];

const App = () => {
  return (
    <div>
      <h1>Student List</h1>
      {studentsData.map((student, index) => (
        <Student key={index} name={student.name} grade={student.grade} age={student.age} />
      ))}
    </div>
  );
};

export default App;
