



import React, { useState, useEffect } from 'react'
import PersonsComponent from './components/Persons'
import axios  from 'axios'

import notesService from './services/notesService.js'


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

  useEffect(() => {   // we are using  "notesService" modules contest, where is find variables => "const getAllValues" = () => ""
                    
    notesService
    .getAllValues()  // which means that for first we are current variables fuctions, which return back to data ()
    .then(showResults => {  // variables "showResults" can be also "Christofor" so then(Christofor => ...)
     setPersons(showResults)
     console.log(showResults)  // after this we are changing tables "Persons" stable using setPersons function, which uses values of variables "showResults"
    })
  }, [])

   // There is now three a different rows ('render, persons.length, persons) in phonebook







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
      notesService       // we are using "notesServices" modules content, which contain variables => "const createValue" newValue => 
      .createValue(nameObject)  // we updating tables using to variables "NameObject" values. We find values => name,number,date,id and important.
                              
      .then(newValue => { 
        setPersons(persons.concat(newValue))     //  We changes variables "persons" stable to use "setPersons" function and with function "concat"  we are not changes components stable, but we crearing newTable 
                          
                                                 // whereas adding name by user is not found in table, then adding value for in that variables value (nameObject), which is in Json mode                      // There is found data, which name is function .post() in variables "response". That is utilzied and adding "setPersons"  to with among others  phoneinformation. We do not use function 'concat' to change components orginal stable , but we create a new table.
                                                 
        setNewName('') 
        setNewNumber('')
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
// We initalized variables "handledeleteName", using for this function that we can get delete button all names of phonebook 
// this button get values that rows tables id, forexample if "persons" variables values is First as result that rows button get same value. 
// This button functionality is implemented components => personsComponent belov from components/Persons.js => (<button value={b.id} onclick={props.deleteValue}>delete</button>})
// button can be  as follows  => <button value="1">delete</button> 
const handleDeleteName = (event) => {
  const button = parseInt(event.target.value)  // We initalize variables button for this we are using "parseInt() function that we can get  rid off  => "..." so  after function  "1" = 1
  const getName =  button-1    // We initalize variables getName and calculating  its value using "button" variables  value -1 and  we get answer. 



// When user want to delete users information in table as result windows alert 'are you sure that you wanna leave' if user make sure that he want to delete, so then have to use belove function  
if(window.confirm(`Are you sure that you wanna leave ${persons[getName].name} from records?`)) {
  notesService // We are using content of variables, where is find  variables => const delete  = "deleteValue" 
  .deleteValue() // We conduct  deleteValue() function,  so function value can be => .deleteValue(1), for that reason, we have been used parseInt() function, because buttos initial value  => value="1" isn't same thing than just 1. 
  .then(updateList => {  // When information has deleted from baseUrl, then we changes "persons" variables stable. 
    setPersons(persons.filter(newList => newList.id !==button)) // We are using "filter() function "", which creates new table (creates  a new array). if  "persons" id= false with variables "buttonID", Then its filtering a current table and replaced to new table, if person ID withstands with variables "buttonId", then it not be changed. 
  })
}
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
             <PersonsComponent personValue={persons} filterNameValue={filterName}  deleteValue={handleDeleteName} />

          </div> 
             
               

   )
   }
  
  

export default App






 
