import React from "react";

const Persons = ({personsProps}) => {
    return(
        <li>
             name:{personsProps.name}, {personsProps.phonenumber}(phone number)

             </li>
    )
}

export default Persons