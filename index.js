/*
function introduction() {

    return "Hi, my name is ${name}."
}
*/

/*
function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }
  */

// function functionName() {}

  // 1. Define a function that uses a parameter 

/*
  function introduction() { 
    console.log(`Hi, my name is ${name}.`);
  }
*/

function introduction(name) {
    return(`Hi, my name is ${name}.`)
    name="Josh"
}

  // 2. Define a function that uses 2 parameters
  /*
  function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }*/

  function introductionWithLanguage(name, language) {
      return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
      name="Josh"
      language="Ember.js"
  }

  // 3. Define a function that uses an optional parameter

  /*
  function functionName() {
      console.log()
  }
  */

  /*
  function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`)
  }
  */
 
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
    name="Josh"
    language="Ember.js"
}