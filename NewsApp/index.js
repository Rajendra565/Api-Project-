
const Genral=document.getElementById('Genral')
const Buiness=document.getElementById('Buiness')
const Technology=document.getElementById('Technology')
const sports=document.getElementById('sports')
const Entertainment=document.getElementById('Entertainment')
const Input=document.getElementById('Input')
const SearchBtn=document.getElementById('SearchBtn')




// Array 
var NewSDataArray=[]


// apis

const API_KEY="500bcbaa0b364b8a8c63f6367e2f1584"
const Headline_news=`https://newsapi.org/v2/top-headlines?country=in&apiKey=`
const Genral_News=`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=`
const Buiness_News=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=`
const Technology_News=`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=`
const sports_News=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=`
const Entertainment_News=`https://newsapi.org/v2/top-headlines?country=in&category=entertaiment&apiKey=`



Genral.addEventListener('click',()=>{
    fetchGeneralNews()
})
Buiness.addEventListener('click',()=>{
    fetchBuinessNews()
})
Technology.addEventListener('click',()=>{
    fetchTechnologyNews()
})
sports.addEventListener('click',()=>{
    fetchSportsNews()
})
Entertainment.addEventListener('click',()=>{
    fetchEntertainmentNews()
})
SearchBtn.addEventListener('click',()=>{
    fetchSearchNews()
})




const fetchGeneralNews=async ()=>{
    const response=await fetch(Genral_News+API_KEY)
    NewSDataArray=[]
    if(response.status>=200 && response.status<300){
        const myJson=await response.json()
      
        console.log(myJson)
    }
    else{
        // handle erors
        console.log(response.status,response.statusText)
        console.log("Name"+"General")
    }
   
}
const   fetchBuinessNews=async ()=>{
    const response=await fetch(Buiness_News+API_KEY)
    NewSDataArray=[]
    if(response.status>=200 && response.status<300){
        const myJson=await response.json()
        console.log(myJson)
    }
    else{
        // handle erors
        console.log(response.status+response.statusText)
        console.log("Name"+"Buinees")

    }
   
}
const   fetchSportsNews=async ()=>{
    const response=await fetch(sports_News+API_KEY)
    NewSDataArray=[]
    if(response.status>=200 && response.status<300){
        const myJson=await response.json()
        console.log(myJson)

    }
    else{
        // handle erors
        console.log(response.status,response.statusText)
        console.log("Name"+"Sportnews")

    }
   
}
const   fetchTechnologyNews=async ()=>{
    const response=await fetch(Technology_News+API_KEY)
    NewSDataArray=[]
    if(response.status>=200 && response.status<300){
        const myJson=await response.json()
        console.log(myJson)

    }
    else{
        // handle erors
        console.log(response.status,response.statusText)
        console.log("Name"+"Technology")

    }
   
}
const   fetchEntertainmentNews=async ()=>{
    const response=await fetch(Entertainment_News+API_KEY)
    NewSDataArray=[]
    if(response.status>=200 && response.status<300){
        const myJson=await response.json()
        console.log(myJson)
    }
    else{
        // handle erors
        console.log(response.status,response.statusText)
        console.log("Name"+"Entertainment")

    }
   
}
const   fetchSearchNews=async ()=>{
    const response=await fetch(Headline_news+API_KEY)
    NewSDataArray=[]
    if(response.status>=200 && response.status<300){
        const myJson=await response.json()
        console.log(myJson)
        NewSDataArray=myJson;
    }
    else{
        // handle erors
        console.log(response.status,response.statusText)
    }
   
}




