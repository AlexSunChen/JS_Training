/**
 * Created by SunChen on 2016/05/12.
 */

var alarmTime;
var setAlarm = function(newtime){
    var thedate;
    if(newtime instanceof Date){
        //keep date object
        thedate=newtime;
    }
    else{
        var arr = newtime.split(':');
        thedate=new Date();
        for(var i= 0; i <3 ; i++){
            arr[i]=Math.floor(arr[i]);
            if( arr[i] !==arr[i] || arr[i] > 59) arr[i]=0 ;
            if( i==0 && arr[i] > 23) arr[i]=0 ;
        }
        thedate.setHours(arr[0],arr[1],arr[2]);
    }
    alarmTime = thedate;
};

const ISAlarmTime = function (nowTime){
    var end_min = alarmTime.getHours()*60*60+alarmTime.getMinutes()*60+alarmTime.getSeconds();
    var now = nowTime.getHours()*60*60+nowTime.getMinutes()*60+nowTime.getSeconds();
    if (end_min === now)
    return true ;
    else return false;
}

function checkTime() {
    if(ISAlarmTime(new Date()))
        alert("time march");
    setTimeout(function(){checkTime();},1000);
}
function LoopTime(){
    var newDate = new Date();
    var h = newDate.getHours();
    var m = newDate.getMinutes();
    var s = newDate.getSeconds();

    $("#clock").text(h+":"+m+":"+s);


    /*if(alarmTime === null){
        alert("undefined");
    }*/
    if (ISAlarmTime)

    var synced_delay = 1000;
    setTimeout(function(){LoopTime();},synced_delay);
}

$(document).ready(function () {
    $("#set").click(function () {
        setAlarm($("#set").val());
        checkTime();
    });
    LoopTime();
});
