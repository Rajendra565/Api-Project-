// const cardGroup=document.querySelector('#cardGroup')
// const searchIcon=document.querySelector('.searchIcon')
// const inputText=document.querySelector('.inputText')




function fetchDate(){
  fetch(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
  .then((res)=>{
    console.log("Hello",res)
    res.json()
    .then((jsondate)=>{
      console.log("Date comeing",res)

    })
  })
  .catch((req)=>{
    console.log("not comeing ",req)
  })
}
fetchDate()