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
        span.classList.add('remove')
        li.appendChild(span)
        
        inputbox.value="";
        const remove=document.querySelector('.remove')
        remove.addEventListener('click',(e)=>{
            li.removeChild();
        })
    }
})


