let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;


    
    //button sbke saath aane ke lie
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");


    item.appendChild(delBtn);
    ul.append(item);//ul ke and add hota jayega
    inp.value=""; //inp dubara khali hoga
});
//del krne ke lie(sirf existing ke lie honge jaise eat and sleep ke lie here and sbke lie will use event delegation)


ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    } else if (event.target.nodeName === "LI") {
        event.target.classList.toggle("done");
    }
});


let toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        toggleBtn.innerText = "☀️ Light Mode";
    } else {
        toggleBtn.innerText = "🌙 Dark Mode";
    }
});
