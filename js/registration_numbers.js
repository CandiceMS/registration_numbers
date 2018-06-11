function AddRegistrations(storageMap) {
  var reg = [];
  var location = {};
  var map = {};
//  var mapArray = [];
  function regUpper(regInput) {
    reg = regInput.toUpperCase();
    return reg;
  }
  function capitalise(location_Input) {
    var lower = location_Input.toLowerCase();
    location = lower.charAt(0).toUpperCase() + lower.slice(1);
    //how to use a forEach()???
    //how to avoid loop?
    return location;
  }
  function storeNewMap() {
    if (storageMap) {
      map = storageMap;
    }
  }
  function mapReg(reg, location) {
    storeNewMap();
    if (reg == "" || location == "") {
      return;
    }
    if (map[location] === undefined) {
     map[location] = [reg];
   }
   if (map[location] === location || map[location].includes(reg)) {
     return;
   }
   else {
     map[location].push(reg);
   }
    console.log(map);
  }
  function returnMap() {
    return map;
  }
  function returnLocation() {
  //   location = Object.keys(map);
    return location;
  }
  function regReturn() {
  //  reg =
    return reg;
  }

return {
    regUpper,
    capitalise,
    storeNewMap,
    mapReg,
    returnMap,
    returnLocation,
    regReturn
  }
}
