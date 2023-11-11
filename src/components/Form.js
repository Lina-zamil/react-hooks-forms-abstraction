import React, { useState } from "react";

function Form() {
 const[formData,setFormDate]=useState({firstName:"Join",lastName:"Henry",admin:false});

  function handleChange(event) {
    const name=event.target.name;
    let value=event.target.value;
    setFormDate({...formData, [name]:value});

    if(event.target.type==="checked")
    value=event.target.checked;
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} value={formData.admin}></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
