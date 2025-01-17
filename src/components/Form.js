import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [searchText, setSearchText] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSearchChange(event) {
    const newValue = event.target.value;
    setSearchText(newValue);
    props.onSearchChange(newValue);
  }


  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <input type="text" onChange={handleSearchChange} value={searchText} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
