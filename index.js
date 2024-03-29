// chrome://Extensions

let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const fromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
let tabBtn = document.getElementById("tab-btn")

if (fromLocalStorage) {
  myLeads = fromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function(){
  // console.log(tabs[0].url)
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
  
})

function render(Leads) {
  let listItems = ""
  for (i = 0; i < Leads.length; i++) {
 //  listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
     listItems += `
     <li>
          <a target='_blank' href='${Leads[i]}'>
              ${Leads[i]}
          </a>
     </li>`
}
 ulEL.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  console.log(localStorage.getItem("myLeads")) 
})

