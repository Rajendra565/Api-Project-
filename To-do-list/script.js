const inputbox=document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");

const addBtn=document.querySelector(".btn");

addBtn.addEventListener('click',function(){
    if(inputbox.value===''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML='\u00d7'
        li.appendChild(span)

    }
    inputbox.value="";
})


listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="li"){
        e.target.classlist.toggle('checked')
    }
    else if(e.target.tagName==="span"){
        e.target.parentElement.remove();
    }
},false)
