const day1 = new Date('June 14, 2020 17:00:00');
const togetherTracker = document.querySelector("#togetherSince");

function setTimer() {
    var str = "";
    var now = new Date();
    var totalSeconds = (now- day1)/1000;
    var days = Math.floor(totalSeconds/86400);
    var hours = Math.floor((totalSeconds%86400)/3600);
    
    str += "It's been an amazing " + days + " days " + hours + " hours " + now.getMinutes() + " minutes and " + now.getSeconds() + " seconds being together with you. I love you mucho mucho x " +
    days + " million"
    togetherTracker.textContent = str;
}


setInterval(setTimer, 1000);