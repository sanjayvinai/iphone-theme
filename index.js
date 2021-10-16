var day = document.getElementById("day-month");
var time = document.getElementById("clock");
var Night = document.getElementById("night");
var lock = document.getElementById("lock");
var notificatonbtn = document.getElementById("notification")

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
setInterval(() => {
    var t = new Date;
    time.innerHTML = `${t.getHours()}:${t.getMinutes()}`;
    day.innerHTML = `${days[t.getDay()]}, ${months[t.getMonth()]} ${t.getDate()}`;
}, 1000);


Night.onclick = () => {
    if(lock.style.color == "white"){
        document.getElementById("mainContainer").style.backgroundImage = `url('./images/light.jpeg')`;
        time.style.color = "black";
        day.style.color = "black";
        lock.style.color = "black";
    }
    else{
        document.getElementById("mainContainer").style.backgroundImage = `url('./images/dark.jpeg')`;
        time.style.color = "white";
        day.style.color = "white";
        lock.style.color = "white";
    }
};

notificatonbtn.onclick = () =>{
    var content = document.getElementById("notification-container");
    var notifications = document.createElement("div");
    var cln = content.cloneNode(true);
    notifications.appendChild(cln);
    cln = notifications.cloneNode(true);
    console.log(content);
    console.log(notifications);
    document.getElementById("mainContainer").appendChild(cln);

};


