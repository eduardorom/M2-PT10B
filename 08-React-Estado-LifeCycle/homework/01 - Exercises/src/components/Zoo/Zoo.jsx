/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"; // import React {useState} from "react" // si no usaramos React.useState (linea 11)
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({  // se usa React.useState para que corran los tests
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });
  React.useEffect(() => {
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  }, []);
  // eslint-disable-next-line
  function handleSpecies(e) {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter( // filter devuelve un arreglo de animales nuevo según la condición de filtrado
        ({ specie }) => specie === e.target.value // animal => animal.specie === e.target.value
      ),
    });
  }
  function handleAllSpecies() {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals,
    });
  }

  function handleInputChange(e) {
    setZoo({
      ...zoo,
      zooName: e.target.value,
    });
  }

  return (
    <div>
      <label htmlFor="">Zoo Name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>
      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />
      <Animals animals={zoo.animals} />
    </div>
  );
}

