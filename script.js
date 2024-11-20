// Dette er en enlinjes kommentar
// Kommentere mer...

/* Dette 
er 
en 
flerlinjes 
kommentar */

//console.log("hei !¤%&/() console.log()")
//console.error("Hei, dette er en feil!")
//console.warn("Hei, dette er en advarsel!")

// variabel navn skal (nesten) alltid være camelCase
/*         let message = "HEI"

console.log(message)


message = "Hadet"

console.log(message)



console.log("2" + "2")

console.log(2 + 2)
console.log(2 * 5)
console.log(9 / 3)

*/


/*      let count = 0



console.log(count)

// count = count + 3; // er det samme som:
count += 3 

console.log(count)


++count // legg til en på count
count++
console.log(count)

--count
count--
console.log(count)



count = -9007199254740992;

console.log(count)

count--
console.log(count)


let text = 'De "driver" og driller nå!'

console.log(text)

let text2 = "De 'driver' og driller nå!"

console.log(text2)

let text3 = "De \"driver\" og driller nå!"

console.log(text3)


let text4 = `De "driver" og 'driller' nå!`

console.log(text4)
*/

/* let myName = "Patryk"
let myLocation = "Norway"
let myAge = 44 */

// Hi there "name", i see you are from "location", and you are "x" years old.
//let greeting = "Hi there " + myName + ", i see you are from " + myLocation + ", and you are " + myAge + " years old."

/*       let name = "Patryk"
let city = "Porsgrunn"
let age = 44 

console.log(name + age + city)  */

// info about the user
let user = { 
    firstName: "Patryk", 
    age: 44, 
    city: "Porsgrunn"
}

//console.log(user.firstName + user.age + user.city)
console.log(user)
//console.log(greeting)


// greeting using backticks:
// One benefit of using backticks, we can use javascript variables inside strings
//let greeting2 = `Hi there ${myName}, i see you are from ${myLocation}, and you are ${myAge} years old.`


//console.log(greeting2)


let number1 = 2;
let number2 = 3;

let calculationText = `${number1} + ${number2} = ${number1 + number2}`

//console.log(calculationText)



let calculationText2 = number1 + " + " + number2 + " = " + (number1 + number2)


// console.log(calculationText2)




/* CSS selection examples:
h1 {
    color: grey;
}
body {

}

.main-paragraph {
    font-size: 40px;
}

#user-name {
    color: green;
}
*/

/* console.log("Accessing html elements with JS....")

console.log(            
    document.querySelector("h1")
)

console.log(            
    document.getElementById("user-name")
)


console.log(            
    document.querySelector("#user-name")
)

console.log(            
    document.querySelector(".main-paragraph"))


console.log("my paragraphs.........")
    console.log(            
    document.querySelectorAll("p")
)
*/
// Bruke html tags
// #1. Velg tags og lagre dem i variabler:

const headerTagElement = document.querySelector("h1")

//console.log(document.URL)
//console.log(headerTagElement)


// Endre h1 tag-teksten til "Avansert javascript":
//headerTagElement.innerText = "Avansert javascript"
headerTagElement.textContent = "Avansert javascript"

// innnerHTML kan brukes til å sette inn både tekst og kode. Vær litt forsiktig :)
//headerTagElement.innerHTML = "<i><br>Hei</i>"

//headerTagElement.style = "color: red; margin-inline: 50px;"

// legg til CSS klasse: "green-text" (se <style> tag):
headerTagElement.classList.add("green-text")

// fjerne en CSS klasse fra et element:
headerTagElement.classList.remove("green-text")

// Dette er det samme som å adde og ummidelbart fjerne en klasse:
headerTagElement.classList.toggle("green-text")

console.log(document.querySelector("img"))


function toogleEffect() {
    headerTagElement.classList.toggle("green-text")
}