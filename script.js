let c1=0;
let c2=0;
const choices=document.querySelectorAll('.cont');
const message=document.querySelector('#result');
//console.log('abc');
//Computer's choice
const compchoice=()=>{
    const options=['rock','paper','scissors'];
    let num=Math.floor(Math.random()*3);
    return options[num];
}

//Decision making
const playGame=(userChoice)=>{
    const compChoice=compchoice();
    let ans=0;
    if(userChoice===compChoice){
        ans=0;
    }
    else if(userChoice==='rock'){
        ans=(compChoice==='scissors')?1:-1;
    }
    else if(userChoice==='paper'){
        ans=(compChoice==='rock')?1:-1;
    }
    else if(userChoice==='scissors'){
        ans=(compChoice==='paper')?1:-1;
    }
    console.log(`User: ${userChoice} :: Computer: ${compChoice} Result: ${ans}`);
    updateScore(ans,userChoice,compChoice);
}

//scores updation
const updateScore=(ans,userChoice,compChoice)=>{
    if(ans===1){
        c1++;
        message.innerHTML=`User: ${userChoice} Computer: ${compChoice}<br><br> You win!`;
    }
    else if(ans===-1){
        c2++;
        message.innerHTML=`User: ${userChoice} Computer: ${compChoice}<br><br> Computer wins!`;
    }
    else{
        message.innerHTML=`User: ${userChoice} Computer: ${compChoice}<br><br> It's a tie!`;
    }
    document.querySelector('#p1score').innerHTML=c1;
    document.querySelector('#p2score').innerHTML=c2;
}

//Event listeners for user choices
choices.forEach(choice=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id');
        playGame(userChoice);
    });
});
        