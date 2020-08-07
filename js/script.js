console.log("loaded");

// object literal for the salon
const salon={
    name:"Scruffy to Fluffy",
    phone:"555-555-555",
    address:{
        city:"San Diego",
        street:"Main St",
        number:"111" 
    },
    pets:[]
}
console.log(salon);
let {name, phone, address:{city, street, number}}=salon;
console.log(city);


//document.getElementById('info').innerHTML="<p>"+name+"<b>"+city+"</b> </p>";  // selecting HTML element

document.getElementById("info").innerHTML=`
<p class="footer-info"> ${name} 
    <br>
    <b> ${city}, ${street} ${number} </b> 
    <br>
    ${phone}
    </p>
    `;

// object constructor for the pets
class Pet{
    constructor(name, age, type, breed, gender, service, ownersName, contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
    }
}

const scooby=new Pet("Scooby", "50", "dog", "Dane", "male", "full", "Shaggy", "555-556-8888");
console.log(scooby);

const scrappy= new Pet ("Scrappy", "5", "dog", "Dane", "male", "full", "Shaggy");
console.log(scrappy);

const Tango= new Pet ("Tango", "3", "dog", "Pitbull", "male", "ear cleaning", "Ingrid");
console.log(Tango);

const Cash= new Pet ("Cash", "1", "dog", "Bulldog", "female", "nails", "Ingrid");
console.log(Cash);


// add pets to array

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(Tango);
salon.pets.push(Cash);

 // displays number of elements or pets in the array
 console.log("There are " + salon.pets.length + " pets in the salon");
 
// display names of pets using for loop
for(let p=0; p<salon.pets.length; p++){
    console.log("Pet Name: " + salon.pets[p].name);
}



 



