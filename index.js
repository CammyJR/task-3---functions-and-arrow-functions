console.log("\t\t\t\tWelcome to Guess-n-Win!\nTry to make the right guess and climb up the ladder.\n");

//Array to hold usernames and points 
playerData = [];

//Declaring some varibles
let lBnd = 1;   //lowerbound of the range for a new player.
let uBnd = 2;  //upperbound of the range for a new player.
let stage = 1; //Default stage of new player.
let pnt = 0;   // Default points of a new player

//function to generate range
function guessNum(lBnd, uBnd) {
  let rndNum = (Math.trunc((Math.random() * (uBnd - lBnd)) * 10) / 10) + lBnd; // generating a random number within the given range.
  //console.log(rndNum);


  if (stage === 1) {
    let userName = prompt(`Input a Username`)
    console.log(`\nHello ${userName}, Select a number between ${lBnd} and ${uBnd} [1.0, 2.1, 2.3, ... ] `);
    let guess = Number(prompt("")); // Taking in guess of user.

    //Ensuring just numbers are inputed as guess
    if (Number.isNaN(guess) === false) {
      //checking if the guess is right
      if (guess === rndNum) {
        console.log(`Hurray! You've won a point`);
        pnt += 1;
        stage += 1;
        uBnd += 1;
        // cnt += 1;

      } else {//Where input is not a number
        console.log("Opps! Your Guess was wrong (-_-)");
        console.log(`Do you wish to continue playing? (yes/no)`);
        restart = prompt("");
        if (restart === "yes") {//Code to restart the game 
          pnt = 0;
          stage = 1;
          uBnd = 2;
          console.log(`Enter a number between ${lBnd} and ${uBnd}`);
          let guess = Number(prompt(""));
          let checker = (guess) => {
            if (Number.isNaN(guess) === false) {
              console.log(`Hurray you won a point`);
              pnt += 1;
              stage += 1;
              uBnd += 1;
            }
          }
          checker();

        } else {
          console.log(`Thanks for playing.\nResults\nTotal Points: ${pnt} \nStage: ${stage}`);
          let newGame = prompt("New Game? (yes/no)");
          if (newGame === "yes") {
            guessNum(lBnd, uBnd);
          } else {
            //Nothing initializes, the game ends.
          }
        }
      }

    } else {//where a number is not inputed as guess
      console.log(`Wrong input.Input must be between a number.`);
      console.log(`Enter a number between ${lBnd} and ${uBnd}`);
      let guess = Number(prompt(""));
      let checker = (guess) => {
        if (Number.isNaN(guess) === false) {
          if (guess === rndNum) {
            console.log(`Hurray you won a point`);
            pnt += 1;
            stage += 1;
            uBnd += 1;
          }
        }
        else {
          checker();
        }
      }
      checker();//tests validity of input and proceeds.
    }

    //function to save cookie
    function saveCookie(username, points, stage) {
      playerData.push({ username, points, stage });
    }
    saveCookie(userName, pnt, stage);
    console.log(playerData);

    guessNum(lBnd, uBnd); // calls the function again; this continues the game

  } else { //This initializes when the player moves up to another stage.(it skips the whole username input)
    console.log(`\t\t\t\tWelcome to Stage ${stage}`);
    console.log(`Select a number between ${lBnd} and ${uBnd}`);
    let guess = Number(prompt(""));

    //Ensuring that user's guess is a number.
    if (Number.isNaN(guess) === false) {
      if (guess === rndNum) {
        console.log(`Hurray! You've won another point.`);
        //pnt += 1;
        stage += 1;
        uBnd += 1;
        // cnt += 1;
        user = playerData.length - 1; //This is the index of the first player.

        playerData[user].points += 1;//The index made dynamic for the case where this is another user.
        playerData[user].stage += 1;

        console.log(playerData);
        guessNum(lBnd, uBnd);
      }
      else {
        console.log("Opps! Your Guess was wrong (-_-)");
        user = playerData.length - 1
        console.log(`Results:\nPoints: ${playerData[user].points}\nStage: ${playerData[user].stage}`)
        console.log(`Do you wish to continue playing? (yes/no)`);
        restart = prompt("");
        if (restart === "yes") {
          pnt = 0;
          stage = 1;
          uBnd = 2;
          let rndNum = (Math.trunc((Math.random() * (uBnd - lBnd)) * 10) / 10) + lBnd;
          console.log(rndNum);
          console.log(`Enter a number between ${lBnd} and ${uBnd}`);
          let guess = prompt("");
          if (Number.isNaN(guess) === false) {
            if (rndNum === guess) {
              console.log(`Hurray! You've won a point.`);
              
              uBnd += 1;
              user = playerData.length - 1;
              playerData[user].points = 1;
              playerData[user].stage = 1;
              stage += 1;
              

            }
            //console.log(playerData);
            //console.log(stage);
            guessNum(lBnd, uBnd);
            
          }
        }


      }

    } else {
      console.log(`Wrong input.Input must be between a number.`);
      console.log(`Enter a number between ${lBnd} and ${uBnd}`);
      let guess = Number(prompt(""));
      let checker = (guess) => {
        if (Number.isNaN(guess) === false) {
          if (rndNum === guess) {
            console.log(`Hurray you won a point`);
            pnt += 1;
            stage += 1;
            uBnd += 1;
            guessNum(lBnd, uBnd);
          }
        }
      }
      checker();
    }


  }


}


guessNum(lBnd, uBnd);







// //Control to check if the user inputed a number
// if (checker === false) {
//   if (guess === rndNum) {
//     console.log(`Hurray! You've won a point!`);
//   } else {
//     console.log(`oops.Try again`)
//   }
// } 
// else {
//   console.log(`Wrong input. Input must be between a number between the specified range `)
// }
