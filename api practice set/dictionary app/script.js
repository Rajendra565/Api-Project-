

const inpBtn=document.querySelector('.inp-btn');
const details=document.querySelector('.details')
const volumeBtn=document.querySelector('.volume-btn')
const audioPlay=document.querySelector('.audio-play');
const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.querySelector('.result')

inpBtn.addEventListener('click',()=>{
    let inpword=document.getElementById('inp-word').value;
    
    fetch(url+inpword)
    .then((res)=>{
        return res.json()
    })
    .then((date)=>{
        result.innerHTML=  ` <div class="word">
        <h3>${date[0].word}</h3>

        
    </div>

    <div class="details">
        <p>${date[0].meanings[0].partOfSpeech}</p>
        <p>/${date[0].phonetic}/</p>
    </div>
    <p class="word-meaning">${date[0].meanings[2].definitions[0].definition}
    </p>
    <p class="word-example">${date[0].meanings[2].definitions[0].example}</p>`
    audioPlay.setAttribute('src',`${date[0].phonetics[0].audio}`)
    console.log(audioPlay)
    })
    .catch(()=>{
        return result.innerHTML=`<h3>Couldn't find the word</h3>`
    })

})
volumeBtn.addEventListener('click',()=>{
    alert("sonde")
})
