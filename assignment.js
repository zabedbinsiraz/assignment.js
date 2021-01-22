

// kilometerToMeter function starts here

function kilometerToMeter(distanceInKm){

    if(distanceInKm >= 0){

        var distanceInMeter = distanceInKm * 1000;
        return distanceInMeter;
    }
    else{
         return "Negative distance can not accept here."
        }
}

// kilometerToMeter function ends here

// budgetCalculator function starts here

function budgetCalculator(watchNeed, phoneNeed, laptopNeed){

    var totalBudget = 0;

if(watchNeed >= 0 && laptopNeed >= 0 && phoneNeed >= 0){
    var watchCost = watchNeed * 50;
    var phoneCost = phoneNeed * 100;
    var laptopCost = laptopNeed * 500;
   
    totalBudget = watchCost + phoneCost + laptopCost;
    
}
else{ 
      totalBudget = 'Invalid input are provided by you. Please, input valid one.'
     }
     return totalBudget;
}

// budgetCalculator function ends here

// hotelCost function starts here

function hotelCost(hotelStayDays){
    var totalCost = 0;

if(hotelStayDays<=10 && hotelStayDays>=0){
     totalCost = hotelStayDays * 100;
    
}
else if(hotelStayDays<=20 && hotelStayDays>=0){
    var firstCost = 10 * 100;
    var remainingDays = hotelStayDays - 10;
    var secondCost = remainingDays * 80;
     totalCost = firstCost + secondCost;
    
}
else if(hotelStayDays>=20){
    var firstCost = 10 * 100;
    var secondCost = 10 * 80;
    var remainingDays = hotelStayDays - 20;
    var thirdCost = remainingDays * 50;
     totalCost = firstCost + secondCost + thirdCost;
   
}
else{
    totalCost = "Try to deliver a positive input.";
  }

return totalCost;

}

// hotelCost function ends here

// megaFriend function starts here

function megaFriend(friendsNameArray){

   var longestNameFriend = friendsNameArray[0];

for(var i = 0; i<friendsNameArray.length; i++){
    var nextFriend = friendsNameArray[i];

    if(nextFriend.length>longestNameFriend.length){
        longestNameFriend = nextFriend;
    } 
}
if(friendsNameArray.length == 0){
    longestNameFriend = 'Please provide a valid array.';
}
return longestNameFriend;
}

// megaFriend function ends here