function produceDrivingRange(blockRange){

  return function(startBlock, endBlock) {
    const distance = Math.abs(parseInt(startBlock.slice(0,-2)) - parseInt(endBlock.slice(0,-2)))

    const blocks = Math.abs(blockRange - distance)

    if (distance < blockRange) {
      return `within range by ${blocks}`
    } else {
      return `${blocks} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent){
  return function(total) {
    return tipPercent * total
  }
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
