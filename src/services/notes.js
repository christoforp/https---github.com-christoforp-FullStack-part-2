import axios from "axios";


const baseUrl = 'http://localhost:3000/persons'  // We initialized  variables, which utilize "db.json" values, which is located in that side. 



const getAllValues = () => {      // we initialized  function  "getAllValues", which purpose is to take  in baseUrl variables values and return (return.axios.get(baseUrl) to visible for user 
                                  // When user open site for first time, as result for site is coming information from baseUrl with this variables. 
    return axios.get(baseUrl) 

    }   // when function has conducted so the current data is saved under to return axios.get(baseUrl)
        // we initialized  variables "createValue", which purpose is to when user want to add new information to  baseUrl, then we are taking user information "newValue" for replace it to database with "baseUrl"
        // When user want to add newinformation to  database, its have to always use conduct that function so => "createValue" 
        // When fucntion has conducted so the current data is saved under to return axios.get(baseUrl)
const createValue = newValue => {
    return axios.post(baseUrl, newValue) 
}

// The current "export" purpose is to use that those variables can be used inside "App.js" 
export default {getAllValues,createValue}


