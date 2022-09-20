let inutBox = document.getElementById("input-food");
let inputBtn= document.getElementById("input-button");
let response=document.getElementById("response");

let inputBox=document.querySelector(".inputBox input");

let object=inputBox.attributes;

for(let obj of object){
    console.log(obj.name)
}
