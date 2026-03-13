const hrToMin = function(time) {
    const formatedTime = time.split(':');
    return (Number(formatedTime[0]) * 60) + Number(formatedTime[1]);
}

const calculateParkingFee = function(parkTime, pickupTime){
    let parkTimeVal = hrToMin(parkTime), pickupTimeVal = hrToMin(pickupTime);
    const pastNightVal = 10, pastNightFlag = parkTimeVal > pickupTimeVal;
    if(pastNightFlag) {
        pickupTimeVal = (pickupTimeVal + (24 * 60)) ;
    }
    let totalTime = Math.ceil((pickupTimeVal - parkTimeVal)/60)*3;
    return totalTime <= 3 ? `$${5}`: `$${totalTime + (pastNightFlag ? pastNightVal : 0)}`; 
}

console.log(calculateParkingFee("11:11", "11:10"));