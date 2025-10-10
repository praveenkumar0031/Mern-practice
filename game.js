const button=document.querySelectorAll('button');
const result=document.getElementById('result');
const choice=['rock','paper','scissor'];
button.forEach(button => {
    button.addEventListener('click',()=>{

        const player=button.textContent;
        const computer=choice[Math.floor(Math.random()*3)];
        
        result.textContent=`You chose ${player}. Computer chose ${computer}. ${whowins(player,computer)}`
    })
});
function whowins(user,computer){
    if(user==computer){
        return "Round Draw.";
    }
    else if((user==="rock"&& computer==="scissor")||(user==="scissor"&& computer==="paper")||(user==="paper"&& computer==="rock")){
        return "You Won!";
    }
    else{
        return "You Lose!";
    }
}