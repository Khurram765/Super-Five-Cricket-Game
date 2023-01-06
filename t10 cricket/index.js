let scoreboard=document.getElementById("scoreboard");
let btn=document.getElementById("btn");
let total=document.getElementById("total");
let ball=document.getElementById("balls");
let wickets=document.getElementById("wickets");
let target=document.getElementById("target");
var scoreSetter=0
var w=0
var b=0
var bTwo=0
var compareTarget=0
var audio=new Audio("./audio/bat.mp3")
var audioTwo=new Audio("./audio/out.mp3")
var rb=30
var rr=0
btn.addEventListener("click",()=>{
    
    var score=Math.floor(Math.random()*7)
    ++b
   
    ball.value=b
   
    if(score==0){
        scoreboard.innerHTML="Dot Ball"
        
    } 
    if(score==1){
        scoreboard.innerHTML="Single"
        audio.play()
    }  
    if(score==2){
        scoreboard.innerHTML="Two Runs"
        audio.play()
    }
    if(score==3){
        scoreboard.innerHTML="Three Runs"
        audio.play()
    } 
    if(score==4){
        scoreboard.innerHTML="Boundary"
        audio.play()
    }
    if(score==5){
        scoreboard.innerHTML="Wicket"
        scoreSetter=scoreSetter-5
        wickets.value=++w
        audioTwo.play()
        audio.pause()
        rr=rr+5
        alert("you are out")
    }
    if(score==6){
        scoreboard.innerHTML="Sixer"
        audio.play()
    }
    scoreSetter+=score
    total.value=scoreSetter
    
    if(target.value>0){
        --rb
        if(ball.value==30 || wickets.value==10){
            alert("2nd innings is over")
            alert("you lose")
            window.location.reload()
        }else if(total.value>=compareTarget){
            alert("you won")
            window.location.reload()
        }
        rr=rr-score
        document.getElementById("rruns").innerHTML=rr
        document.getElementById("rballs").innerHTML=rb
    }else if(ball.value==30 || wickets.value==10){
        target.value=scoreSetter+1
        compareTarget=scoreSetter+1
        rr=compareTarget
        scoreSetter=0
        total.value=0
        b=0
        w=0
        wickets.value=0
        score=0
        alert("First innings is over")
        alert("team two needs " + target.value + " runs to win that match")
        
    }
    console.log(target.value)
    console.log(total.value)
    
})

