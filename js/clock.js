const WEEK_DAYS = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
const MONTHS = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]

function padWithZero(number) {
    return (number < 10) ? "0" + number : number;
}

function showTime(){
    const now = new Date();

    const dayOfWeek = WEEK_DAYS[now.getDay()]
    const day = now.getDate()

    const month = MONTHS[now.getMonth()]

    const hours = padWithZero(now.getHours()); 
    const minutes = padWithZero(now.getMinutes()); 

    const time = `${dayOfWeek} ${day} ${month} ${hours}:${minutes}`;
    
    document.getElementById("clock").innerText = time;
    
    setTimeout(showTime, 1000); 
}
 
showTime();