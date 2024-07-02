import React from "react";
import "../pages/EditProfile.css";
let firstName = "Jane"
let lastName = "Jacobs"
let isEditing = false

export const EditProfile1: React.FC = () => {
  let editButton = document.getElementById('editButton')!;
  let firstNameInput = (document.getElementById('firstNameInput') as HTMLInputElement)!;
  let firstNameText = document.getElementById('firstNameText')!;
  let lastNameInput = (document.getElementById('lastNameInput') as HTMLInputElement)!;
  let lastNameText = document.getElementById('lastNameText')!;
  let helloText = document.getElementById('helloText')!;

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsEditing()
    updateDOM()
  }
  
  function handleFirstNameChange(value: string) {
    firstName = value
    updateDOM()
  }
  
  function handleLastNameChange(value: string) {
    lastName = value
    lastNameInput.value = value
    updateDOM()
  }
  
  function hide(el: HTMLElement) {
    el.style.display = 'none';
  }
  
  function show(el: HTMLElement) {
    el.style.display = '';
  }

  function setIsEditing() {
    isEditing = !isEditing
  }

  function updateDOM() {
    if (isEditing) {
      editButton.textContent = 'Save Profile';
      hide(firstNameText);
      hide(lastNameText);
      show(firstNameInput);
      show(lastNameInput);
    } else {
      editButton.textContent = 'Edit Profile';
      hide(firstNameInput);
      hide(lastNameInput);
      show(firstNameText);
      show(lastNameText);
    }
    firstNameText.textContent = firstName;
    lastNameText.textContent = lastName;
    helloText.textContent = (
      'Hello ' +
      firstName + ' ' +
      lastName + '!'
    );    
  }
  
  return (
  <form id="form" onSubmit={handleFormSubmit}>
    <label>
      First name:
      <b id="firstNameText">Jane</b>
      <input
        id="firstNameInput"
        value="Jane"
        style={{display: "none"}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleFirstNameChange(e.target.value)
        }}/>
    </label>
    <label>
      Last name:
      <b id="lastNameText">Jacobs</b>
      <input
        id="lastNameInput"
        value="Jacobs"
        style={{display: "none"}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleLastNameChange(e.target.value)
        }}/>
    </label>
    <button type="submit" id="editButton">Edit Profile</button>
    <p><i id="helloText">Hello, {firstName} {lastName}!</i></p>
  </form>   
  )
}
