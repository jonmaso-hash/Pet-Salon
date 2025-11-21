
const petForm = document.querySelector("form");
const petTable = document.getElementById("petTable"); 


function pet(name, age, breed, gender, service){
this.name = name;
this.age = age;
this.breed = breed;
this.gender = gender;
this.service = service;
}


function onSubmit(event){

event.preventDefault()



  const name = petForm.elements["petName"].value;
  const age = petForm.elements["petAge"].value;
  const breed = petForm.elements["petBreed"].value;
  const gender = petForm.elements["petGender"].value;
  const service = petForm.elements["petService"].value;


const newPet = new pet(name, age, breed, gender, service);




const row = addRow(newPet);
petTable.appendChild(row);

petForm.reset();
  }

function addRow(newPet){
const row = document.createElement("tr");

row.innerHTML = `
<td> ${newPet.name} </td>
<td> ${newPet.age} </td>
<td> ${newPet.breed} </td>
<td> ${newPet.gender} </td>
<td> ${newPet.service} </td>
<td> <button class="btn btn-warning btn-sm edit-btn"> Edit </button> </td>
<td <button class="btn btn-danger btn-sm delete-btn"> Delete </button> </td>
`;


row.querySelector(".edit-btn").addEventListener("click",function(){
alert("Edit button has been clicked")
});


row.querySelector(".delete-btn").addEventListener("click", function(){
    const confirmation = confirm("Are you sure you want to delte this row?");

    if(!confirmation) return;

row.remove();
});

return row;
}