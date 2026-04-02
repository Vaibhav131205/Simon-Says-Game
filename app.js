let game_seq=[];
let user_seq=[];

let btns = ["red","green","yellow","blue"];
let started = false;

let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
        started = true;
    }

    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    user_seq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx= Math.floor(Math.random()*3);
    let randColor= btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);

    game_seq.push(randColor);
    console.log(game_seq);

    btnFlash(randBtn);
}

function checkAns(idx){
    if(user_seq[idx]===game_seq[idx]){
        if(user_seq.length==game_seq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText= `Game Over 😭😭. Your Score is ${level}. Press "Any" key to "Start again"`;
        gameOver();
        reset();
    }
}

document.querySelector("body").style(background-color).red;
function gameOver( {
    setTimeout(document.querySelector("body").style(background-color).red;, 250);
    setTimeout(document.querySelector("body").style(background-color).white;,250);
})

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor= btn.getAttribute("id");
    user_seq.push(userColor);
    console.log(user_seq);
    checkAns(user_seq.length-1);
}

let allBtn = document.querySelectorAll(".btn");

for (btn of allBtn){
    btn.addEventListener("click",btnPress);

}

function reset(){
    started=false;
    user_seq=[];
    game_seq=[];
    level=0;

}
