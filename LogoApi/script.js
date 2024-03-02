const inputBox=document.querySelector('#input-box')
const inputbtn=document.querySelector('.input-btn')


let acceskey='Tpt83oxM71qYOOiEvPQp__6dl1-vO2viSD1qcp3q7zw'

const getFatch= async()=>{
    let feactching=await fetch(`https://api.unsplash.com/search/photos?page=1&query=dog&client_id=${acceskey}`)
    let result=await feactching.json()
    console.log(result)     
    result.foreach((element) => {
        
        console.log(element)     
    });
}

getFatch()