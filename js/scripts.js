window.onload = function() {
    traverse(document.body);
    showCountdown();
};
function traverse(el){
    persian={0:'۰',1:'۱',2:'۲',3:'۳',4:'۴',5:'۵',6:'۶',7:'۷',8:'۸',9:'۹'};
    if(el.nodeType==3){
        var list=el.data.match(/[0-9]/g);
        if(list!=null && list.length!=0){
            for(var i=0;i<list.length;i++)
                el.data=el.data.replace(list[i],persian[list[i]]);
        }
    }
    for(var i=0;i<el.childNodes.length;i++){
        traverse(el.childNodes[i]);
    }
}

function showCountdown() {
    var fecha = document.getElementById("dateEnd").value;
    if (fecha != '') {
        var countDownDate = new Date(fecha).getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var arrayOfDays = Array.from(String(days), Number);
            if(days <10) {
                arrayOfDays = Array.from("0" + String(days), Number);
            }
            var arrayOfHours = Array.from(String(hours), Number);
            if(hours <10) {
                arrayOfHours = Array.from("0" + String(hours), Number);
            }

            var arrayOfMinutes = Array.from(String(minutes), Number);
            if(minutes <10) {
                arrayOfMinutes = Array.from("0" + String(minutes), Number);
            }


            // Output the result in an element with id="demo"
            document.getElementById("day1").innerHTML = arrayOfDays[1];
            document.getElementById("day2").innerHTML = arrayOfDays[0];

            document.getElementById("hour1").innerHTML = arrayOfHours[1];
            document.getElementById("hour2").innerHTML = arrayOfHours[0];


            document.getElementById("minute1").innerHTML = arrayOfMinutes[1];
            document.getElementById("minute2").innerHTML = arrayOfMinutes[0];


            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }

            traverse(document.body);
        }, 1000);
    }else{
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}
