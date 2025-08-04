// src/App.jsx
import { useState, useEffect } from 'react';
import * as petServices from '../src/services/petService.js'
import PetList from '../src/components/petList/petList.jsx'
import PetDetail from '../src/components/PetDetail/PetDetail.jsx';
import PetForm from '../src/components/PetForm/PetForm.jsx'
const App = () => {
  const [pets, setPets] = useState([])
  const [selectedPet, setSelectedPet] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleFormOpen = () => {
    setIsFormOpen(!isFormOpen)
  }
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
  const handleAddPets=async(formData)=>{
    try{
      const newPet=await petServices.create(formData)
      if(newPet.err){
        throw new Error(newPet.err)
      }
      setPets([pets,...newPet])
      setIsFormOpen(false)
      console.log(newPet)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <h1>Hello world!</h1>;
      <PetList
       pets={pets} 
       handleSelectedPet={handleSelectedPet}
        handleFormOpen={handleFormOpen}
         isFormOpen={isFormOpen}
          />
      {isFormOpen ? (<PetForm handleAddPets={handleAddPets}/>) : (<PetDetail selected={selectedPet} />
      )}

    </>
  )
};
export default App;


