// src/App.jsx
import { useState, useEffect } from 'react';
import * as petServices from '../src/services/petService.js'
import PetList from '../src/components/petList/petList.jsx'
const App = () => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petServices.index()
        if (fetchedPets.err) {
          throw new Error(fetchedPets.err)
        }
        setPets(fetchedPets)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchPets()
  }, [] )
  return (

    <>
      <h1>Hello world!</h1>;
      <PetList pets={pets} />

    </>
  )
};
export default App;


