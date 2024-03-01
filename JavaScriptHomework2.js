//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function displayFoodDishes(person) {  
    for (const key in person) {  
        if (Array.isArray(person[key])) {  
            console.log(`${key}:`);  
            for (let i = 0; i < person[key].length; i++) {    
                console.log(`\t* ${person[key][i]}`);    
            }         
        } else if (typeof person[key] === 'object') {        
            let innerKey = Object.keys(person[key])[0];                  
            console.log(`${innerKey}'s favorite is:`);                        
            console.log('\t' +   person[key][innerKey]);                        
        } else {              
            console.log(`${key}: ${person[key]}`);                        
        }            
    }          
}      
displayFoodDishes(person3);             


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

const Person = function(name, age) {
    this.name = name;
    this.age = age;
  };
  
  // Use an arrow function for the printInfo method
  Person.prototype.printInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
  
  // Create another arrow function for the addAge method that takes a single parameter
  // Adding to the age
  Person.prototype.addAge = function(years) {
    this.age += years;
  };
  
  // Create two people using the 'new' keyword
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  // Print both of their infos
  person1.printInfo();
  person2.printInfo();
  
  // Increment one persons age by 3 years
  person1.addAge(3);
  
  // Print both of their infos again to see the change
  person1.printInfo();
  person2.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checkWordLength(str) {
    return new Promise((resolve, reject) => {
        let result = str.length > 10 ? 'Big Word!' : 'Small Number';
        resolve(result);
    });
}

checkWordLength("Hello World").then(res => console.log(res)); //     Output Big Word!   
checkWordLength("John").then(res => console.log(res));         //           Output Small Number         


//Exercise #4
//Link: https://www.codewars.com/kata/5662b14e0a1fb8320a00005c/solutions/javascript?filter=me&sort=best_practice&invalids=false

//Exercise #5
//Link: https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions/javascript?filter=me&sort=best_practice&invalids=false