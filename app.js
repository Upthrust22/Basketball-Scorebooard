// Elements Selectors
const homeScore = document.getElementById('home-score');
const awayScore = document.getElementById('away-score');
const homeAdd1 = document.getElementById('home-add1');;
const homeAdd2 = document.getElementById('home-add2');
const homeAdd3 = document.getElementById('home-add3');
const awayAdd1 = document.getElementById('away-add1');
const awayAdd2 = document.getElementById('away-add2');
const awayAdd3 = document.getElementById('away-add3');


// Initializing score
let homeScoreCount = 0;
let awayScoreCount = 0;

// Add Event Listeners
homeAdd1.addEventListener('click', function() {
    homeScoreCount += 1;
    homeScore.textContent = homeScoreCount;
})
homeAdd2.addEventListener('click', function() {
    homeScoreCount += 2;
    homeScore.textContent = homeScoreCount;
})
homeAdd3.addEventListener('click', function() {
    homeScoreCount += 3;
    homeScore.textContent = homeScoreCount;
})
awayAdd1.addEventListener('click', function() {
    awayScoreCount += 1;
    awayScore.textContent = awayScoreCount;
})
awayAdd2.addEventListener('click', function() {
    awayScoreCount += 2;
    awayScore.textContent = awayScoreCount;
})
awayAdd3.addEventListener('click', function() {
    awayScoreCount += 3;
    awayScore.textContent = awayScoreCount;
})




