var century;
var year;
var month;
var day;
var dayOfWeek;

function getInput(){
    century=parseInt(document.getElementById("century").value);
    year=parseInt(document.getElementById("year").value);
    month=parseInt(document.getElementById("month").value);
    day=parseInt(document.getElementById("day").value);
    console.log(century);
    console.log(year);
    console.log(month);
    console.log(day);

    if(isNaN(century)){
        alert("Incorrect Century")
    }else if(isNaN(year)){
        alert("Incorrect Year")
    }else if(month>12){
        alert("Incorrect Month")
    }else if (day>31){
        alert("Incorrect Day")
    }

    function calculateDay(){
        getInput();
        dayOfWeek = (( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7).toFixed();
        console.log(dayOfWeek);
        return(dayOfWeek);
    }
}