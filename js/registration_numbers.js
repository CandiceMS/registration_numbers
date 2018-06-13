function AddRegistrations(storageMap) {
  var reg = [];
  var location = '';
  var map = {};
  function regUpper(regInput) {
    reg = regInput.toUpperCase();
    return reg;
  }
  function capitalise(location_Input) {
    var lower = location_Input.toLowerCase();
    location = lower.charAt(0).toUpperCase() + lower.slice(1);
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
  }
  function returnMap() {
    return map;
  }
  function returnLocation() {
    location = Object.keys(map);
      return location;
  }
  function regReturn(map) {
    for (var key in map) {
      if (map[key]) {
        reg = map[key];
        return reg;
      }
    }
  }
  function keyValues(map, location) {
    var keyValue = map[location];
    return keyValue;
  }
  // NOTES:
    // Object.values(map);
//changes map to an array, removes key name,
//assigns an index instead and returns values

    // Object.is(param1, param2)
//compares params to check if both are the
//same value.
//Returns a boolean value

return {
    regUpper,
    capitalise,
    storeNewMap,
    mapReg,
    returnMap,
    returnLocation,
    regReturn,
    keyValues
  }
}
