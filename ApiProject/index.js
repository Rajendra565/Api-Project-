let fetchdate=async function(){
const date=await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
let resdate= await data.json();
return resdate

}
console.log(fetchdate())