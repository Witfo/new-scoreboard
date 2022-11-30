totalHome = document.getElementById("score-home")
totalGuest = document.getElementById("score-guest")
let homeScore = 0;
let guestScore = 0;

function homeAddOne(){
    homeScore += 1
    totalHome.textContent = homeScore
}

function homeAddTwo(){
    homeScore += 2
    totalHome.textContent = homeScore
}

function homeAddThree(){
    homeScore += 3
    totalHome.textContent = homeScore
}

function guestAddOne(){
    guestScore += 1
    totalGuest.textContent = guestScore
}

function guestAddTwo(){
    guestScore += 2
    totalGuest.textContent = guestScore
}

function guestAddThree(){
    guestScore += 3
    totalGuest.textContent = guestScore
}

function reset(){
    homeScore = 0
    guestScore = 0
    totalHome.textContent = homeScore
    totalGuest.textContent = guestScore
}