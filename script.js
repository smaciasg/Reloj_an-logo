function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    var horas = (time/3600)-12;
    var horas_grad = horas*30 + 180;
    var min = ((time/3600) - (Math.trunc(horas)+12))*60;
    var min_grad = min*6 + 180 ; 
    var seg = ((((time/3600) - (Math.trunc(horas)+12))*60)-Math.trunc(min))*60;
    var seg_grad = seg*6 + 180;

    var item_hora = document.querySelector("#hour");
    item_hora.style.transform = "rotate("+horas_grad+"deg)";

    var item_min = document.querySelector("#minutes");
    item_min.style.transform = "rotate("+min_grad+"deg)";

    var item_seg = document.querySelector("#seconds");
    item_seg.style.transform = "rotate("+seg_grad+"deg)";

    console.log(time, horas, horas_grad, min, min_grad, seg, seg_grad);
}, 1000); 