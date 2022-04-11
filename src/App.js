


import React, { useState } from 'react'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Christofor '}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')


  const inputTextName = "Add new persons name..."
  const inputNumberValue = "Add new Number value..."




  const submitPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      phonenumber: newNumber,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: persons.length + 1,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const submitNumber = (event) => {
    event.preventDefault()
    const NumberObject = {
      phonenumber:newNumber,
    }

    setNewNumber(Number.concat())
    setNewNumber('')
  }


  const handleNameChange = (event) => {

    console.log(event.target.value)
    setNewName(event.target.value)

  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  


 // we initialized variables, which get its place, when adding name to input (FormComponent => props).

// When user ads new information to under the table, it doing function, which is in belove ( submitperson) ja saves information below "nameobject" variables.
// The nameobject variables can be as follows (nameObject[0] => {name,phonenumber,date,important, id} => {}

// there is already two diffrent values in "persons", so we are always adding new values to continue current values,  for this we are using concat() function.
   // When site conduct this fucntion (submitPerson), its clear that table, whereas this not used, then it value will leave hang visible.
  

// in input (where newname has been added) its implement value={newName}, in practically this variables saves (setNewnames =>) and all what user wrting. 



   // console log is printing same things before when user writes anything to input. => newName
   // when user writing value = "Christofor"as a result  function save its value setNewName => then NewName= Christofor 


   return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={submitPerson}><input value={newName}onChange={handleNameChange}placeholder={inputTextName}/><button type="submit">add</button>
      </form>

      <h2>Numbers</h2>
      <ul>
          {persons.map(searchPersons =>
            <Persons key={searchPersons.name} personsProps={searchPersons} />
          )}
      <form onSubmit={submitNumber}><input value={newNumber}onChange={handleNumberChange}placeholder={inputNumberValue}/><button type='submit'>add</button>
      </form>
        
        </ul>
    </div>
  )
}

export default App






 