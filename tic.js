    const boxes = document.querySelectorAll(".box");
    const gameINfo = document.querySelector(".game-info");
    // const gameINfo = document.getElementsByClassName("game-info")
    let newGamwbtn = document.querySelector("#button");

    let currrentPlayer ;
    let gameGrid;
    
    const winningPosition=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ];


// lets create a fun to initialize  the gamr

function gameInit(){
    currrentPlayer ="X";
    // initially all grid should empty
    gameGrid=["","","","","","","","",""];
    //UI par bhi empty karna padega
    boxes.forEach((box, index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents = "all";

        //Remove green color- initialze box with css properties again
        box.classList= `box box${index+1}`


    })
    newGamwbtn.classList.remove("active");
    
    gameINfo.innerText = `Current Player - ${ currrentPlayer }`;


}

gameInit();




function swapTurn(){
    if(currrentPlayer==="X"){
        currrentPlayer="0";
    }
    else{
        currrentPlayer="X"
    }

    gameINfo.innerText =`Current Player - ${currrentPlayer}`;
}




boxes.forEach((box,index)=>{
    box.addEventListener("click", ()=>{
        hadleClick(index);
    })
});





function chaeckGameOver(){
    // newGamwbtn.classList.add("acive");
    let ans ="";

    // all 3 boxes should be non-empty ans equal

    //iterating     on winning position of all possible valu

  winningPosition.forEach((positon)=>{
    if((gameGrid[positon[0]]!==""|| gameGrid[positon[1]]!==""|| gameGrid[positon[2]]!=="")&& (gameGrid[positon[0]]===gameGrid[positon[1]]) &&(gameGrid[positon[1]]==gameGrid[positon[2]])){

        if(gameGrid[positon[0]]==="X")
         ans ="X";  
        else 
        ans="0";

        //disable after wining 1 player 

        boxes.forEach((box)=>{
            box.style.pointerEvents="none";
        })

        //now show winner through green color
        boxes[positon[0]].classList.add("win");
        boxes[positon[1]].classList.add("win");
        boxes[positon[2]].classList.add("win");
        if(ans!=""){
            gameINfo.innerText =`Winner Player - ${ans}`;
            return;
            
          }
        


    }

  });

  
  //When no any winner - TIed condition then we reach here

  let fillCOunt = 0;
  gameGrid.forEach((box)=>{
    if(box!=="") fillCOunt++;

  })
    
  if(fillCOunt===9){
    gameINfo.innerText ="Game Tied ! ";
  }
  

    
    
}




function hadleClick(index){
    if(gameGrid[index]===""){
        boxes[index].innerText =currrentPlayer;
        gameGrid[index] = currrentPlayer;   
        boxes[index].style.pointerEvents = "none";
        // newGamwbtn.classList.add("acive");

        // x ki bari thi to ab 0 aayega
        swapTurn();

        //kon gitega

        chaeckGameOver();
    }
    

}

// if click on new game then game initialize again


newGamwbtn.addEventListener("click", gameInit);


