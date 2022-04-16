


import React, { useState, useEffect } from 'react'
import PersonsComponent from './components/Persons'
import axios  from 'axios'


const InputFilterComponent   = (props) => {
  return(
    <div>
      <input value={props.Valueprops}
      onChange={props.nameChangeProps}
      placeholder={props.placeholderProps} />
      </div>
  
  )
}


const InputFormComponent = (props) => {
  return(
    <form onSubmit={props.onSubmitProps}>
      <div>
        <input value={props.nameValue}
        onChange={props.nameChange}
        placeholder={props.namePlaceHolder} /> 
      </div>
      <div>
        <input value={props.numberValue}
        onChange={props.numberChange}
        placeholder={props.numberPlaceHolder} />
      </div>
      <button type={props.typeprops}>Add</button>

    </form>
  

  )
}



const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    console.log('effectin aloitus ja komento => axios.get aloittaa datan hakemisen palvelimelta.')
    axios
      .get('http://localhost:3000/persons')
      .then(response => {
        console.log('promifield')
        setPersons(response.data)
      })
  }, []) 
  console.log('render', persons.length, 'persons')

  // (start of effect and  command => axios.get   start to search data from server.)
  
  

    


  

  

  

  
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
    // whereas user try to add name, which is already in the table/list. Action alert  (if => alert) that name is already added in the list. Use different name
    // whereas user adds name, which is not in the list then it uses  (else => setpersons)= {newname}

    // variable "persons" has two different values in the table, therefore adding  a new to continue previous value using  function name concat() 
    //

    if(persons.some(personsFind=> personsFind.name === newName)) {
      alert(`${newName}person has been already added on the phonebook. Please use different name!`)
    } else {
      axios
      .post('http://localhost:3001/persons', nameObject) // Mikäli käyttäjän lisämää nimeä ei löydy luettelosta, niin lisätään arvot kyseisellä muuttujan arvolla (nameObject) kyseiseen sivuun, joka on .json muodossa.
      .then(response => {
        setPersons(persons.concat(response.data)) // Muuttujassa "response" löytyy data mikä on funktion .post() sisällä. Hyödynnetään sitä ja lisätään "setPersons" tilassa olevien muiden puhelintietojen joukkoon. Funktion "concat" avulla me emme muutta komponentin alkuperäistä tilaa, vaan luodaan uusi taulukko!
        setNewName('') // Kun sivu suorittaa tämän funktion (submitPerson), niin se tyhjentää kyseisen muuttujan taulukon. Mikäli tätä ei olisi, niin se arvo minkä käyttäjä antaa input:iin jäisi ns. "roikkumaan" näkyviin.
        setNewNumber('') // Kun sivu suorittaa tämän funktion (submitPerson), niin se tyhjentää kyseisen muuttujan taulukon. Mikäli tätä ei olisi, niin se arvo minkä käyttäjä antaa input:iin jäisi ns. "roikkumaan" näkyviin.
        setFilterName('')
        
      })
    }
  }
      
           // when user conduct thsi function (submitPerson), So it cleart that partical function, whereas user don't use this input as result it would be stay like as "hang" in visible 
           // when user  conduct this function (submitPerson), So it clear that partical function, whereas user don't use this input it  would be stay like as "hang" visible 
           // when user conduct  this function (submitPerson), So it return that partical function, whereas user don't use this input it would be stay to  like as "hang" visible 
    





  // in input (where use wring filterName) value={filterName}, its mean practically that it  => setFilterName {filterName}  saves all what user writing. 
  // console.log(filterName) prints same things and before user writing anythin to input, so => filterName 
  // if user typing value forexample  "Christofor", then function => setFilterName saves its value, So filterName = "Christofor"

const handleFilterNameChange  =(event) => {
  console.log(event.target.value)
  setFilterName(event.target.value)
}


// in input (where user writing new name) value={newName} that mean practically it saves variable value => setNewName {NewName} all what user typing.
// console.log(newName) printing same things and even then when user writing anythin to input, so => newName(')
// for example if user typing value 'Christofor Pavlidi', So then function  => setNewName saves its values so newname = 'Christofor Pavlidi'

const handleNameChange = (event) => {

  console.log(event.target.value)
  setNewName(event.target.value)
}

// in input (where user writing new number) value={newnumber}, its means practically that it  => setNewNumber  {newNumber} all what user writing. 
// console.log(newNumber)  printing same things and before then user writing anything to input, so  => newNumber =''
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
      <h1>Phonebook</h1>
      filter shown with <InputFilterComponent valueProps={filterName}onChangeProps={handleFilterNameChange}placeholderProps={inputSearchName} />
        <h1>Add new information</h1>
        <InputFormComponent onSubmitProps={submitPerson} nameValue={newName}nameChange={handleNameChange}namePlaceHolder={inputTextName}
        numberValue={newNumber}numberChange={handleNumberChange}numberPlaceHolder={inputPhoneNumber} typeprops="submit" />
           <h1>Numbers</h1>
             <PersonsComponent personValue={persons} filterNameValue={filterName} />
             </div>

   )
   }
  

export default App






 