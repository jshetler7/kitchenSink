var me = 'Jared';     //A variable with my name.
const states = 50;      //Constant variable with # of states.
var math = 5 + 4;       //Variable with value of sum of 5+4.

function sayHello(){
    var msg = 'Hello World!'
    alert(msg)
};
sayHello();


var names = ['Charles','Abby','James','John'];
var ages = [21,27,18,17];

function checkAge(name, age){
        if(age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
        }
    };
for(var i = 0; i < ages.length; i++){
    checkAge(names[i], ages[i])
};



var veggies = ['Celery','Cucumbers','Potatoes','Corn'];
function veggieTime() {
    for(var n = 0; n < veggies.length; n++) {
        console.log(veggies[n])
    }
};
veggieTime();


var pet = {
    name: 'Koda',
    breed: 'Shih Tzu'
};
console.log(pet.name, pet.breed);

const peeps = [
{
    name: 'Brandon',
    age: 24,
},
{
    name: 'Austin',
    age: 23,
},
{
    name: 'Jacob',
    age: 18,
},
{
    name: 'Jackson',
    age: 18,
},
{
    name: 'Jared',
    age: 23,
}
];


for(var k = 0; k < peeps.length; k++) {
    checkAge(peeps[k].name, peeps[k].age)
};

function getLength(word) {
    return word.length
}
var x = getLength('Hello World')
console.log(x)

if(x % 2 == 0) {
    console.log('The world is nice and even!')
}
    else {
    console.log('The world is an odd place!')
}
