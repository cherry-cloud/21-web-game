document.addEventListener("DOMContentLoaded", () => {
  let startBtn = document.querySelector(".start");
  let startDiv = document.querySelector(".startGame");
  let gameBtnsDiv = document.querySelector(".gameBtns")
  let hitBtn = document.createElement("button");//create game buttons
  
  let stayBtn = document.createElement("button");//create game button
  
  let deckID;
  // let deck;
  let draw;
  let humanScore = document.querySelector(".scoreHuman");
  
  const getData = async () => {
    try {

      let deck = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
      return deck
      

    } catch(error) {
      console.log(error);
    }
  }
 
  const test = () => {
    let dataT = getData();//grabbing a new deck and then calling it here 
    console.log("GET", dataT);
  }
  test();

  const startGame = async () => {
    // let dataT = getData();//grabbing a new deck and then calling it here 
    // console.log(dataT);
    try {
      //let deckID = dataT.data.deck_id;
      // debugger;
      // draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`);
      // console.log(draw);
      
    }catch(error) {
      console.log(error)
    }
  }

  
  startBtn.addEventListener("click", () => {
    startDiv.innerHTML = ""
    startGame()
    gameBtnsDiv.appendChild(hitBtn)
    hitBtn.innerText = "HIT!"
    gameBtnsDiv.appendChild(stayBtn)
    stayBtn.innerText = "STAY!"
    
  })
})


// let playersFirstCards = draw.data.cards;

// playersFirstCards.forEach(i => {
//   let showCards = document.querySelector(".humanPlayer");
//   let imageURL = i["image"];
//   let cardImg = document.createElement("img");
//   cardImg.src = imageURL;
//   showCards.appendChild(cardImg);
//   let placeHolder = 0;
//   let cardValue
//   debugger;
//     const score = (value) => {
//       cardValue = +(i["value"])//fixed concant issue but now need to get both card values
//       cardValue += cardValue
//       cardValue = placeHolder
    
//     }
//     placeHolder = score(i["value"])
  
//   let playerScore = placeHolder;//concanting fix
//   cardValue += playerScore;

//   humanScore.innerHTML = playerScore;

// })


// hitBtn.addEventListener("click", () => {

// })

// stayBtn.addEventListener("click", () => {
//   debugger;
//   // let draw2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=3`)
//   //   let dealersThreeCards = draw2.data.cards

//   //   dealersThreeCards.forEach(i =>{
//   //   let showCardsCPU = document.querySelector("dealer")
//   //   let imageURLCPU = i["image"]
//   //   let cardImgCPU = document.createElement("img")
//   //   cardImgCPU.src = imageURLCPU;
//   //   showCardsCPU.appendChild(cardImgCPU)//this broke something WHY

//   // })
    
// })



// // create ul before for loop "[player hand"
// // then froEach card we want to = create an li, then create an image, the img src should be the cards image then you want to attach the image to the li, then you want to append the li to the ul/= player hand, then append the ul to the body


//     // const computerDraw = async () => {
//     //   let draw2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=3`)
//     // }//put inside of hit function/button

  