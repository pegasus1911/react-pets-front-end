// src/App.jsx
import { useState, useEffect } from 'react';
import * as petServices from '../src/services/petService.js'
import PetList from '../src/components/petList/petList.jsx'
import PetDetail from '../src/components/PetDetail/PetDetail.jsx';

const App = () => {
  const [pets, setPets] = useState([])
  const [selectedPet, setSelectedPet] = useState(null)

  const handleSelectedPet = (pet) => {
    setSelectedPet(pet)
  }
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
  }, [])
  return (

    <>
      <h1>Hello world!</h1>;
      <PetList pets={pets} handleSelectedPet={handleSelectedPet} />
      <PetDetail selected={selectedPet} />

    </>
  )
};
export default App;


