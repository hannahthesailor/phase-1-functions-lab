// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const hqStreet = 42;
    return Math.abs(blocks - hqStreet);
  }

  function distanceFromHqInBlocks(blocks) {
    const hqStreet = 42;
    return Math.abs(blocks - hqStreet);
  }
  
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start);
    return distance * 264;
  }
  function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(blocks);
    return distanceInBlocks * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distanceInFeet <= 400) {
        fare = 0;
      } else if (distanceInFeet <= 2000) {
        fare = (distanceInFeet - 400) * 0.02;
      } else if (distanceInFeet <= 2500) {
        fare = 25;
      } else {
        return 'cannot travel that far';
      }
    
      return fare;
    };