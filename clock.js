/**
 * Created by SunChen on 2016/05/12.
 */


var setAlarm = function(newtime){
    var thedate;
    if(newtime instanceof Date){
        //keep date object
        thedate=newtime;
    }
    else{
        //convert from string formatted like hh[:mm[:ss]]]
        var arr = newtime.split(':');
        thedate=new Date();
        for(var i= 0; i <3 ; i++){
            //force to int
            arr[i]=Math.floor(arr[i]);
            //check if NaN or invalid min/sec
            if( arr[i] !==arr[i] || arr[i] > 59) arr[i]=0 ;
            //no more than 24h
            if( i==0 && arr[i] > 23) arr[i]=0 ;
        }
        thedate.setHours(arr[0],arr[1],arr[2]);
    }
    //alert(el.id);
    el.alarmTime = thedate;
};

var synced_delay= 1000 - ((new Date().getTime()) % 1000);
setTimeout(function(){startClock(x,y);},synced_delay);