


import React, { useState } from 'react'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Christofor',
     number: '040-4659788'}
  ])
  const [filterName , setFilterName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')


  const inputTextName = "Add new persons name..."
  const inputPhoneNumber = "Add new persons phonenumber..."
  const inputSearchName = "Search new persons name"


  




 
  

  


  



  const submitPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      phonenumber: newNumber,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: persons.length + 1,
    }
    // whereas user try to add name, which is already in the table/list. Action alert that name is already added in the list. Use different name
    // whereas user adds name, which is not in the list then it uses  else => setpersons = {newname}

    // variable "persons" has two different values in the table, therefore adding  a new to continue previous value using  function name concat() 
    //

    if(persons.some(personsFind=> personsFind.name === newName)) {
      alert(`${newName}person has been already added on the phonebook. Please use different name!`)
    } else {
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    setFilterName('')  // when user condutuc this function (submitPerson), so its return that partical function, whereas user don't use this input its would be stay to hang. 


  }

}

  // in input (where use wring filterName) value={filterName}, its mean practically that it  => setFilterName {filterName}  saves all what user writing. 
  // console.log(filterName) prints same things and before user writing anythin to input, so => filterName 

const handleFilterNameChange  =(event) => {
  console.log(event.target.value)
  setFilterName(event.target.value)
}



const handleNameChange = (event) => {

  console.log(event.target.value)
  setNewName(event.target.value)
}

// in input (where user writing new number) value={newnumber}, its means practically that it  => setNewNumber  {newNumber} all what user writing. 
// console.log(newNumber) tulostaa same things and before then user writing anything to input, so  => newNumber =''
// when user writing value forexample "123444", then fuction => setNewNumber saves value, so number = "123444" 


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
      <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with
       <input value={filterName}onChange={handleFilterNameChange}placeholder={inputSearchName}/>
       </div>
        </div>
        <h1>Add new information</h1>
        <form onSubmit={submitPerson}>
          <div>
        <input value={newName}onChange={handleNameChange}placeholder={inputTextName}/>
          </div>
        <div>
          <input value={newNumber}onChange={handleNumberChange}placeholder={inputPhoneNumber}/>
          </div>
           <button type='submit'>add</button>
           </form>
           <h1>Numbers</h1>
           <div>
             {persons.filter(filterPerson=> filterPerson.name.toLowerCase().includes(filterName.toLowerCase())).map(filteredPersons  =>
               <Persons key={filteredPersons.name} personsProps={filteredPersons} />
             )
}
           </div>
           </div>
   )
}

      

          


export default App






 