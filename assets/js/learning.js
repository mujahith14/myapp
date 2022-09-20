const tableEl=document.querySelector("table");
let selectedId;
console.log(selectedId);
tableEl.addEventListener("click",(event)=>{
    
    const target = event.target;
    if(event.target.tagName === 'TH') return;
    let clicked=target.parentElement;
    if(selectedId!=undefined){
        selectedId.classList.remove("active")
    }
    selectedId = clicked;
    clicked.classList.add("active");
    console.log(`Hello ${clicked.firstElementChild.innerText}`);
});

