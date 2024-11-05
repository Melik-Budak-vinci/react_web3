import { useEffect, useState } from 'react'
import Person from '../Person/Person'
import service from '../model/DataAccess'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const handleNewName = (event)=>{
    setNewName(event.target.value)

    
    
  }
  const handleNewNumber = (event)=>{
    setNewNumber(event.target.value)

    
    
  }
  const handleUpPersons=(e)=>{
    e.preventDefault();
    const newName1 = e.target.elements.newName.value;
    const newNumber1 = e.target.elements.newNumber.value;

    console.log(newName1);

    if(persons.map(p=>p.name.toLowerCase()).includes(newName1)){
      alert(`${newName1} est deja connu du systeme`)
    }else{
      const newPerson = {name:newName1, number:newNumber1}
      service.addOnePerson(newPerson)
      setPersons(persons.concat(newPerson))    

    }
    
  }
  useEffect( ()=> {service.getAllName().then(names=> setPersons(names))},[])


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleUpPersons}>
        <div>
          name: <input value={newName} onChange={handleNewName} name='newName'/>
        </div>
        <div> Number: <input value={newNumber} onChange={handleNewNumber} name='newNumber' /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p)=> <Person key={p.name} person={p}/> )}

      </ul>
    </div>
  )
}

export default App