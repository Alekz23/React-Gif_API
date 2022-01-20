import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function AddCategory({setcategory}) {
   
   const [input, setinput] = useState('')

   const handleInputChange=(e)=>{
       setinput(e.target.value);
   }

   const handleSubmit=(e)=>{
       e.preventDefault();
       console.log("Submit hecho")
       //cats es el estado anterior o ultimo elememto y add new element
       if(input.trim().length > 2){
            setcategory(cats=>[input, ...cats] )
            setinput('')

       }
      
   }
   
    return (
        <form onSubmit={handleSubmit}>
            <h1> AddCategory</h1>
            <input type="text" value={input} onChange={handleInputChange}></input>
        </form>
    )
}

AddCategory.propTypes = {
    setcategory : PropTypes.func.isRequired
}