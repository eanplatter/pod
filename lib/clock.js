window.addEventListener('load', startTime);

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if(h > 12) {
        h = h - 12;
    }
    document.getElementById('txt').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

$(document).ready(function() {
    var pulse = function() {
    $(".pulse").animate({ 
      backgroundColor: '#8CCDA4',
      color: '#5E896D'
    }, 14000, function() {
        $(".pulse").animate({
            backgroundColor: '#F05F5F',
            color: '#833B3B'
        }, 14000);
    });

  };

pulse();

window.setInterval(function(){
  pulse();
}, 30000);

});