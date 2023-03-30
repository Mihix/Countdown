let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let daysLeft;
let cYear;
let daysPerYear;
let daysinFeb;




let interval = window.setInterval(function(){
    let cDate = new Date();
    cHour = cDate.getHours();
    cMin = cDate.getMinutes();
    cSec = cDate.getSeconds();
    cDay = cDate.getDate();
    cMonth = cDate.getMonth() +1;
    cYear  =cDate.getFullYear();
    
    if(cYear %4 ==0){
        daysPerYear =366;
        daysinFeb = 29;
    } else {
        daysPerYear = 365;
        daysinFeb = 28;
    }

    switch(cMonth){
        case 1: 
            daysLeft = daysPerYear;//january 1
            break;
        case 2:
            daysLeft = daysPerYear-31;//feburuary 1 
            break;
        case 3 :
            daysLeft = daysPerYear - (31 + daysinFeb);// March 1
            break;
        case 4 :
            daysLeft = daysPerYear - (62 +  daysinFeb);//April 1
            break;
        case 5 : 
            daysLeft = daysPerYear - (92 +  daysinFeb);//May 1
            break;
        case 6 : 
            daysLeft = daysPerYear - (123 + daysinFeb);//June 1
            break;
        case 7 : 
            daysLeft = daysPerYear - (153 + daysinFeb);//July 1
            break;
        case 8 : 
            daysLeft = daysPerYear - (184 + daysinFeb);//August 1
            break;
        case 9 : 
            daysLeft = daysPerYear - (215 + daysinFeb);//september 1
            break;
        case 10 : 
            daysLeft = daysPerYear - (245 + daysinFeb);//Octomber
            break;
        case 10 : 
            daysLeft = daysPerYear - (276 + daysinFeb);//Novermber
            break;
        case 10 : 
            daysLeft = daysPerYear - (306 + daysinFeb);//December
            break;
    }

    document.getElementById('seconds').innerHTML = 60-cSec;
    document.getElementById('Minutes').innerHTML = 60-cMin;
    document.getElementById('hours').innerHTML = 24 - cHour;
    document.getElementById('days').innerHTML = daysLeft - cDay;
    
   

},1000)