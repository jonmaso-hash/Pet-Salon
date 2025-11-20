let pet1 = {
name: "walter",
age: 8,
gender: "Male",
service: "Bath",
breed: "GreyHound"
};

let pet2 = {
name: "Annie",
age: 3,
gender: "Female",
service: "hair cut",
breed: "German Sherpard"
};

let pet3 = {
name: "Maggie",
age: 4,
gender: "Female",
service: "nail clipping",
breed: "Pitbull"
};

let petsList = [pet1, pet2, pet3];
for(let i = 0; i<= petsList.length; i++){
document.getElementById("petNum").innerHTML =`${[i]}`;
}

let petsName = [pet1, pet2, pet3];
for(let i = 0; i<= petsName.length; i++){
document.getElementById("petName").innerHTML +=`<li>"${petsName[i].name}"`;
}

function petRegistery(name, age, breed, gender, service){
this.name = name;
this.age = age;
this.gender = gender;
this.service = service;
}