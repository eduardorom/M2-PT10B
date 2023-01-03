import React from "react";
import Botones from "./Botones.jsx";

const studentName = "EDUARDO";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
  <div>
    <h1>BIENVENIDOS A REACT</h1>
    <h3>{studentName}</h3>
    <ul>
      {techSkills.map(skills => 
        <li key={skills}>
          {skills}
        </li> )}
    </ul>
    <Botones alerts={alerts}/>
    </div>
    );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
