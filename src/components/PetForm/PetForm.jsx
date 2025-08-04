import { useState } from "react"
const PetForm = (props) => {
    const [formData, setFormData] = useState({
        name: '', 
        age: '', 
        breed: '',
    })
    const handleChange=(evt)=>{
        setFormData({...formData,[evt.target.name]:evt.target.value})
    }
    const handleSubmit=(evt)=>{
        evt.preventDefault()
        props.handleAddPets(formData)
    }
    return (

    <>
        <form>
            <label htmlFor="name">Name: </label>
            <input type='text' id="name" name="name" value={formData.name} onChange={handleChange} required/>
            <label htmlFor="age">Age: </label>
            <input type='text' id='age' name="age" value={formData.age} onChange={handleChange} required/>
            <label htmlFor="breed">Breed: </label>
            <input type='text' id='breed' name='breed' value={formData.breed} onChange={handleChange} required/>
            <button type="submit">Add a new pet </button>
        </form>
    </>
    )
}
export default PetForm