let display = document.getElementById("display")

function appendValue(value){
display.value += value
}

function clearDisplay(){
display.value = ""
}

function deleteLast(){
display.value = display.value.slice(0,-1)
}

function calculate(){
try{
display.value = eval(display.value)
}
catch{
display.value = "Error"
}
}

function scientific(func){

let value = parseFloat(display.value)

if(func === "sqrt"){
display.value = Math.sqrt(value)
}

if(func === "sin"){
display.value = Math.sin(value)
}

if(func === "cos"){
display.value = Math.cos(value)
}

}

document.addEventListener("keydown",function(e){

if(!isNaN(e.key) || "+-*/.%".includes(e.key)){
appendValue(e.key)
}

if(e.key === "Enter"){
calculate()
}

if(e.key === "Backspace"){
deleteLast()
}

})

let toggle = document.getElementById("toggle")

toggle.onclick = function(){
document.body.classList.toggle("dark")
}