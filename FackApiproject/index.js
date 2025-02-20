const cardGroup=document.querySelector('.card-group')


let req=async function(){
  let fackjson= await fetch('https://fakestoreapiserver.reactbd.com/photos')
  let res=fackjson.json();
  
    return res
 
}



console.log(req())