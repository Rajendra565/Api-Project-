const cardgroup=document.querySelector('.cardgroup')

let show=""
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
console.log("done",res)
res.json()
.then((massage)=>{
 for(let i=0;i<massage.length;i++){
  show+=`<div class="card">
      <div class="userdetails">

        <span class="userId">${massage[i].id}</span>
        <h2 class="name">${massage[i].name}</h2>
        <div class="username">${massage[i].username}</div>
        <p class="email">${massage[i].email}</p>
      </div>
      <div class="address">
        <p class="street">${massage[i].address.street}</p>
        <p class="suite">${massage[i].address.suite}</p>
        <p class="city">${massage[i].address.city}</p>
    </div>

    </div>`
  console.log(massage[i].name)
  cardgroup.innerHTML=show
}
})
.catch((notmassage)=>{
  console.log(notmassage)
})
})
.catch((req)=>{
  console.log("not comming",req)
})