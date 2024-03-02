const accessKey='Tpt83oxM71qYOOiEvPQp__6dl1-vO2viSD1qcp3q7zw'
const searchform=document.querySelector('form');
const searchContainer=document.querySelector('.search_container');
const searchInput=document.querySelector('.search-input');
const imagesContainer=document.querySelector('.images-container');
const noimagetext=document.querySelector('.noimagetext');
const seeMorebtn=document.querySelector('.seeMorebtn');


let page;
//Function to search 
const fetchImages=async (query,pageNo)=>{
    // imagesElamant.innerHTML='';
    const url=`https://api.unsplash.com/photos/?query=${query}&per_page=28&page=${pageNo}&client_id=${accessKey}`;

    const response= await fetch(url);
    const data= await response.json();
    
    console.log(data);
    console.log(url)

     data.forEach(photo=>{
         const imagesElamant=document.createElement('div')
         imagesElamant.classList.add('imageDiv');

        imagesElamant.innerHTML=`<img src=${photo.urls.small
        }/>`;
        // create a overlay
        const overlayElemant=document.createElement('div');
        overlayElemant.classList.add('overlay');

        const overlayText=document.createElement('h3');
        overlayText.innerText=`${photo.alt_description}`

        overlayElemant.appendChild(overlayText)
        imagesElamant.appendChild(overlayElemant);
         imagesContainer.appendChild(imagesElamant);
     })


}




//Adding Event Listener to search form
searchform.addEventListener('submit',(elemant)=>{
    elemant.preventDefault();
   page=1;
    // console.log(searchInput.value);
    const inputText=searchInput.value.trim();
    if(inputText!=''){
        
        fetchImages(inputText,page);
        noimagetext.style.display="none";

    }
    else{
        imagesContainer.innerHTML=`<h2>Please Enter a Search Query</h2>`;

    }
})



//Adding Event Listener to see more button ;
seeMorebtn.addEventListener('click',()=>{
    fetchImages(searchInput.value.trim(),++page);

})