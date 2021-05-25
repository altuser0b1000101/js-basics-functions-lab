const address = 42;
let price = 0;
let feet = 264

 function distanceFromHqInBlocks(block) {
    let dist = block - address;
    if (dist < 0 ) {
        dist = dist * -1;
    }
    return dist;
   }

   function distanceFromHqInFeet(block){
   return distanceFromHqInBlocks(block)*feet;
  }


 begin = 48, 60, 28
 end = 43, 50, 34
function distanceTravelledInFeet(begin, end){
    if (begin < end){
    return(end - begin)*feet;}
     else {
     (begin - end)*feet  
    }
  }
  distanceTravelledInFeet(43, 48);


function calculatesFarePrice(start,destination){
    let fare = distanceTravelledInFeet(start,destination)
       if (fare < 400){
       return 0;
    } else if (fare < 400 && fare > 2000) {
        return (fare) + 128 * .02;
    } else if (fare > 2001 && fare < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
 }


calculatesFarePrice(distanceFromHqInFeet)(43,44);
calculatesFarePrice(distanceFromHqInFeet)(34,32);








// // Code your solution in this file!
// let address = 42
// let price = 0
// let feet = 264

// function distanceFromHqInBlocks(block){
// let dist = block - address;
//         if (dist < 0){
//         dist = dist * -1;
//     }
//     return dist;
// }

// let distFeet = (block - address) * feet;

// function distanceFromHqInFeet(distanceFromHqInBlocks){
//     return distanceFromHqInBlocks * distFeet;
// }


// // // else if (dist < 42){