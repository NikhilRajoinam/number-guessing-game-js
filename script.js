const minNum= 50;
const maxNum= 100;

let guess;
let running =true;
let attempts = 0;
const answer= Math.floor(Math.random()*(maxNum - minNum + 1))+minNum;

while(running){

    guess=window.prompt(`select a number from ${minNum}-${maxNum}`);
    guess=Number(guess);

    if(isNaN(guess))
    {
        window.alert("enter a valid number");

    }
    else if (guess>maxNum||guess<minNum)
    {
        window.alert("enter a valid number");

    }
    else{
        attempts++;
        if(guess>answer){
            window.alert("too high try again");

        }
        else if (guess<answer)
        {
           window.alert("too low try again")

        }
        else 
        {
            window.alert(`you have guess the correct answer ${answer} after ${attempts} attempts `)
            running=false;
        }
    }


}