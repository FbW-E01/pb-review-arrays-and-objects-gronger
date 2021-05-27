//1. Create an array that contains three strings.

const threeStringArray = ["Bauhaus", "Insekten", "blahblahblubblub"];

console.log("------------------------------------------");

//2. Create an array that contains one string, one number and one boolean.

const variedValuesArray = ["cheesestring", 99, true];


console.log("------------------------------------------");

//3. Create an array hat contains three empty arrays.

const arrayOfEmptyArrays = [
    [],
    [],
    []
]


console.log("------------------------------------------");

//4. Create an empty object.

const emptyObject = {};



console.log("------------------------------------------");

//5. Create an object with three properties: id, email, password.

const threePropertiesObject = {
    id: "342983d0K",
    email: "gutentag@em.ail",
    password: "abc123"
}


console.log("------------------------------------------");

//6. Create an array that contains three objects. All objects should have a width and a height property.

const arrayOfThreeObjects = [
    {
        width: 44,
        height: 45
    },
    {
        width: 46,
        height: 47
    },
    {
        width: 48,
        height: 49
    }
]


console.log("------------------------------------------");

//7. Create an object that contains three properties: a string, an array and an object. Invent your own property names and values.

const variedPropertiesObject = {
    name: "Bob",
    interests: ["swimming", "juggling", "harmonica"],
    personal: {
        age: 55,
        hometown: "Edinburgh",
        address: "1 something street, ED1, UK"
    }
}

console.log(variedPropertiesObject);

console.log("------------------------------------------");

//8. Print the `type` of a variable that has an array value.

console.log("is this an array? " + Array.isArray(arrayOfEmptyArrays)); 


console.log("------------------------------------------");

//9. Print the `type` of a variable that has an object value. 

console.log(typeof emptyObject);

console.log("------------------------------------------");

//10. Create an array with five random values. 

const randomValuesArray = [
    Math.floor(Math.random() * 10), 
    Math.ceil(Math.random() * 30), 
    Math.round(Math.random() * 1000),
    "i randomly wrote this",
    "random"
]

console.log(randomValuesArray);

console.log("------------------------------------------");

//10.1. Add one value to the end of the array.

randomValuesArray.push(".achooooooooooooooooo");

console.log(randomValuesArray);

console.log("------------------------------------------");

//10.2. Add one thing to the beginning of the array.

randomValuesArray.unshift("first?");

console.log(randomValuesArray);

console.log("------------------------------------------");

//10.3. Take out one thing from the end of the array.

const poppedOff = randomValuesArray.pop();

console.log("Item removed from array: " + poppedOff);
console.log("array after .pop method: " + randomValuesArray);

console.log("------------------------------------------");

//10.4. Print the length of the array.

console.log(randomValuesArray.length);

console.log("------------------------------------------");

//10.5. Take out one thing from the end of the array.

randomValuesArray.pop();
console.log(randomValuesArray);

console.log("------------------------------------------");

//10.6. Take out one the 2nd thing from the array.

const removed = randomValuesArray.splice(1, 1);

console.log(removed);

console.log(randomValuesArray);



