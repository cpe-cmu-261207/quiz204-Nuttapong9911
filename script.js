const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const serchbtn = document.querySelector("#search")
const resetbtn = document.querySelector("#reset")
const text = document.querySelector("#text")
// define more constants and variables here

btn_toggle.onclick = () => {
  const disbtn = document.getElementById("toggle")
  
  if (disbtn.innerHTML === "Display Calculation"){
    disbtn.innerHTML = "Display Author"
    author.innerHTML = 630610744 - length.value
  }else {
    disbtn.innerHTML = "Display Calculation"
    author.innerHTML = "630610744 NUTTAPONG BOONSALA"
  }
  
}


serchbtn.onclick = () => {

}

resetbtn.onclick = () => {
  length.value = ''
  color.value = "#FFFF00"
}


console.log(p[3])