//Javascript File
//Fun Property of Noah Asher Smith



//Variables
  const title = document.querySelector('.title');

  const start = document.querySelector('.btn__reset');
  const button = document.querySelector('.btn__reset');
  const overlay = document.getElementById('overlay');

  const qwerty = document.getElementById('qwerty');
  const qwertyButtons = qwerty.querySelectorAll('button');

  const phrase = document.getElementById('phrase');
  const phraseUL = document.querySelector('#phrase ul');

  const hearts = document.getElementsByTagName('img');
  let missed = 0;
//

// PHRASES
  const phrases = [
    "yogi bear",
    "xbox one",
    "fun checks",
    "keep the change",
    "event listener"
  ];
//

//EVENT LISTENERS
  // THE GAME OVERLAY BUTTON CLICK
    start.addEventListener('click', (e) => {
        overlay.style.display = 'none';
      });

// FUNCTIONS
  // PHRASE FUNCTIONS
    // CHOOSE A RANDOM FUNCTION
      function getRandomPhraseArray(arr){
          let randPhrase = arr[Math.floor(Math.random()*arr.length)];
          let splitPhrase = randPhrase.split('');
          return(splitPhrase);
      }
    // VARIABLE TO CALL THE RANDOM PHRASE FUNCTION
      const phraseArray = getRandomPhraseArray(phrases);

    // DISPLAYING THE PHRASE FUNCTION
      function addPhraseToDisplay(arr){
        for(let i = 0; i < arr.length; i++){
          let li = document.createElement('li');
          li.textContent = arr[i];
          phraseUL.appendChild(li);
          if (arr[i] != ''){
            li.classList.add('letter');
          } else {
            li.classList.add('space');
          }
        }
      }

    // CALLING THE ADDPHRASETODISPLAY FUNCTION USING THE PHRASEARRAY VARIABLE
      addPhraseToDisplay(phraseArray);

  // CHECK THE LETTER
    function checkLetter(button){
      const letter = document.querySelectorAll('.letter');
      let letterFound = null;
      for(let i = 0; i < letter.length; i++){
        if(letter[i].textContent === button){
          letter[i].style.transition = 'all 2s';
          letter[i].classList.add('show');
          letterFound = true;
        }
      } return letterFound;
    }

  // CHECKWIN FUNCTION
    function checkWin(){
      const showing = docuemnt.querySelectorAll('.show');
      const letter = document.querySelectorAll('.letter');
      let newPhrase = getRandomPhraseArray(phrases);
      if(showing.length === letter.length){
        overlay.className = 'win';
        overlay.style.display = 'flex';
        title.textContent = 'You have won!'
        button.textContent = 'Restart'
      } else if (missed === 5){
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        title.textContent = 'Maybe Next Time!'
        button.textContent = 'Restart'
      }

      start.addEventListener('click', (e) => {
        missed = 0;
        phraseUL.textContent = '';
        overlay.styel.display = 'none';
        for(let i = 0; i < hearts.length; i++){
          hearts[i].src = 'images/liveHeart.png'
        }
        for(i = 0; i < qwertyButtons.length; i++){
          qwertyButtons[i].removeAttribute('class');
          qwertyButtons[i].removeAttribute('disabled');
        }
        addPhraseToDisplay(newPhrase);
      });
    }

// KEYBOARD EVENT LISTENER
  qwerty.addEventListener('click', (e) => {
      let target = e.target;
      const button = target.textContent;
      let guess = checkLetter(button);
      if(target.type === 'submit'){
        target.classList.add('chosen');
        target.setAttribute('disabled', '');

        let letterFound = checkLetter(button);
        if(letterFound === null){
        for (let i = 0; i < hearts.length; i++) {
          hearts[missed].src = 'images/lostHeart.png';
          }
        missed += 1;
       }
     }
     checkWin();
  });
