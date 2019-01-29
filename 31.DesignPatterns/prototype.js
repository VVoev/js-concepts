var TeslaModelS = function () {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
}

TeslaModelS.prototype.go = function () {
    // Rotate wheels
    console.log(`this telsta is going to run wheels like crazy`)
}

TeslaModelS.prototype.stop = function () {
    // Apply brake pads
}

var tesla = new TeslaModelS();
tesla.go();