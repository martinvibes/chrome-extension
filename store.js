
// chrome://Extensions

// let myLeads = []
// let oldLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEL = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const fromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// let tabBtn = document.getElementById("tab-btn")

// if (fromLocalStorage) {
//   myLeads = fromLocalStorage
//   render(myLeads)
// }

// tabBtn.addEventListener("click", function(){
//   // console.log(tabs[0].url)
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     myLeads.push(tabs[0].url)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
//   })
  
// })

// function render(Leads) {
//   let listItems = ""
//   for (i = 0; i < Leads.length; i++) {
//  //  listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
//      listItems += `
//      <li>
//           <a target='_blank' href='${Leads[i]}'>
//               ${Leads[i]}
//           </a>
//      </li>`
// }
//  ulEL.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function() {
//   localStorage.clear()
//   myLeads = []
//   render(myLeads)
// })

// inputBtn.addEventListener("click", function() {
//   myLeads.push(inputEl.value)
//   inputEl.value = ""
//   localStorage.setItem("myLeads", JSON.stringify(myLeads))
//   render(myLeads)
//   console.log(localStorage.getItem("myLeads")) 
// })





// RECAP OF WHAT WE LEARNED
// const player = "per"
// const opponent = "nick"
// const game = "AmazinFighters"

// let points = 0
// let hasWon = false

// points += 100
// hasWon = true

// if (hasWon) {  // I USED TEMPLATE STRINGS FOR THIS
//   console.log(`${player} got ${points} point and won the ${game} game!`) 
// } else {
//   console.log(`The winner is ${opponent} ! ${player} lost the game`)
// }


// LOG OUT ITEMS IN AN ARRAY
// let myCourses = ["learn css animation", "UI design fundamentals", "Intro to clean code"]

// function courses(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }
// }
// courses(myCourses)


// HOW TO SAVE TO LOCAL STORAGE
// localStorage.setItem("myWatch", "100")
// let myResults = localStorage.getItem("MyWatch")
// console.log(myResults)

// localStorage.getItem("MyWatch")



// ADD EVENT LISTENER AND OBJECT IN ARRAY
// let data = [
//   {
//     player: "jane",
//     score: 52
//   },
//   {
//     player: "mark",
//     score: 41
//   }
// ]

// let buttonEL = document.getElementById("button-el")

// buttonEL.addEventListener("click", function(){
//   console.log(data[0].score)
// })




// GENERATE SENTENCE
// function generateSentence(desc, arr) {
//   let sent = `The ${arr.length} ${desc} are`
//   const lastIndex = arr.length - 1
//   for (let i = 0; i < arr.length; i++) {
//     if (i === lastIndex) {
//       sent += arr[i]
//     } else {
//       sent += arr[i] + ","
//     }
    
//   }
//   return sent
// }

// const sentence = generateSentence(" highest mountains ", ["mount Everest", " K2"])
// console.log(sentence)






// WRITE MY FIRST FUNCTION PARAMETERS
// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting) {
//   welcomeEl.textContent = greeting + " martin vibes!"
// }
// greetUser("Welcome back,")

// MULTIPLE FUNCTION PARAMETERS
// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name, emoji) {
//   welcomeEl.textContent = `${greeting} ${name} ${emoji}`
// }
// greetUser("Welcome back", "investor", "!")


// ARGUEMENT AND PARAMETER

// function greetUser(greeting, name,) {
//   welcomeEl.textContent = `${greeting} ${name}`
// }
// greetUser("Welcome back", "investor",)

// function add(num1, num2) {
//   return num1 + num2
// }
// console.log(add(3, 4))
// console.log(add(9, 102))


// ARRAYS AS PARAMETERS
// function getFirst(arr) {
//   return arr[0]
// }

// let firstCard = getFirst([10, 7, 3])
// console.log(firstCard)


// // HOW TO ADD AND REMOVE STRING IN LOCALSTORAGE
// // let myLeads = `["www.hanner.com"]`

// // myLeads = JSON.parse(myLeads)

// // myLeads.push("hewudshbikds")

// // myLeads = JSON.stringify(myLeads)

// // console.log(typeof myLeads)



// // TEMPLATE STRING/LITERALS
// // const recipient = "james"
// // const sender = "mart"

// // // const email = "hey " + recipient + "! how is it going, cheers per"
// //    const email = `
// //      hey ${recipient}!
// //      how is it going?
// //      cheers ${sender}
// //      `
// // console.log(email)


// // HOW TO USE INNER HTML
// // 1. const buy = document.getElementById("buys")

// // buys.innerHTML = "<button onclick='buy()'> buy!</button>"

// // buys.addEventListener("click", function() {
// //   buys.innerHTML = "Thank you for buying"
// // })

// // OR

// // function buy(){
// //   buys.innerHTML = "<p>Thank you for buying!</p>"
// // }

// //  2. const li = document.createElement("li")
// //  li.textContent = myLeads[i]
// //  ulEL.append(li)




// // HOW TO USE ADD EVENT LISTENER
// // let box = document.getElementById("box")

// // box.addEventListener("click", function() {
// //   console.log("I want to open the box")
// // })