const voice=new SpeechSynthesisUtterance();
const btn=document.querySelector(".btn");
btn.addEventListener('click',()=>{
    voice.text=document.querySelector('textarea').value;
    window.speechSynthesis.speak(voice)
})