const PetList = (props) => {
    console.log(props)
    return (
        <dev>
            <h1>Pet List</h1>
            <div>
                {!props.pets.length?(
                    <h2>There is no pets</h2>
                ):(

                    <ul>
                    {props.pets.map((pet) => (
                        <li key={pet._id}>{pet.name}</li>
                    ))}
                </ul>
                )}
            </div>
        </dev>
    )
}

export default PetList