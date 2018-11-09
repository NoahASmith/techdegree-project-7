//Javascript File
//Fun Property of Noah Asher Smith


//For Later Use
//If Missed
if(missed === 5){
  parent.style.display = "flex";
}
//



//Variables
const start = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
//


//Phrases
const phrases = ["I am legend","Microsoft Xbox One X","Marvel Universe","Add Event Listener","Find Us On The Web"];
//

//
start.addEventListener('click', (e) => {
  if(e.target.tagName === 'A'){
    const a = e.target;
    const parent = a.parentNode;
    console.log('Hey There');
    parent.style.display = "none";
    //Testing the phrases
    for(let i = 0; i < phrases.length; i = i + 1){
    console.log(phrases[i])
    //
    }
  }
});
