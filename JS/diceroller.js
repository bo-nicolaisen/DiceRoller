
/*datamodel ---------------------------------------------------*/
// dice face filenames
const diceFaces = ["diceOne.svg", "diceTwo.svg", "diceThree.svg", "diceFour.svg", "diceFive.svg", "diceSix.svg"];
// dice graphics directory
const diceGraphics = "/media/dicefaces/SVG/";
// number of dices
const diceCount = 4;
// app hook 
const myApp = document.getElementById("diceroller");

// result array
let rollList = [];

// draw offset for dice
const offset=10;

// app entry point
initDiceRoller();


/* Controllers ------------------------------------------------*/

function initDiceRoller() {


    for (let i = 1; i < diceCount + 1; i++) {
        let diceRoll = 6;
       
        showDice(diceRoll);
    }
    showResult();
    addRollButton("roll the dices");
}

/* --------------------------*/
function rollAll() {
    console.log("roll the dices");

    rollList = [];
    clearDices();

    for (let i = 1; i < diceCount + 1; i++) {
        let diceRoll = randomNumber();
        rollList.push(diceRoll);
        showDice(diceRoll);
    }
   
    showResult();
    addRollButton("Roll again");
}



/* --------------------------*/

function randomNumber() {
    min = 1;
    max = 6;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* view code-----------------------------------------------------*/




/* --------------------------*/
function clearDices() {
    myApp.innerHTML = "";
}



/* --------------------------*/
function showDice(myRoll) {


    let card = document.createElement("DIV");

    let face = document.createElement("IMG");  // Create a <IMG> node
    face.classList.add("dice");

    face.src = diceGraphics + diceFaces[myRoll - 1];

  
    card.appendChild(drawDice(myRoll)); // SVG Drawn version
    //card.appendChild(face); // IMG driven version
    card.classList.add("diceCard");

    myApp.appendChild(card);


}


/* --------------------------*/
function showResult() {
    let result = 0;


    for (i = 0; i < rollList.length; i++) {
        result += rollList[i];
    }


    let resultElement = document.createElement("P");
    resultElement.innerHTML = result;

    resultElement.classList.add("result");


    myApp.appendChild(resultElement);


}

function addRollButton(myText) {



    let buttonElement = document.createElement("BUTTON");

    buttonElement.innerHTML = myText;


    buttonElement.setAttribute('id', 'roll');
    buttonElement.setAttribute('onclick', 'rollAll();');


    myApp.appendChild(buttonElement);

}










function drawDice(myRoll){

    let mySvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg'); 
   // let mySvg = document.createElement('svg'); 
 
    let myRect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');  

    myRect.setAttribute('x', offset);
    myRect.setAttribute('y', offset);
    myRect.setAttribute('width', '100');
    myRect.setAttribute('height', '100');
    myRect.setAttribute('rx', '20');
    myRect.setAttribute('fill', 'white');
    myRect.setAttribute('stroke', 'black');
    myRect.setAttribute('stroke-width', '3');
   
    mySvg.appendChild(myRect);

  
   switch(myRoll){
    case 1:
       mySvg.appendChild(drawCircle(50,50));
        break;
        case 2:
            mySvg.appendChild(drawCircle(80,20));
            mySvg.appendChild(drawCircle(20,80));
              break;

              case 3:
                mySvg.appendChild(drawCircle(50,50));
                mySvg.appendChild(drawCircle(80,20));
                mySvg.appendChild(drawCircle(20,80));
                  break;

                  case 4:
                    mySvg.appendChild(drawCircle(20,20));
                    mySvg.appendChild(drawCircle(20,80));
                    mySvg.appendChild(drawCircle(80,20));
                    mySvg.appendChild(drawCircle(80,80));
                      break;

                      case 5:
                        mySvg.appendChild(drawCircle(50,50));
                        mySvg.appendChild(drawCircle(20,20));
                        mySvg.appendChild(drawCircle(20,80));
                        mySvg.appendChild(drawCircle(80,20));
                        mySvg.appendChild(drawCircle(80,80));
                          break;

                          case 6:
                            mySvg.appendChild(drawCircle(20,20));
                            mySvg.appendChild(drawCircle(20,80));
                            mySvg.appendChild(drawCircle(80,20));
                            mySvg.appendChild(drawCircle(80,80));

                            mySvg.appendChild(drawCircle(20,50));
                            mySvg.appendChild(drawCircle(80,50));
                              break;
          
        default:
   }


  return mySvg;


}




function drawCircle(x,y){

    let myCircle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');  

    
    myCircle.setAttribute('r', '10');
   
    myCircle.setAttribute('cx',x+offset);
    myCircle.setAttribute('cy', y+offset);
    myCircle.setAttribute('fill', 'black');
    return myCircle;
}



